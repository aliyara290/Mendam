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
      const socketUrl = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000';
      
      const newSocket = io(socketUrl, {
        auth: {
          token,
        },
        transports: ['websocket', 'polling'],
      });

      // Connection events
      newSocket.on('connect', () => {
        console.log('Connected to server');
        setIsConnected(true);
      });

      newSocket.on('disconnect', () => {
        console.log('Disconnected from server');
        setIsConnected(false);
      });

      newSocket.on('connect_error', (error) => {
        console.error('Connection error:', error);
        setIsConnected(false);
      });

      // User status events
      newSocket.on('user_online', (data: { userId: string; username: string }) => {
        setOnlineUsers(prev => [...prev.filter(id => id !== data.userId), data.userId]);
        console.log(`${data.username} is now online`);
      });

      newSocket.on('user_offline', (data: { userId: string; username: string }) => {
        setOnlineUsers(prev => prev.filter(id => id !== data.userId));
        console.log(`${data.username} is now offline`);
      });

      newSocket.on('user_status_change', (data: { userId: string; username: string; status: string }) => {
        console.log(`${data.username} status changed to ${data.status}`);
      });

      // Message events
      newSocket.on('new_direct_message', (data: any) => {
        console.log('New direct message:', data);
        // Handle new direct message (you can emit custom events or use a message store)
        window.dispatchEvent(new CustomEvent('new_direct_message', { detail: data }));
      });

      newSocket.on('new_group_message', (data: any) => {
        console.log('New group message:', data);
        // Handle new group message
        window.dispatchEvent(new CustomEvent('new_group_message', { detail: data }));
      });

      // Typing events
      newSocket.on('user_typing_start', (data: any) => {
        window.dispatchEvent(new CustomEvent('user_typing_start', { detail: data }));
      });

      newSocket.on('user_typing_stop', (data: any) => {
        window.dispatchEvent(new CustomEvent('user_typing_stop', { detail: data }));
      });

      // Message read receipts
      newSocket.on('message_read_receipt', (data: any) => {
        window.dispatchEvent(new CustomEvent('message_read_receipt', { detail: data }));
      });

      // Notifications
      newSocket.on('notification', (data: any) => {
        console.log('New notification:', data);
        window.dispatchEvent(new CustomEvent('notification', { detail: data }));
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
    }
  };

  const leaveGroup = (groupId: string) => {
    if (socket && isConnected) {
      socket.emit('leave_group', groupId);
    }
  };

  const sendDirectMessage = (recipientId: string, content: string, type = 'text') => {
    if (socket && isConnected) {
      socket.emit('send_direct_message', {
        recipientId,
        content,
        type,
      });
    }
  };

  const sendGroupMessage = (groupId: string, content: string, type = 'text') => {
    if (socket && isConnected) {
      socket.emit('send_group_message', {
        groupId,
        content,
        type,
      });
    }
  };

  const updateStatus = (status: 'online' | 'idle' | 'offline') => {
    if (socket && isConnected) {
      socket.emit('status_update', status);
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