import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
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
  setCurrentConversation: (userId: string | null) => void;
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
      senderFullName: string;
      senderAvatar?: string;
      content: string;
      type: string;
      timestamp: Date;
      messageId: string;
    }) => {
      console.log('📩 New direct message received:', data);
      
      const newMessage: Message = {
        _id: data.messageId || `temp_${Date.now()}`,
        senderId: {
          _id: data.senderId,
          username: data.senderUsername,
          fullName: data.senderFullName || data.senderUsername,
          avatar: data.senderAvatar,
        },
        content: data.content,
        type: data.type,
        createdAt: data.timestamp,
        isEdited: false,
        readBy: [],
      };

      setConversations(prev => {
        const existingConv = prev[data.senderId];
        return {
          ...prev,
          [data.senderId]: {
            userId: data.senderId,
            messages: [...(existingConv?.messages || []), newMessage],
            hasMore: existingConv?.hasMore || false,
            loading: false,
          },
        };
      });
    };

    // Listen to custom events dispatched by SocketContext
    const handleSocketMessage = (event: CustomEvent) => {
      handleNewDirectMessage(event.detail);
    };

    window.addEventListener('new_direct_message', handleSocketMessage as EventListener);
    
    return () => {
      window.removeEventListener('new_direct_message', handleSocketMessage as EventListener);
    };
  }, [socket, isAuthenticated]);

  const loadMessages = useCallback(async (userId: string, page: number = 1) => {
    try {
      console.log(`📩 Loading messages with user: ${userId}, page: ${page}`);
      
      // Set loading state
      setConversations(prev => ({
        ...prev,
        [userId]: {
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

        console.log(`✅ Messages loaded: ${messages.length}, hasMore: ${hasMore}`);

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
      console.error('❌ Failed to load messages:', error);
      setConversations(prev => ({
        ...prev,
        [userId]: {
          userId,
          messages: prev[userId]?.messages || [],
          hasMore: false,
          loading: false,
        },
      }));
    }
  }, []);

  const sendMessage = useCallback(async (recipientId: string, content: string, type: string = 'text') => {
    try {
      console.log('📤 Sending message to:', recipientId);
      
      // Create optimistic message
      const optimisticMessage: Message = {
        _id: `temp_${Date.now()}`,
        senderId: {
          _id: user?.id || '',
          username: user?.username || '',
          fullName: user?.fullName || '',
          avatar: user?.avatar,
        },
        content,
        type,
        createdAt: new Date(),
        isEdited: false,
        readBy: [],
      };

      // Add optimistic message to UI immediately
      setConversations(prev => ({
        ...prev,
        [recipientId]: {
          userId: recipientId,
          messages: [...(prev[recipientId]?.messages || []), optimisticMessage],
          hasMore: prev[recipientId]?.hasMore || false,
          loading: false,
        },
      }));

      // Send via socket for real-time
      if (socket) {
        sendDirectMessage(recipientId, content, type);
      }

      // Send via API for persistence
      const response = await messagesAPI.sendDirectMessage(recipientId, content, type);
      
      if (response.success) {
        const message = response.data.message;
        console.log('✅ Message sent successfully');
        
        // Replace optimistic message with real message
        setConversations(prev => ({
          ...prev,
          [recipientId]: {
            userId: recipientId,
            messages: [
              ...(prev[recipientId]?.messages.filter(m => m._id !== optimisticMessage._id) || []),
              message
            ],
            hasMore: prev[recipientId]?.hasMore || false,
            loading: false,
          },
        }));
      }
    } catch (error) {
      console.error('❌ Failed to send message:', error);
      
      // Remove optimistic message on error
      setConversations(prev => ({
        ...prev,
        [recipientId]: {
          ...prev[recipientId],
          messages: prev[recipientId]?.messages.filter(m => m._id !== `temp_${Date.now()}`) || [],
        },
      }));
      
      throw error;
    }
  }, [socket, sendDirectMessage, user]);

  const deleteMessage = useCallback(async (messageId: string) => {
    try {
      const response = await messagesAPI.deleteMessage(messageId);
      
      if (response.success) {
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
      console.error('❌ Failed to delete message:', error);
      throw error;
    }
  }, []);

  const markAsRead = useCallback((senderId: string, messageId: string) => {
    if (!socket || !user) return;

    socket.emit('message_read', {
      messageId,
      senderId,
    });

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
  }, [socket, user]);

  // Set current conversation with logging
  const setCurrentConversationWithLogging = useCallback((userId: string | null) => {
    console.log('🔄 Setting current conversation to:', userId);
    setCurrentConversation(userId);
  }, []);

  const value: MessagesContextType = {
    conversations,
    currentConversation,
    setCurrentConversation: setCurrentConversationWithLogging,
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