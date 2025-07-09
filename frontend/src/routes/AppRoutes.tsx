// frontend/src/routes/AppRoutes.tsx - Updated with authentication
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "@pages/home/HomePage";
import Layout from "@app/layouts/Layout";
import SettingLayout from "@app/settings/layout/Layout";
import DirectMessages from "@app/sidebar/DirectMessages";
import Friends from "@app/sidebar/Friends";
import Groups from "@app/sidebar/Groups";
import Channel from "@/components/app/sidebar/Workspace";
import MyAccount from "@app/settings/pages/MyAccount";
import Profile from "@/components/app/settings/pages/Profile";
import Appearance from "@/components/app/settings/pages/Appearance";
import Languages from "@/components/app/settings/pages/Languages";
import Notifications from "@/components/app/settings/pages/Notifications";

// Import your auth components
import Login from "@/pages/auth/Login"; // Your new login component
import Register from "@/pages/auth/Register"; // Your register component
import ProtectedRoute from "@/routes/ProtectedRoutes";
import { useAuth } from "@/contexts/AuthContext";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        
        {/* Auth Routes */}
        <Route path="/auth/login" element={<AuthRedirect><Login /></AuthRedirect>} />
        <Route path="/auth/register" element={<AuthRedirect><Register /></AuthRedirect>} />
        
        {/* Protected App Routes */}
        <Route path="/app" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route path="@me" element={<DirectMessages />} />
          <Route path="friends" element={<Friends />} />
          <Route path="groups" element={<Groups />} />
          <Route path="channel/:id" element={<Channel />} />
        </Route>
        
        {/* Protected Settings Routes */}
        <Route path="/app/settings" element={
          <ProtectedRoute>
            <SettingLayout />
          </ProtectedRoute>
        }>
          <Route path="account" element={<MyAccount />} />
          <Route path="profile" element={<Profile />} />
          <Route path="appearance" element={<Appearance />} />
          <Route path="languages" element={<Languages />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        {/* Redirect any unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

// Component to redirect authenticated users away from auth pages
const AuthRedirect: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or your loading component
  }

  // If already authenticated, redirect to app
  if (isAuthenticated) {
    return <Navigate to="/app/@me" replace />;
  }

  // If not authenticated, show auth page
  return <>{children}</>;
};

export default AppRoutes;