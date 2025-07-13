import React, { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from 'react';
import { groupsAPI, type ChatGroup, type GroupMember, type GroupMessage } from '../services/Api';
import { useAuth } from './AuthContext';
import { useSocket } from './SocketContext';

interface GroupConversation {
  groupId: string;
  messages: GroupMessage[];
  hasMore: boolean;
  loading: boolean;
}

interface GroupsContextType {
  groups: ChatGroup[];
  groupMembers: Record<string, GroupMember[]>;
  groupConversations: Record<string, GroupConversation>;
  currentGroup: string | null;
  loading: boolean;
  error: string | null;
  
  setCurrentGroup: (groupId: string | null) => void;
  loadGroups: () => Promise<void>;
  loadGroupMembers: (groupId: string) => Promise<void>;
  loadGroupMessages: (groupId: string, page?: number) => Promise<void>;
  sendGroupMessage: (groupId: string, content: string, type?: string) => Promise<void>;
  createGroup: (name: string, description?: string, isPrivate?: boolean) => Promise<void>;
  joinGroup: (groupId: string) => Promise<void>;
  leaveGroup: (groupId: string) => Promise<void>;
  addMember: (groupId: string, userId: string) => Promise<void>;
  removeMember: (groupId: string, userId: string) => Promise<void>;
  updateMemberRole: (groupId: string, userId: string, role: string) => Promise<void>;
}

const GroupsContext = createContext<GroupsContextType | undefined>(undefined);

interface GroupsProviderProps {
  children: ReactNode;
}

export const GroupsProvider: React.FC<GroupsProviderProps> = ({ children }) => {
  const [groups, setGroups] = useState<ChatGroup[]>([]);
  const [groupMembers, setGroupMembers] = useState<Record<string, GroupMember[]>>({});
  const [groupConversations, setGroupConversations] = useState<Record<string, GroupConversation>>({});
  const [currentGroup, setCurrentGroup] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { user, isAuthenticated } = useAuth();
  const { socket, joinGroup: socketJoinGroup, leaveGroup: socketLeaveGroup } = useSocket();
  
  // Use ref to track if groups have been loaded to prevent infinite loops
  const hasLoadedGroups = useRef(false);
  // Track pending messages to avoid duplicates
  const pendingMessages = useRef<Set<string>>(new Set());

  // Load groups when authenticated - FIXED: Removed loadGroups from dependencies
  const loadGroups = useCallback(async () => {
    if (loading) return; // Prevent multiple simultaneous requests
    
    try {
      setLoading(true);
      setError(null);
      console.log('🔄 Loading groups...');
      
      const response = await groupsAPI.getUserGroups();
      if (response.success) {
        setGroups(response.data.chatGroups || []);
        hasLoadedGroups.current = true;
        
        // Join socket rooms for each group
        response.data.chatGroups?.forEach((group: ChatGroup) => {
          if (socketJoinGroup) {
            socketJoinGroup(group._id);
          }
        });
        
        console.log('✅ Groups loaded successfully:', response.data.chatGroups?.length || 0);
      }
    } catch (error: any) {
      console.error('❌ Load groups error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [socketJoinGroup, loading]);

  // Load groups on authentication - FIXED: Simplified dependencies
  useEffect(() => {
    if (isAuthenticated && !hasLoadedGroups.current && !loading) {
      loadGroups();
    }
  }, [isAuthenticated]); // Only depend on isAuthenticated

  // Socket event handlers
  useEffect(() => {
    if (!socket || !isAuthenticated) return;

    const handleNewGroupMessage = (data: {
      groupId: string;
      senderId: string;
      senderUsername: string;
      senderFullName: string;
      senderAvatar?: string;
      content: string;
      type: string;
      timestamp: Date;
      messageId: string;
    }) => {
      console.log('📨 New group message received:', data);
      
      // FIXED: Don't add messages from socket if it's our own message that's pending
      if (data.senderId === user?.id && pendingMessages.current.has(data.content)) {
        console.log('🚫 Skipping own message from socket (already added optimistically)');
        pendingMessages.current.delete(data.content);
        return;
      }
      
      const newMessage: GroupMessage = {
        _id: data.messageId || `temp_${Date.now()}`,
        senderId: {
          _id: data.senderId,
          username: data.senderUsername,
          fullName: data.senderFullName || data.senderUsername,
          avatar: data.senderAvatar,
        },
        chatGroupId: data.groupId,
        content: data.content,
        type: data.type,
        createdAt: data.timestamp,
        isEdited: false,
        readBy: [],
      };

      setGroupConversations(prev => {
        const existingConv = prev[data.groupId];
        const existingMessages = existingConv?.messages || [];
        
        // Check if message already exists (additional safety check)
        const messageExists = existingMessages.some(msg => 
          msg._id === newMessage._id || 
          (msg.senderId._id === newMessage.senderId._id && 
           msg.content === newMessage.content && 
           Math.abs(new Date(msg.createdAt).getTime() - new Date(newMessage.createdAt).getTime()) < 5000)
        );
        
        if (messageExists) {
          console.log('🚫 Message already exists, skipping');
          return prev;
        }
        
        return {
          ...prev,
          [data.groupId]: {
            groupId: data.groupId,
            messages: [...existingMessages, newMessage],
            hasMore: existingConv?.hasMore || false,
            loading: false,
          },
        };
      });
    };

    const handleGroupMemberJoined = (data: { groupId: string; member: GroupMember }) => {
      setGroupMembers(prev => ({
        ...prev,
        [data.groupId]: [...(prev[data.groupId] || []), data.member],
      }));
    };

    const handleGroupMemberLeft = (data: { groupId: string; userId: string }) => {
      setGroupMembers(prev => ({
        ...prev,
        [data.groupId]: (prev[data.groupId] || []).filter(member => member.userId._id !== data.userId),
      }));
    };

    socket.on('new_group_message', handleNewGroupMessage);
    socket.on('group_member_joined', handleGroupMemberJoined);
    socket.on('group_member_left', handleGroupMemberLeft);

    return () => {
      socket.off('new_group_message', handleNewGroupMessage);
      socket.off('group_member_joined', handleGroupMemberJoined);
      socket.off('group_member_left', handleGroupMemberLeft);
    };
  }, [socket, isAuthenticated, user?.id]);

  const loadGroupMembers = useCallback(async (groupId: string) => {
    try {
      setError(null);
      const response = await groupsAPI.getGroupDetails(groupId);
      if (response.success) {
        setGroupMembers(prev => ({
          ...prev,
          [groupId]: response.data.members || []
        }));
      }
    } catch (error: any) {
      setError(error.message);
    }
  }, []);

  const loadGroupMessages = useCallback(async (groupId: string, page: number = 1) => {
    try {
      console.log(`🔄 Loading messages for group ${groupId}, page ${page}`);
      
      setGroupConversations(prev => ({
        ...prev,
        [groupId]: {
          groupId,
          messages: prev[groupId]?.messages || [],
          hasMore: true,
          loading: true,
        },
      }));

      const response = await groupsAPI.getGroupMessages(groupId, page, 50);
      
      if (response.success) {
        const messages = response.data.messages || [];
        const hasMore = response.data.pagination?.hasMore || false;

        setGroupConversations(prev => ({
          ...prev,
          [groupId]: {
            groupId,
            messages: page === 1 ? messages : [...messages, ...(prev[groupId]?.messages || [])],
            hasMore,
            loading: false,
          },
        }));
        
        console.log(`✅ Loaded ${messages.length} messages for group ${groupId}`);
      }
    } catch (error) {
      console.error(`❌ Failed to load messages for group ${groupId}:`, error);
      setGroupConversations(prev => ({
        ...prev,
        [groupId]: {
          groupId,
          messages: prev[groupId]?.messages || [],
          hasMore: false,
          loading: false,
        },
      }));
    }
  }, []);

  const sendGroupMessage = useCallback(async (groupId: string, content: string, type: string = 'text') => {
    try {
      console.log(`📤 Sending message to group ${groupId}:`, content);
      
      // FIXED: Track this message to avoid duplicates from socket
      pendingMessages.current.add(content);
      
      // Create optimistic message with unique temp ID
      const tempId = `temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const optimisticMessage: GroupMessage = {
        _id: tempId,
        senderId: {
          _id: user?.id || '',
          username: user?.username || '',
          fullName: user?.fullName || '',
          avatar: user?.avatar,
        },
        chatGroupId: groupId,
        content,
        type,
        createdAt: new Date(),
        isEdited: false,
        readBy: [],
      };

      // Add optimistic message to UI immediately
      setGroupConversations(prev => ({
        ...prev,
        [groupId]: {
          ...prev[groupId],
          groupId,
          messages: [...(prev[groupId]?.messages || []), optimisticMessage],
          hasMore: prev[groupId]?.hasMore || false,
          loading: false,
        },
      }));

      // Send via API for persistence (prioritize API over socket for reliability)
      const response = await groupsAPI.sendGroupMessage(groupId, content, type);
      
      if (response.success) {
        const realMessage = response.data.message;
        
        // Replace optimistic message with real message
        setGroupConversations(prev => ({
          ...prev,
          [groupId]: {
            ...prev[groupId],
            groupId,
            messages: [
              ...(prev[groupId]?.messages.filter(m => m._id !== tempId) || []),
              realMessage
            ],
            hasMore: prev[groupId]?.hasMore || false,
            loading: false,
          },
        }));
        
        // Send via socket for real-time to other users (after API success)
        if (socket) {
          socket.emit('send_group_message', {
            groupId,
            content,
            type
          });
        }
        
        console.log('✅ Group message sent successfully');
      }
    } catch (error) {
      console.error('❌ Failed to send group message:', error);
      
      // Remove optimistic message on error and clean up pending tracker
      pendingMessages.current.delete(content);
      setGroupConversations(prev => ({
        ...prev,
        [groupId]: {
          ...prev[groupId],
          messages: prev[groupId]?.messages.filter(m => !m._id.startsWith('temp_')) || [],
        },
      }));
      
      throw error;
    }
  }, [socket, user]);

  const createGroup = useCallback(async (name: string, description?: string, isPrivate: boolean = false) => {
    try {
      setError(null);
      const response = await groupsAPI.createGroup(name, description, isPrivate);
      if (response.success) {
        // Refresh groups list
        hasLoadedGroups.current = false; // Reset to allow reload
        await loadGroups();
        return response.data.chatGroup;
      }
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  }, [loadGroups]);

  const joinGroup = useCallback(async (groupId: string) => {
    try {
      setError(null);
      const response = await groupsAPI.joinGroup(groupId);
      if (response.success) {
        if (socketJoinGroup) {
          socketJoinGroup(groupId);
        }
        // Refresh groups list
        hasLoadedGroups.current = false;
        await loadGroups();
      }
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  }, [socketJoinGroup, loadGroups]);

  const leaveGroup = useCallback(async (groupId: string) => {
    try {
      setError(null);
      const response = await groupsAPI.leaveGroup(groupId);
      if (response.success) {
        if (socketLeaveGroup) {
          socketLeaveGroup(groupId);
        }
        // Remove from local state
        setGroups(prev => prev.filter(group => group._id !== groupId));
        setCurrentGroup(null);
      }
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  }, [socketLeaveGroup]);

  const addMember = useCallback(async (groupId: string, userId: string) => {
    try {
      setError(null);
      const response = await groupsAPI.addMember(groupId, userId);
      if (response.success) {
        await loadGroupMembers(groupId);
      }
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  }, [loadGroupMembers]);

  const removeMember = useCallback(async (groupId: string, userId: string) => {
    try {
      setError(null);
      const response = await groupsAPI.removeMember(groupId, userId);
      if (response.success) {
        await loadGroupMembers(groupId);
      }
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  }, [loadGroupMembers]);

  const updateMemberRole = useCallback(async (groupId: string, userId: string, role: string) => {
    try {
      setError(null);
      const response = await groupsAPI.updateMemberRole(groupId, userId, role);
      if (response.success) {
        await loadGroupMembers(groupId);
      }
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  }, [loadGroupMembers]);

  const value: GroupsContextType = {
    groups,
    groupMembers,
    groupConversations,
    currentGroup,
    loading,
    error,
    setCurrentGroup,
    loadGroups,
    loadGroupMembers,
    loadGroupMessages,
    sendGroupMessage,
    createGroup,
    joinGroup,
    leaveGroup,
    addMember,
    removeMember,
    updateMemberRole,
  };

  return (
    <GroupsContext.Provider value={value}>
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = (): GroupsContextType => {
  const context = useContext(GroupsContext);
  if (!context) {
    throw new Error('useGroups must be used within a GroupsProvider');
  }
  return context;
};