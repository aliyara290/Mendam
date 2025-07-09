// frontend/src/services/Api.ts - Updated with friends functionality
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  fullName: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface UpdateProfileData {
  fullName: string;
  jobTitle?: string;
  biography?: string;
}

export interface Friend {
  _id: string;
  friendId: {
    _id: string;
    username: string;
    fullName: string;
    avatar?: string;
    status: string;
    isOnline: boolean;
    lastSeen: Date;
  };
  status: 'pending' | 'accepted' | 'blocked' | 'declined';
  acceptedAt?: Date;
}

export interface FriendRequest {
  _id: string;
  friendId: {
    _id: string;
    username: string;
    fullName: string;
    avatar?: string;
    status: string;
  };
  requestedBy: string;
  addedAt: Date;
}

export interface Message {
  _id: string;
  senderId: {
    _id: string;
    username: string;
    fullName: string;
    avatar?: string;
  };
  content: string;
  type: string;
  createdAt: Date;
  isEdited: boolean;
  readBy: Array<{
    userId: string;
    readAt: Date;
  }>;
}

export const authAPI = {
  register: async (data: RegisterData) => {
    try {
      const response = await api.post('/auth/register', data);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },

  login: async (data: LoginData) => {
    try {
      const response = await api.post('/auth/login', data);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  logout: async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('token');
    }
  },

  getProfile: async () => {
    try {
      const response = await api.get('/auth/profile');
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to get profile');
    }
  },

  updateProfile: async (data: UpdateProfileData) => {
    try {
      const response = await api.put('/users/profile', data);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to update profile');
    }
  },
};

export const friendsAPI = {
  // Get friends list
  getFriends: async () => {
    try {
      const response = await api.get('/friends');
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to get friends');
    }
  },

  // Get friend requests (received)
  getFriendRequests: async () => {
    try {
      const response = await api.get('/friends/requests');
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to get friend requests');
    }
  },

  // Send friend request
  sendFriendRequest: async (friendId: string) => {
    try {
      const response = await api.post('/friends/request', { friendId });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to send friend request');
    }
  },

  // Accept friend request
  acceptFriendRequest: async (requestId: string) => {
    try {
      const response = await api.put(`/friends/request/${requestId}/accept`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to accept friend request');
    }
  },

  // Decline friend request
  declineFriendRequest: async (requestId: string) => {
    try {
      const response = await api.put(`/friends/request/${requestId}/decline`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to decline friend request');
    }
  },

  // Remove friend
  removeFriend: async (friendId: string) => {
    try {
      const response = await api.delete(`/friends/${friendId}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to remove friend');
    }
  },

  // Block user
  blockUser: async (friendId: string) => {
    try {
      const response = await api.post('/friends/block', { friendId });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to block user');
    }
  },

  // Search users
  searchUsers: async (query: string) => {
    try {
      const response = await api.get(`/users/search?query=${encodeURIComponent(query)}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to search users');
    }
  },
};

export const messagesAPI = {
  // Send direct message
  sendDirectMessage: async (recipientId: string, content: string, type: string = 'text') => {
    try {
      const response = await api.post('/messages/direct', {
        recipientId,
        content,
        type
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to send message');
    }
  },

  // Get direct messages with a user
  getDirectMessages: async (userId: string, page: number = 1, limit: number = 50) => {
    try {
      const response = await api.get(`/messages/direct/${userId}?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to get messages');
    }
  },

  // Delete message
  deleteMessage: async (messageId: string) => {
    try {
      const response = await api.delete(`/messages/${messageId}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to delete message');
    }
  },
};

export default api;