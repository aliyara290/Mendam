import axios from 'axios';
import { type ApiResponse, type LoginResponse, type RegisterResponse, type User } from '@/types/User';
import { type RegisterData } from '@/contexts/AuthContext';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
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
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: async (email: string, password: string): Promise<ApiResponse<LoginResponse>> => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  register: async (userData: RegisterData): Promise<ApiResponse<RegisterResponse>> => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  logout: async (): Promise<ApiResponse<null>> => {
    const response = await api.post('/auth/logout');
    return response.data;
  },

  getProfile: async (): Promise<ApiResponse<{ user: User }>> => {
    const response = await api.get('/auth/profile');
    return response.data;
  },

  updateProfile: async (userData: Partial<User>): Promise<ApiResponse<{ user: User }>> => {
    const response = await api.put('/users/profile', userData);
    return response.data;
  },

  updateStatus: async (status: 'online' | 'offline' | 'idle'): Promise<ApiResponse<{ status: string; isOnline: boolean }>> => {
    const response = await api.put('/users/status', { status });
    return response.data;
  },

  searchUsers: async (query: string): Promise<ApiResponse<{ users: User[] }>> => {
    const response = await api.get(`/users/search?query=${encodeURIComponent(query)}`);
    return response.data;
  },

  getUserById: async (userId: string): Promise<ApiResponse<{ user: User }>> => {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  },
};

export default api;