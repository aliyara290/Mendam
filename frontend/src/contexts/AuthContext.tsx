import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { authAPI, type RegisterData, type LoginData } from '../services/Api';

interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  avatar?: string;
  status: string;
  jobTitle?: string;
  biography?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void; // Add this method
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (token) {
          console.log('🔑 Token found in localStorage, verifying...');
          
          // Verify token with backend and get user info
          const response = await authAPI.getProfile();
          
          if (response.success) {
            console.log('✅ Token valid, user authenticated');
            setUser(response.data.user);
          } else {
            console.log('❌ Token invalid, removing from storage');
            localStorage.removeItem('token');
          }
        } else {
          console.log('🔍 No token found in localStorage');
        }
      } catch (error) {
        console.error('❌ Token verification failed:', error);
        localStorage.removeItem('token');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (data: LoginData) => {
    try {
      setLoading(true);
      console.log('🔐 Attempting login...');
      
      const response = await authAPI.login(data);
      
      if (response.success) {
        const { user, token } = response.data;
        
        console.log('✅ Login successful, storing token');
        localStorage.setItem('token', token);
        setUser(user);
      } else {
        throw new Error(response.message || 'Login failed');
      }
    } catch (error: any) {
      console.error('❌ Login failed:', error.message);
      throw new Error(error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    try {
      setLoading(true);
      console.log('📝 Attempting registration...');
      
      const response = await authAPI.register(data);
      
      if (response.success) {
        const { user, token } = response.data;
        
        console.log('✅ Registration successful, storing token');
        localStorage.setItem('token', token);
        setUser(user);
      } else {
        throw new Error(response.message || 'Registration failed');
      }
    } catch (error: any) {
      console.error('❌ Registration failed:', error.message);
      throw new Error(error.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      console.log('🚪 Logging out...');
      await authAPI.logout();
    } catch (error) {
      console.error('❌ Logout error:', error);
    } finally {
      console.log('🗑️ Clearing token and user state');
      localStorage.removeItem('token');
      setUser(null);
    }
  };

  const updateUser = (userData: Partial<User>) => {
    setUser(prev => prev ? { ...prev, ...userData } : null);
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout,
    updateUser,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};