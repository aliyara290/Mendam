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

import Login from "@/pages/auth/Login"
import Register from "@/pages/auth/Register";
import ProtectedRoute from "@/routes/ProtectedRoutes";
import { useAuth } from "@/contexts/AuthContext";
import styled from "styled-components";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />

        {/* Auth Routes */}
        <Route path="/auth/login" element={<AuthRedirect><Login /></AuthRedirect>} />
        <Route path="/auth/register" element={<AuthRedirect><Register /></AuthRedirect>} />

        <Route path="/app" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route path="@me" element={<DirectMessages />} />
          <Route path="friends" element={<Friends />} />
          <Route path="groups" element={<Groups />} />
          {/* Updated: Use the same layout for group chats */}
          <Route path="groups/:groupId" element={<Groups />} />
          <Route path="channel/:id" element={<Channel />} />
        </Route>

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

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

const AuthRedirect: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <StyledLoading>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 66.59 63.66"
          width={70}
          height={70}
        >
          <StyledLogoPath
            d="M50,70.82c-.13-.51-.28-1.13-.47-1.74A29,29,0,0,0,45,60.79a70.83,70.83,0,0,0-5.71-6.41,59.7,59.7,0,0,1-9.34-12.16c-.37-.67-.69-1.37-1.06-2.1-.06.12-.12.21-.17.31a39.53,39.53,0,0,0-3.13,10A25.62,25.62,0,0,0,27.66,66a32.27,32.27,0,0,0,7.45,9.79A52.47,52.47,0,0,0,43,81.64l.21.14c-1.85.11-8.38-2.61-11.73-4.86a33.27,33.27,0,0,1-9-9,32.14,32.14,0,0,1-5-11.7,33.2,33.2,0,0,1,21-38c-.55.66-1.1,1.29-1.61,1.95a14.4,14.4,0,0,0-2.76,5.58A11.27,11.27,0,0,0,34.93,33a39,39,0,0,0,6.27,9.26C42.88,44.15,44.63,46,46.26,48a20.22,20.22,0,0,1,3.67,6.42s0,.05.07.09c.29-.67.54-1.34.85-2a30.15,30.15,0,0,1,5-7A79.35,79.35,0,0,0,62,38.22a28.19,28.19,0,0,0,3.49-6.28,10.94,10.94,0,0,0-1-9.84c-.82-1.38-1.86-2.63-2.7-3.81C72.49,21.9,83.66,33.71,83.28,50.08a33.12,33.12,0,0,1-26.5,31.75l1.84-1.2a42.78,42.78,0,0,0,11-10.08,25.92,25.92,0,0,0,4.94-11.64A28.44,28.44,0,0,0,73.38,46c-.62-2-1.4-3.93-2.11-5.89l-.2-.06a1,1,0,0,1,0,.18A40.08,40.08,0,0,1,65.43,49c-2.17,2.71-4.57,5.21-7,7.71a35.26,35.26,0,0,0-7,10.05C50.83,68.11,50.42,69.52,50,70.82Z"
            transform="translate(-16.71 -18.17)"
          />
        </svg>
      </StyledLoading>
    )
  }

  if (isAuthenticated) {
    return <Navigate to="/app/@me" replace />;
  }

  return <>{children}</>;
};

export default AppRoutes;

const StyledLoading = styled.div`
  width: 100%;
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background.primary};
`;

const StyledLogoPath = styled.path`
  fill: ${({ theme }) => theme.text.placeholder};
`;