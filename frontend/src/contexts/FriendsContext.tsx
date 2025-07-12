import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { friendsAPI, type Friend, type FriendRequest } from '../services/Api';
import { useAuth } from './AuthContext';
import { useSocket } from './SocketContext';

interface FriendsContextType {
  friends: Friend[];
  friendRequests: FriendRequest[];
  loading: boolean;
  error: string | null;
  
  // Actions
  loadFriends: () => Promise<void>;
  loadFriendRequests: () => Promise<void>;
  sendFriendRequest: (friendId: string) => Promise<void>;
  acceptFriendRequest: (requestId: string) => Promise<void>;
  declineFriendRequest: (requestId: string) => Promise<void>;
  removeFriend: (friendId: string) => Promise<void>;
  blockUser: (friendId: string) => Promise<void>;
  searchUsers: (query: string) => Promise<any[]>;
}

const FriendsContext = createContext<FriendsContextType | undefined>(undefined);

interface FriendsProviderProps {
  children: ReactNode;
}

export const FriendsProvider: React.FC<FriendsProviderProps> = ({ children }) => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { isAuthenticated, user } = useAuth();
  const { socket } = useSocket();

  // Load friends and requests on mount if authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      loadFriends();
      loadFriendRequests();
    }
  }, [isAuthenticated, user]);

  // Listen for real-time friend request updates
  useEffect(() => {
    if (!socket || !isAuthenticated) return;

    const handleNewFriendRequest = (data: any) => {
      loadFriendRequests();
    };

    const handleFriendRequestAccepted = (data: any) => {
      loadFriends();
      loadFriendRequests();
    };

    socket.on('new_friend_request', handleNewFriendRequest);
    socket.on('friend_request_accepted', handleFriendRequestAccepted);

    return () => {
      socket.off('new_friend_request', handleNewFriendRequest);
      socket.off('friend_request_accepted', handleFriendRequestAccepted);
    };
  }, [socket, isAuthenticated]);

  const loadFriends = async () => {
    try {
      const response = await friendsAPI.getFriends();
      if (response.success) {
        setFriends(response.data.friends || []);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const loadFriendRequests = async () => {
    try {
      const response = await friendsAPI.getFriendRequests();
      if (response.success) {
        setFriendRequests(response.data.friendRequests || []);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const sendFriendRequest = async (friendId: string) => {
    try {
      setError(null);
      const response = await friendsAPI.sendFriendRequest(friendId);
      if (response.success) {
      }
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  };

  const acceptFriendRequest = async (requestId: string) => {
    try {
      setError(null);
      const response = await friendsAPI.acceptFriendRequest(requestId);
      if (response.success) {
        setFriendRequests(prev => prev.filter(req => req._id !== requestId));
        await loadFriends();
      }
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  };

  const declineFriendRequest = async (requestId: string) => {
    try {
      setError(null);
      const response = await friendsAPI.declineFriendRequest(requestId);
      if (response.success) {
        // Remove from friend requests
        setFriendRequests(prev => prev.filter(req => req._id !== requestId));
      }
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  };

  const removeFriend = async (friendId: string) => {
    try {
      setError(null);
      const response = await friendsAPI.removeFriend(friendId);
      if (response.success) {
        setFriends(prev => prev.filter(friend => friend.friendId._id !== friendId));
      }
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  };

  const blockUser = async (friendId: string) => {
    try {
      setError(null);
      const response = await friendsAPI.blockUser(friendId);
      if (response.success) {
        // Remove from friends list
        setFriends(prev => prev.filter(friend => friend.friendId._id !== friendId));
      }
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  };

  const searchUsers = async (query: string) => {
    try {
      setError(null);
      const response = await friendsAPI.searchUsers(query);
      if (response.success) {
        return response.data.users || [];
      }
      return [];
    } catch (error: any) {
      setError(error.message);
      return [];
    }
  };

  const value: FriendsContextType = {
    friends,
    friendRequests,
    loading,
    error,
    loadFriends,
    loadFriendRequests,
    sendFriendRequest,
    acceptFriendRequest,
    declineFriendRequest,
    removeFriend,
    blockUser,
    searchUsers,
  };

  return (
    <FriendsContext.Provider value={value}>
      {children}
    </FriendsContext.Provider>
  );
};

export const useFriends = (): FriendsContextType => {
  const context = useContext(FriendsContext);
  if (!context) {
    throw new Error('useFriends must be used within a FriendsProvider');
  }
  return context;
};