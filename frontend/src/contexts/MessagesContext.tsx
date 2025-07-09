import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { messagesAPI, type Message } from '../services/Api';
import { useAuth } from './AuthContext';
import { useSocket } from './SocketContext';

interface Conversation {
  userId: string;
  messages: Message[];
  hasMore: boolean;
  loading: boolean;
}

interface MessagesContextType {
  conversations: Record<string, Conversation>;
  currentConversation: string | null;
  
  // Actions
  setCurrentConversation: (userId: string) => void;
  loadMessages: (userId: string, page?: number) => Promise<void>;
  sendMessage: (recipientId: string, content: string, type?: string) => Promise<void>;
  deleteMessage: (messageId: string) => Promise<void>;
  markAsRead: (senderId: string, messageId: string) => void;
}

const MessagesContext = createContext<MessagesContextType | undefined>(undefined);

interface MessagesProviderProps {
  children: ReactNode;
}

export const MessagesProvider: React.FC<MessagesProviderProps> = ({ children }) => {
  const [conversations, setConversations] = useState<Record<string, Conversation>>({});
  const [currentConversation, setCurrentConversation] = useState<string | null>(null);
  
  const { user, isAuthenticated } = useAuth();
  const { socket, sendDirectMessage } = useSocket();

  // Listen for new messages via socket
  useEffect(() => {
    if (!socket || !isAuthenticated) return;

    const handleNewDirectMessage = (data: {
      senderId: string;
      senderUsername: string;
      content: string;
      type: string;
      timestamp: Date;
    }) => {
      const newMessage: Message = {
        _id: `temp_${Date.now()}`, // Temporary ID until we get the real one
        senderId: {
          _id: data.senderId,
          username: data.senderUsername,
          fullName: data.senderUsername, // We might need to fetch this
          avatar: undefined,
        },
        content: data.content,
        type: data.type,
        createdAt: data.timestamp,
        isEdited: false,
        readBy: [],
      };

      setConversations(prev => ({
        ...prev,
        [data.senderId]: {
          ...prev[data.senderId],
          messages: [...(prev[data.senderId]?.messages || []), newMessage],
        },
      }));
    };

    // Listen for socket events
    socket.on('new_direct_message', handleNewDirectMessage);

    return () => {
      socket.off('new_direct_message', handleNewDirectMessage);
    };
  }, [socket, isAuthenticated]);

  const loadMessages = async (userId: string, page: number = 1) => {
    try {
      // Set loading state
      setConversations(prev => ({
        ...prev,
        [userId]: {
          ...prev[userId],
          userId,
          messages: prev[userId]?.messages || [],
          hasMore: true,
          loading: true,
        },
      }));

      const response = await messagesAPI.getDirectMessages(userId, page, 50);
      
      if (response.success) {
        const messages = response.data.messages || [];
        const hasMore = response.data.pagination?.hasMore || false;

        setConversations(prev => ({
          ...prev,
          [userId]: {
            userId,
            messages: page === 1 ? messages : [...messages, ...(prev[userId]?.messages || [])],
            hasMore,
            loading: false,
          },
        }));
      }
    } catch (error) {
      console.error('Failed to load messages:', error);
      setConversations(prev => ({
        ...prev,
        [userId]: {
          ...prev[userId],
          loading: false,
        },
      }));
    }
  };

  const sendMessage = async (recipientId: string, content: string, type: string = 'text') => {
    try {
      // Send via socket for real-time delivery
      if (socket) {
        sendDirectMessage(recipientId, content, type);
      }

      // Also send via API for persistence
      const response = await messagesAPI.sendDirectMessage(recipientId, content, type);
      
      if (response.success) {
        const message = response.data.message;
        
        // Add to local state
        setConversations(prev => ({
          ...prev,
          [recipientId]: {
            ...prev[recipientId],
            userId: recipientId,
            messages: [...(prev[recipientId]?.messages || []), message],
            hasMore: prev[recipientId]?.hasMore || false,
            loading: false,
          },
        }));
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      throw error;
    }
  };

  const deleteMessage = async (messageId: string) => {
    try {
      const response = await messagesAPI.deleteMessage(messageId);
      
      if (response.success) {
        // Remove message from all conversations
        setConversations(prev => {
          const updated = { ...prev };
          Object.keys(updated).forEach(userId => {
            updated[userId] = {
              ...updated[userId],
              messages: updated[userId].messages.filter(msg => msg._id !== messageId),
            };
          });
          return updated;
        });
      }
    } catch (error) {
      console.error('Failed to delete message:', error);
      throw error;
    }
  };

  const markAsRead = (senderId: string, messageId: string) => {
    if (!socket || !user) return;

    // Send read receipt via socket
    socket.emit('message_read', {
      messageId,
      senderId,
    });

    // Update local state to mark as read
    setConversations(prev => ({
      ...prev,
      [senderId]: {
        ...prev[senderId],
        messages: prev[senderId]?.messages.map(msg => {
          if (msg._id === messageId) {
            return {
              ...msg,
              readBy: [
                ...msg.readBy.filter(read => read.userId !== user.id),
                { userId: user.id, readAt: new Date() }
              ],
            };
          }
          return msg;
        }) || [],
      },
    }));
  };

  const value: MessagesContextType = {
    conversations,
    currentConversation,
    setCurrentConversation,
    loadMessages,
    sendMessage,
    deleteMessage,
    markAsRead,
  };

  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessages = (): MessagesContextType => {
  const context = useContext(MessagesContext);
  if (!context) {
    throw new Error('useMessages must be used within a MessagesProvider');
  }
  return context;
};