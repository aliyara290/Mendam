export interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  avatar?: string;
  status: 'online' | 'offline' | 'idle';
  lastSeen?: Date;
  isOnline?: boolean;
  jobTitle?: string;
  biography?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface RegisterResponse {
  user: User;
  token: string;
}