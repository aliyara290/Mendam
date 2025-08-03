import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://mendam-server.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error("API Request Error:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(
      `API Response Error: ${error.response?.status} ${error.config?.url}`,
      error.response?.data
    );

    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/auth/login";
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
  status: "pending" | "accepted" | "blocked" | "declined";
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

export interface ChatGroup {
  _id: string;
  name: string;
  description?: string;
  avatar?: string;
  isPrivate: boolean;
  createdBy: {
    _id: string;
    username: string;
    fullName: string;
    avatar?: string;
  };
  maxMembers: number;
  memberCount?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface GroupMember {
  _id: string;
  userId: {
    _id: string;
    username: string;
    fullName: string;
    avatar?: string;
    status: string;
    isOnline: boolean;
  };
  chatGroupId: string;
  role: "admin" | "moderator" | "member";
  joinedAt: Date;
  isActive: boolean;
  invitedBy?: string;
}

export interface GroupMessage {
  _id: string;
  senderId: {
    _id: string;
    username: string;
    fullName: string;
    avatar?: string;
  };
  chatGroupId: string;
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
      const response = await api.post("/auth/register", data);
      return response.data;
    } catch (error: any) {
      console.error("Registration failed:", error.response?.data);
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  },

  login: async (data: LoginData) => {
    try {
      const response = await api.post("/auth/login", data);
      return response.data;
    } catch (error: any) {
      console.error("Login failed:", error.response?.data);
      throw new Error(error.response?.data?.message || "Login failed");
    }
  },

  logout: async () => {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("token");
    }
  },

  getProfile: async () => {
    try {
      const response = await api.get("/auth/profile");
      return response.data;
    } catch (error: any) {
      console.error("Get profile failed:", error.response?.data);
      throw new Error(error.response?.data?.message || "Failed to get profile");
    }
  },

  updateProfile: async (data: UpdateProfileData) => {
    try {
      const response = await api.put("/users/profile", data);
      return response.data;
    } catch (error: any) {
      console.error("Update profile failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to update profile"
      );
    }
  },
  
  uploadAvatar: async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);

      const response = await api.post("/users/avatar", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error: any) {
      console.error("Avatar upload failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to upload avatar"
      );
    }
  },

  // New avatar delete method
  deleteAvatar: async () => {
    try {
      const response = await api.delete("/users/avatar");
      return response.data;
    } catch (error: any) {
      console.error("Avatar delete failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to delete avatar"
      );
    }
  },
  getUserById: async (userId: string | null) => {
    try {
      const response = await api.get(`/users/${userId}`);
      return response.data;
    } catch (error: any) {
      console.error("User not found:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to get user"
      );
    }
  },
};

export const friendsAPI = {
  getFriends: async () => {
    try {
      const response = await api.get("/friends");
      return response.data;
    } catch (error: any) {
      console.error("Get friends failed:", error.response?.data);
      throw new Error(error.response?.data?.message || "Failed to get friends");
    }
  },

  // Get friend requests (received)
  getFriendRequests: async () => {
    try {
      const response = await api.get("/friends/requests");
      return response.data;
    } catch (error: any) {
      console.error("Get friend requests failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to get friend requests"
      );
    }
  },

  // Send friend request
  sendFriendRequest: async (friendId: string) => {
    try {
      const response = await api.post("/friends/request", { friendId });
      return response.data;
    } catch (error: any) {
      console.error("Send friend request failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to send friend request"
      );
    }
  },

  // Accept friend request
  acceptFriendRequest: async (requestId: string) => {
    try {
      const response = await api.put(`/friends/request/${requestId}/accept`);
      return response.data;
    } catch (error: any) {
      console.error("Accept friend request failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to accept friend request"
      );
    }
  },

  // Decline friend request
  declineFriendRequest: async (requestId: string) => {
    try {
      const response = await api.put(`/friends/request/${requestId}/decline`);
      return response.data;
    } catch (error: any) {
      console.error("Decline friend request failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to decline friend request"
      );
    }
  },

  // Remove friend
  removeFriend: async (friendId: string) => {
    try {
      const response = await api.delete(`/friends/${friendId}`);
      return response.data;
    } catch (error: any) {
      console.error("Remove friend failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to remove friend"
      );
    }
  },

  // Block user
  blockUser: async (friendId: string) => {
    try {
      const response = await api.post("/friends/block", { friendId });
      return response.data;
    } catch (error: any) {
      console.error("Block user failed:", error.response?.data);
      throw new Error(error.response?.data?.message || "Failed to block user");
    }
  },

  // Search users
  searchUsers: async (query: string) => {
    try {
      const response = await api.get(
        `/users/search?query=${encodeURIComponent(query)}`
      );
      return response.data;
    } catch (error: any) {
      console.error("Search users failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to search users"
      );
    }
  },
};

export const messagesAPI = {
  // Send direct message
  sendDirectMessage: async (
    recipientId: string,
    content: string,
    type: string = "text"
  ) => {
    try {
      const response = await api.post("/messages/direct", {
        recipientId,
        content,
        type,
      });
      return response.data;
    } catch (error: any) {
      console.error("Send message failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to send message"
      );
    }
  },

  // Get direct messages with a user
  getDirectMessages: async (
    userId: string,
    page: number = 1,
    limit: number = 50
  ) => {
    try {
      const response = await api.get(
        `/messages/direct/${userId}?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error: any) {
      console.error("Get messages failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to get messages"
      );
    }
  },

  // Delete message
  deleteMessage: async (messageId: string) => {
    try {
      const response = await api.delete(`/messages/${messageId}`);
      return response.data;
    } catch (error: any) {
      console.error("Delete message failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to delete message"
      );
    }
  },
};

export const groupsAPI = {
  // Get user's groups
  getUserGroups: async () => {
    try {
      const response = await api.get("/chat-groups");
      return response.data;
    } catch (error: any) {
      console.error("Get groups failed:", error.response?.data);
      throw new Error(error.response?.data?.message || "Failed to get groups");
    }
  },

  // Get group details with members
  getGroupDetails: async (groupId: string) => {
    try {
      const response = await api.get(`/chat-groups/${groupId}`);
      return response.data;
    } catch (error: any) {
      console.error("Get group details failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to get group details"
      );
    }
  },

  createGroup: async (
    name: string,
    description?: string,
    isPrivate: boolean = false,
    maxMembers: number = 100
  ) => {
    try {
      const response = await api.post("/chat-groups", {
        name,
        description,
        isPrivate,
        maxMembers,
      });
      return response.data;
    } catch (error: any) {
      console.error("Create group failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to create group"
      );
    }
  },

  sendGroupMessage: async (
    chatGroupId: string,
    content: string,
    type: string = "text"
  ) => {
    try {
      const response = await api.post("/messages/group", {
        chatGroupId,
        content,
        type,
      });
      return response.data;
    } catch (error: any) {
      console.error("Send group message failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to send group message"
      );
    }
  },

  getGroupMessages: async (
    groupId: string,
    page: number = 1,
    limit: number = 50
  ) => {
    try {
      const response = await api.get(
        `/messages/group/${groupId}?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error: any) {
      console.error("Get group messages failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to get group messages"
      );
    }
  },

  joinGroup: async (groupId: string) => {
    try {
      const response = await api.post(`/chat-groups/${groupId}/join`);
      return response.data;
    } catch (error: any) {
      console.error("Join group failed:", error.response?.data);
      throw new Error(error.response?.data?.message || "Failed to join group");
    }
  },

  leaveGroup: async (groupId: string) => {
    try {
      const response = await api.delete(`/chat-groups/${groupId}/leave`);
      return response.data;
    } catch (error: any) {
      console.error("Leave group failed:", error.response?.data);
      throw new Error(error.response?.data?.message || "Failed to leave group");
    }
  },

  addMember: async (groupId: string, userId: string) => {
    try {
      const response = await api.post(`/chat-groups/${groupId}/members`, {
        userId,
      });
      return response.data;
    } catch (error: any) {
      console.error("Add member failed:", error.response?.data);
      throw new Error(error.response?.data?.message || "Failed to add member");
    }
  },

  removeMember: async (groupId: string, userId: string) => {
    try {
      const response = await api.delete(
        `/chat-groups/${groupId}/members/${userId}`
      );
      return response.data;
    } catch (error: any) {
      console.error("Remove member failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to remove member"
      );
    }
  },

  updateMemberRole: async (
    groupId: string,
    userId: string,
    role: "admin" | "moderator" | "member"
  ) => {
    try {
      const response = await api.put(
        `/chat-groups/${groupId}/members/${userId}/role`,
        { role }
      );
      return response.data;
    } catch (error: any) {
      console.error("Update member role failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to update member role"
      );
    }
  },

  searchPublicGroups: async (query: string) => {
    try {
      const response = await api.get(
        `/chat-groups/search?query=${encodeURIComponent(query)}`
      );
      return response.data;
    } catch (error: any) {
      console.error("Search groups failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to search groups"
      );
    }
  },
};

export default api;
