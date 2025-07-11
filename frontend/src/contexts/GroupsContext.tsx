import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
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

  // Load groups when authenticated
  const loadGroups = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('🔄 Loading groups...');
      const response = await groupsAPI.getUserGroups();
      if (response.success) {
        console.log('✅ Groups loaded:', response.data.chatGroups?.length || 0);
        setGroups(response.data.chatGroups || []);
        
        // Join socket rooms for all groups
        response.data.chatGroups?.forEach((group: ChatGroup) => {
          if (socketJoinGroup) {
            socketJoinGroup(group._id);
          }
        });
      }
    } catch (error: any) {
      console.error('❌ Failed to load groups:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [socketJoinGroup]);

  // Load groups only once when authenticated
  useEffect(() => {
    if (isAuthenticated && groups.length === 0 && !loading) {
      loadGroups();
    }
  }, [isAuthenticated, groups.length, loading, loadGroups]);

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
        return {
          ...prev,
          [data.groupId]: {
            groupId: data.groupId,
            messages: [...(existingConv?.messages || []), newMessage],
            hasMore: existingConv?.hasMore || false,
            loading: false,
          },
        };
      });
    };

    const handleGroupMemberJoined = (data: { groupId: string; member: GroupMember }) => {
      console.log('👋 Member joined group:', data);
      setGroupMembers(prev => ({
        ...prev,
        [data.groupId]: [...(prev[data.groupId] || []), data.member],
      }));
    };

    const handleGroupMemberLeft = (data: { groupId: string; userId: string }) => {
      console.log('👋 Member left group:', data);
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
  }, [socket, isAuthenticated]);

  const loadGroupMembers = useCallback(async (groupId: string) => {
    try {
      setError(null);
      console.log('👥 Loading group members for:', groupId);
      const response = await groupsAPI.getGroupDetails(groupId);
      if (response.success) {
        console.log('✅ Group members loaded:', response.data.members?.length || 0);
        setGroupMembers(prev => ({
          ...prev,
          [groupId]: response.data.members || []
        }));
      }
    } catch (error: any) {
      console.error('❌ Failed to load group members:', error);
      setError(error.message);
    }
  }, []);

  const loadGroupMessages = useCallback(async (groupId: string, page: number = 1) => {
    try {
      console.log('💬 Loading group messages for:', groupId, 'page:', page);
      
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

        console.log('✅ Group messages loaded:', messages.length, 'hasMore:', hasMore);

        setGroupConversations(prev => ({
          ...prev,
          [groupId]: {
            groupId,
            messages: page === 1 ? messages : [...messages, ...(prev[groupId]?.messages || [])],
            hasMore,
            loading: false,
          },
        }));
      }
    } catch (error) {
      console.error('❌ Failed to load group messages:', error);
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
      console.log('📤 Sending group message to:', groupId);
      
      // Create optimistic message
      const optimisticMessage: GroupMessage = {
        _id: `temp_${Date.now()}`,
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

      // Send via socket for real-time
      if (socket) {
        socket.emit('send_group_message', {
          groupId,
          content,
          type
        });
      }

      // Send via API for persistence
      const response = await groupsAPI.sendGroupMessage(groupId, content, type);
      
      if (response.success) {
        const message = response.data.message;
        console.log('✅ Group message sent successfully');
        
        // Replace optimistic message with real message
        setGroupConversations(prev => ({
          ...prev,
          [groupId]: {
            ...prev[groupId],
            groupId,
            messages: [
              ...(prev[groupId]?.messages.filter(m => m._id !== optimisticMessage._id) || []),
              message
            ],
            hasMore: prev[groupId]?.hasMore || false,
            loading: false,
          },
        }));
      }
    } catch (error) {
      console.error('❌ Failed to send group message:', error);
      
      // Remove optimistic message on error
      setGroupConversations(prev => ({
        ...prev,
        [groupId]: {
          ...prev[groupId],
          messages: prev[groupId]?.messages.filter(m => m._id !== `temp_${Date.now()}`) || [],
        },
      }));
      
      throw error;
    }
  }, [socket, user]);

  const createGroup = useCallback(async (name: string, description?: string, isPrivate: boolean = false) => {
    try {
      setError(null);
      console.log('🆕 Creating group:', name);
      const response = await groupsAPI.createGroup(name, description, isPrivate);
      if (response.success) {
        console.log('✅ Group created successfully');
        await loadGroups(); // Reload groups list
        return response.data.chatGroup;
      }
    } catch (error: any) {
      console.error('❌ Failed to create group:', error);
      setError(error.message);
      throw error;
    }
  }, [loadGroups]);

  const joinGroup = useCallback(async (groupId: string) => {
    try {
      setError(null);
      console.log('🚪 Joining group:', groupId);
      const response = await groupsAPI.joinGroup(groupId);
      if (response.success) {
        console.log('✅ Joined group successfully');
        if (socketJoinGroup) {
          socketJoinGroup(groupId);
        }
        await loadGroups(); // Reload groups list
      }
    } catch (error: any) {
      console.error('❌ Failed to join group:', error);
      setError(error.message);
      throw error;
    }
  }, [socketJoinGroup, loadGroups]);

  const leaveGroup = useCallback(async (groupId: string) => {
    try {
      setError(null);
      console.log('🚶 Leaving group:', groupId);
      const response = await groupsAPI.leaveGroup(groupId);
      if (response.success) {
        console.log('✅ Left group successfully');
        if (socketLeaveGroup) {
          socketLeaveGroup(groupId);
        }
        // Remove from local state
        setGroups(prev => prev.filter(group => group._id !== groupId));
        setCurrentGroup(null);
      }
    } catch (error: any) {
      console.error('❌ Failed to leave group:', error);
      setError(error.message);
      throw error;
    }
  }, [socketLeaveGroup]);

  const addMember = useCallback(async (groupId: string, userId: string) => {
    try {
      setError(null);
      console.log('➕ Adding member to group:', groupId, userId);
      const response = await groupsAPI.addMember(groupId, userId);
      if (response.success) {
        console.log('✅ Member added successfully');
        // Reload group members
        await loadGroupMembers(groupId);
      }
    } catch (error: any) {
      console.error('❌ Failed to add member:', error);
      setError(error.message);
      throw error;
    }
  }, [loadGroupMembers]);

  const removeMember = useCallback(async (groupId: string, userId: string) => {
    try {
      setError(null);
      console.log('➖ Removing member from group:', groupId, userId);
      const response = await groupsAPI.removeMember(groupId, userId);
      if (response.success) {
        console.log('✅ Member removed successfully');
        await loadGroupMembers(groupId);
      }
    } catch (error: any) {
      console.error('❌ Failed to remove member:', error);
      setError(error.message);
      throw error;
    }
  }, [loadGroupMembers]);

  const updateMemberRole = useCallback(async (groupId: string, userId: string, role: string) => {
    try {
      setError(null);
      console.log('🔄 Updating member role:', groupId, userId, role);
      const response = await groupsAPI.updateMemberRole(groupId, userId, role);
      if (response.success) {
        console.log('✅ Member role updated successfully');
        await loadGroupMembers(groupId);
      }
    } catch (error: any) {
      console.error('❌ Failed to update member role:', error);
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