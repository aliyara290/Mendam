import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { friendsAPI, type Friend, type FriendRequest } from '../services/Api';
import { useAuth } from './AuthContext';

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
  
  const { isAuthenticated } = useAuth();

  // Load friends on mount if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadFriends();
      loadFriendRequests();
    }
  }, [isAuthenticated]);

  const loadFriends = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await friendsAPI.getFriends();
      if (response.success) {
        setFriends(response.data.friends || []);
      }
    } catch (error: any) {
      setError(error.message);
      console.error('Failed to load friends:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadFriendRequests = async () => {
    try {
      setError(null);
      const response = await friendsAPI.getFriendRequests();
      if (response.success) {
        setFriendRequests(response.data.friendRequests || []);
      }
    } catch (error: any) {
      setError(error.message);
      console.error('Failed to load friend requests:', error);
    }
  };

  const sendFriendRequest = async (friendId: string) => {
    try {
      setError(null);
      const response = await friendsAPI.sendFriendRequest(friendId);
      if (response.success) {
        // Optionally refresh friend requests or show success message
        console.log('Friend request sent successfully');
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
        // Remove from friend requests and reload friends
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
        // Remove from friends list
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
      console.error('Failed to search users:', error);
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