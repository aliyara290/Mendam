import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/routes/ProtectedRoutes";

// Public pages
import HomePage from "@pages/home/HomePage";
import LoginPage from "@/pages/auth/Login";
import RegisterPage from "@/pages/auth/Register";

// Protected app components
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

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected app routes */}
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="@me" element={<DirectMessages />} />
            <Route path="friends" element={<Friends />} />
            <Route path="groups" element={<Groups />} />
            <Route path="channel/:id" element={<Channel />} />
          </Route>

          <Route
            path="/app/settings"
            element={
              <ProtectedRoute>
                <SettingLayout />
              </ProtectedRoute>
            }
          >
            <Route path="account" element={<MyAccount />} />
            <Route path="profile" element={<Profile />} />
            <Route path="appearance" element={<Appearance />} />
            <Route path="languages" element={<Languages />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>

          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <Navigate to="/app/@me" replace />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;