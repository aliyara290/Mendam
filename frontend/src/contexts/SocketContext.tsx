import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { io, Socket } from 'socket.io-client';
import { useAuth } from './AuthContext';

interface SocketContextType {
  socket: Socket | null;
  isConnected: boolean;
  onlineUsers: string[];
  joinGroup: (groupId: string) => void;
  leaveGroup: (groupId: string) => void;
  sendDirectMessage: (recipientId: string, content: string, type?: string) => void;
  sendGroupMessage: (groupId: string, content: string, type?: string) => void;
  updateStatus: (status: 'online' | 'idle' | 'offline') => void;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated && user) {
      // Initialize socket connection
      const token = localStorage.getItem('token');
      const socketUrl = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000';
      
      
      const newSocket = io(socketUrl, {
        auth: {
          token,
        },
        transports: ['websocket', 'polling'],
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
      });

      // Connection events
      newSocket.on('connect', () => {
        setIsConnected(true);
      });

      newSocket.on('disconnect', (reason) => {
        setIsConnected(false);
      });

      newSocket.on('connect_error', (error) => {
        setIsConnected(false);
      });

      newSocket.on('reconnect', (attemptNumber) => {
        setIsConnected(true);
      });

      newSocket.on('reconnect_error', (error) => {
      });

      // User status events
      newSocket.on('user_online', (data: { userId: string; username: string }) => {
        setOnlineUsers(prev => [...prev.filter(id => id !== data.userId), data.userId]);
      });

      newSocket.on('user_offline', (data: { userId: string; username: string }) => {
        setOnlineUsers(prev => prev.filter(id => id !== data.userId));
      });

      newSocket.on('user_status_change', (data: { userId: string; username: string; status: string }) => {
      });

      // Message events - these will be handled by individual contexts
      newSocket.on('new_direct_message', (data: any) => {
        // Dispatch custom event for MessagesContext to handle
        window.dispatchEvent(new CustomEvent('new_direct_message', { detail: data }));
      });

      newSocket.on('new_group_message', (data: any) => {
        // Dispatch custom event for GroupsContext to handle
        window.dispatchEvent(new CustomEvent('new_group_message', { detail: data }));
      });

      // Typing events
      newSocket.on('user_typing_start_direct', (data: any) => {
        window.dispatchEvent(new CustomEvent('user_typing_start_direct', { detail: data }));
      });

      newSocket.on('user_typing_stop_direct', (data: any) => {
        window.dispatchEvent(new CustomEvent('user_typing_stop_direct', { detail: data }));
      });

      newSocket.on('user_typing_start_group', (data: any) => {
        window.dispatchEvent(new CustomEvent('user_typing_start_group', { detail: data }));
      });

      newSocket.on('user_typing_stop_group', (data: any) => {
        window.dispatchEvent(new CustomEvent('user_typing_stop_group', { detail: data }));
      });

      // Message read receipts
      newSocket.on('message_read_receipt', (data: any) => {
        window.dispatchEvent(new CustomEvent('message_read_receipt', { detail: data }));
      });

      // Group events
      newSocket.on('group_member_joined', (data: any) => {
        window.dispatchEvent(new CustomEvent('group_member_joined', { detail: data }));
      });

      newSocket.on('group_member_left', (data: any) => {
        window.dispatchEvent(new CustomEvent('group_member_left', { detail: data }));
      });

      // Notifications
      newSocket.on('notification', (data: any) => {
        window.dispatchEvent(new CustomEvent('notification', { detail: data }));
      });

      // Friend request events
      newSocket.on('new_friend_request', (data: any) => {
        window.dispatchEvent(new CustomEvent('new_friend_request', { detail: data }));
      });

      newSocket.on('friend_request_accepted', (data: any) => {
        window.dispatchEvent(new CustomEvent('friend_request_accepted', { detail: data }));
      });

      setSocket(newSocket);

      return () => {
        newSocket.close();
        setSocket(null);
        setIsConnected(false);
        setOnlineUsers([]);
      };
    } else {
      // Clean up socket when user logs out
      if (socket) {
        socket.close();
        setSocket(null);
        setIsConnected(false);
        setOnlineUsers([]);
      }
    }
  }, [isAuthenticated, user]);

  const joinGroup = (groupId: string) => {
    if (socket && isConnected) {
      socket.emit('join_group', groupId);
    } else {
      console.warn('Cannot join group - socket not connected');
    }
  };

  const leaveGroup = (groupId: string) => {
    if (socket && isConnected) {
      socket.emit('leave_group', groupId);
    } else {
      console.warn('Cannot leave group - socket not connected');
    }
  };

  const sendDirectMessage = (recipientId: string, content: string, type = 'text') => {
    if (socket && isConnected) {
      socket.emit('send_direct_message', {
        recipientId,
        content,
        type,
      });
    } else {
      console.warn('Cannot send direct message - socket not connected');
    }
  };

  const sendGroupMessage = (groupId: string, content: string, type = 'text') => {
    if (socket && isConnected) {
      socket.emit('send_group_message', {
        groupId,
        content,
        type,
      });
    } else {
      console.warn('Cannot send group message - socket not connected');
    }
  };

  const updateStatus = (status: 'online' | 'idle' | 'offline') => {
    if (socket && isConnected) {
      socket.emit('status_update', status);
    } else {
      console.warn('❌ Cannot update status - socket not connected');
    }
  };

  const value: SocketContextType = {
    socket,
    isConnected,
    onlineUsers,
    joinGroup,
    leaveGroup,
    sendDirectMessage,
    sendGroupMessage,
    updateStatus,
  };

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};