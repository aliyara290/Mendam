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
    console.log(
      `🌐 API Request: ${config.method?.toUpperCase()} ${config.url}`
    );
    return config;
  },
  (error) => {
    console.error("❌ API Request Error:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error(
      `❌ API Response Error: ${error.response?.status} ${error.config?.url}`,
      error.response?.data
    );

    if (error.response?.status === 401) {
      console.log("🔑 Token expired or invalid, redirecting to login");
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
      console.log("🔐 Registering user:", { ...data, password: "[HIDDEN]" });
      const response = await api.post("/auth/register", data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Registration failed:", error.response?.data);
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  },

  login: async (data: LoginData) => {
    try {
      console.log("🔐 Logging in user:", { ...data, password: "[HIDDEN]" });
      const response = await api.post("/auth/login", data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Login failed:", error.response?.data);
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
      console.error("❌ Get profile failed:", error.response?.data);
      throw new Error(error.response?.data?.message || "Failed to get profile");
    }
  },

  updateProfile: async (data: UpdateProfileData) => {
    try {
      console.log("🔄 Updating profile:", data);
      const response = await api.put("/users/profile", data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Update profile failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to update profile"
      );
    }
  },
};

export const friendsAPI = {
  getFriends: async () => {
    try {
      console.log("👥 Loading friends...");
      const response = await api.get("/friends");
      console.log("✅ Friends loaded:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Get friends failed:", error.response?.data);
      throw new Error(error.response?.data?.message || "Failed to get friends");
    }
  },

  // Get friend requests (received)
  getFriendRequests: async () => {
    try {
      console.log("📬 Loading friend requests...");
      const response = await api.get("/friends/requests");
      console.log("✅ Friend requests loaded:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Get friend requests failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to get friend requests"
      );
    }
  },

  // Send friend request
  sendFriendRequest: async (friendId: string) => {
    try {
      console.log("📤 Sending friend request to:", friendId);
      const response = await api.post("/friends/request", { friendId });
      console.log("✅ Friend request sent:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Send friend request failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to send friend request"
      );
    }
  },

  // Accept friend request
  acceptFriendRequest: async (requestId: string) => {
    try {
      console.log("✅ Accepting friend request:", requestId);
      const response = await api.put(`/friends/request/${requestId}/accept`);
      console.log("✅ Friend request accepted:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Accept friend request failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to accept friend request"
      );
    }
  },

  // Decline friend request
  declineFriendRequest: async (requestId: string) => {
    try {
      console.log("❌ Declining friend request:", requestId);
      const response = await api.put(`/friends/request/${requestId}/decline`);
      console.log("✅ Friend request declined:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Decline friend request failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to decline friend request"
      );
    }
  },

  // Remove friend
  removeFriend: async (friendId: string) => {
    try {
      console.log("🗑️ Removing friend:", friendId);
      const response = await api.delete(`/friends/${friendId}`);
      console.log("✅ Friend removed:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Remove friend failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to remove friend"
      );
    }
  },

  // Block user
  blockUser: async (friendId: string) => {
    try {
      console.log("🚫 Blocking user:", friendId);
      const response = await api.post("/friends/block", { friendId });
      console.log("✅ User blocked:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Block user failed:", error.response?.data);
      throw new Error(error.response?.data?.message || "Failed to block user");
    }
  },

  // Search users
  searchUsers: async (query: string) => {
    try {
      console.log("🔍 Searching users:", query);
      const response = await api.get(
        `/users/search?query=${encodeURIComponent(query)}`
      );
      console.log("✅ Users found:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Search users failed:", error.response?.data);
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
      console.log("💬 Sending message to:", recipientId);
      const response = await api.post("/messages/direct", {
        recipientId,
        content,
        type,
      });
      console.log("✅ Message sent:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Send message failed:", error.response?.data);
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
      console.log("📩 Loading messages with user:", userId);
      const response = await api.get(
        `/messages/direct/${userId}?page=${page}&limit=${limit}`
      );
      console.log("✅ Messages loaded:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Get messages failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to get messages"
      );
    }
  },

  // Delete message
  deleteMessage: async (messageId: string) => {
    try {
      console.log("🗑️ Deleting message:", messageId);
      const response = await api.delete(`/messages/${messageId}`);
      console.log("✅ Message deleted:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Delete message failed:", error.response?.data);
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
      console.log("📁 Loading user groups...");
      const response = await api.get("/chat-groups");
      console.log("✅ Groups loaded:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Get groups failed:", error.response?.data);
      throw new Error(error.response?.data?.message || "Failed to get groups");
    }
  },

  // Get group details with members
  getGroupDetails: async (groupId: string) => {
    try {
      console.log("📋 Loading group details:", groupId);
      const response = await api.get(`/chat-groups/${groupId}`);
      console.log("✅ Group details loaded:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Get group details failed:", error.response?.data);
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
      console.log("🆕 Creating group:", name);
      const response = await api.post("/chat-groups", {
        name,
        description,
        isPrivate,
        maxMembers,
      });
      console.log("✅ Group created:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Create group failed:", error.response?.data);
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
      console.log("💬 Sending group message to:", chatGroupId);
      const response = await api.post("/messages/group", {
        chatGroupId,
        content,
        type,
      });
      console.log("✅ Group message sent:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Send group message failed:", error.response?.data);
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
      console.log("📩 Loading group messages:", groupId);
      const response = await api.get(
        `/messages/group/${groupId}?page=${page}&limit=${limit}`
      );
      console.log("✅ Group messages loaded:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Get group messages failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to get group messages"
      );
    }
  },

  joinGroup: async (groupId: string) => {
    try {
      console.log("🚪 Joining group:", groupId);
      const response = await api.post(`/chat-groups/${groupId}/join`);
      console.log("✅ Joined group:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Join group failed:", error.response?.data);
      throw new Error(error.response?.data?.message || "Failed to join group");
    }
  },

  leaveGroup: async (groupId: string) => {
    try {
      console.log("🚶 Leaving group:", groupId);
      const response = await api.delete(`/chat-groups/${groupId}/leave`);
      console.log("✅ Left group:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Leave group failed:", error.response?.data);
      throw new Error(error.response?.data?.message || "Failed to leave group");
    }
  },

  addMember: async (groupId: string, userId: string) => {
    try {
      console.log("➕ Adding member to group:", groupId, userId);
      const response = await api.post(`/chat-groups/${groupId}/members`, {
        userId,
      });
      console.log("✅ Member added:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Add member failed:", error.response?.data);
      throw new Error(error.response?.data?.message || "Failed to add member");
    }
  },

  removeMember: async (groupId: string, userId: string) => {
    try {
      console.log("➖ Removing member from group:", groupId, userId);
      const response = await api.delete(
        `/chat-groups/${groupId}/members/${userId}`
      );
      console.log("✅ Member removed:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Remove member failed:", error.response?.data);
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
      console.log("🔄 Updating member role:", groupId, userId, role);
      const response = await api.put(
        `/chat-groups/${groupId}/members/${userId}/role`,
        { role }
      );
      console.log("✅ Member role updated:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Update member role failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to update member role"
      );
    }
  },

  searchPublicGroups: async (query: string) => {
    try {
      console.log("🔍 Searching public groups:", query);
      const response = await api.get(
        `/chat-groups/search?query=${encodeURIComponent(query)}`
      );
      console.log("✅ Groups found:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Search groups failed:", error.response?.data);
      throw new Error(
        error.response?.data?.message || "Failed to search groups"
      );
    }
  },
};

export default api;
