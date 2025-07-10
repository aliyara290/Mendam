// frontend/src/contexts/GroupsContext.tsx - Complete group chat implementation
import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
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

  useEffect(() => {
    if (isAuthenticated) {
      loadGroups();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!socket || !isAuthenticated) return;

    const handleNewGroupMessage = (data: {
      groupId: string;
      senderId: string;
      senderUsername: string;
      content: string;
      type: string;
      timestamp: Date;
    }) => {
      const newMessage: GroupMessage = {
        _id: `temp_${Date.now()}`,
        senderId: {
          _id: data.senderId,
          username: data.senderUsername,
          fullName: data.senderUsername,
          avatar: undefined,
        },
        chatGroupId: data.groupId,
        content: data.content,
        type: data.type,
        createdAt: data.timestamp,
        isEdited: false,
        readBy: [],
      };

      setGroupConversations(prev => ({
        ...prev,
        [data.groupId]: {
          ...prev[data.groupId],
          messages: [...(prev[data.groupId]?.messages || []), newMessage],
        },
      }));
    };

    socket.on('new_group_message', handleNewGroupMessage);

    return () => {
      socket.off('new_group_message', handleNewGroupMessage);
    };
  }, [socket, isAuthenticated]);

  const loadGroups = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await groupsAPI.getUserGroups();
      if (response.success) {
        setGroups(response.data.chatGroups || []);
        
        response.data.chatGroups?.forEach((group: ChatGroup) => {
          if (socketJoinGroup) {
            socketJoinGroup(group._id);
          }
        });
      }
    } catch (error: any) {
      setError(error.message);
      console.error('Failed to load groups:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadGroupMembers = async (groupId: string) => {
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
      console.error('Failed to load group members:', error);
    }
  };

  const loadGroupMessages = async (groupId: string, page: number = 1) => {
    try {
      setGroupConversations(prev => ({
        ...prev,
        [groupId]: {
          ...prev[groupId],
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
      }
    } catch (error) {
      console.error('Failed to load group messages:', error);
      setGroupConversations(prev => ({
        ...prev,
        [groupId]: {
          ...prev[groupId],
          loading: false,
        },
      }));
    }
  };

  const sendGroupMessage = async (groupId: string, content: string, type: string = 'text') => {
    try {
      if (socket) {
        socket.emit('send_group_message', {
          groupId,
          content,
          type
        });
      }

      const response = await groupsAPI.sendGroupMessage(groupId, content, type);
      
      if (response.success) {
        const message = response.data.message;
        
        setGroupConversations(prev => ({
          ...prev,
          [groupId]: {
            ...prev[groupId],
            groupId,
            messages: [...(prev[groupId]?.messages || []), message],
            hasMore: prev[groupId]?.hasMore || false,
            loading: false,
          },
        }));
      }
    } catch (error) {
      console.error('Failed to send group message:', error);
      throw error;
    }
  };

  const createGroup = async (name: string, description?: string, isPrivate: boolean = false) => {
    try {
      setError(null);
      const response = await groupsAPI.createGroup(name, description, isPrivate);
      if (response.success) {
        await loadGroups();
        return response.data.chatGroup;
      }
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  };

  const joinGroup = async (groupId: string) => {
    try {
      setError(null);
      const response = await groupsAPI.joinGroup(groupId);
      if (response.success) {
        if (socketJoinGroup) {
          socketJoinGroup(groupId);
        }
        await loadGroups();
      }
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  };

  const leaveGroup = async (groupId: string) => {
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
  };

  const addMember = async (groupId: string, userId: string) => {
    try {
      setError(null);
      const response = await groupsAPI.addMember(groupId, userId);
      if (response.success) {
        // Reload group members
        await loadGroupMembers(groupId);
      }
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  };

  const removeMember = async (groupId: string, userId: string) => {
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
  };

  const updateMemberRole = async (groupId: string, userId: string, role: string) => {
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
  };

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