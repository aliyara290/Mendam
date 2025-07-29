import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Avatar from "@app/avatar/Avatar";
import {
  BellAlertIcon,
  Cog8ToothIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import QuickProfile from "./QuickProfile";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import FriendRequestsNotification from "../notifications/FriendRequestsNotification";
import { useFriends } from "@/contexts/FriendsContext";

interface StatusBarProps {}

const StatusBar: React.FC<StatusBarProps> = ({}) => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
  const { friendRequests } = useFriends();
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleCloseNotifications = () => {
    setIsNotificationOpen(false);
  };

  const handleToggleProfile = () => {
    if (!isProfileOpen) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
    setIsProfileOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <StyledStatusBar>
        <StyledStatusBarContent>
          <StyledStatusBarContainer>
            {window.innerWidth <= 700 ? (
              <>
                <StyledItemsList>
                  <StyledItems isActive={location.pathname === "/app/@me"}>
                    <Link to={"/app/@me"}>
                      <StyledItemIcon>
                        <HomeIcon />
                      </StyledItemIcon>
                      <StyledItemLabel>
                        <span>Home</span>
                      </StyledItemLabel>
                    </Link>
                  </StyledItems>
                  <StyledItems
                    isActive={isProfileOpen}
                    onClick={handleToggleProfile}
                  >
                    <StyledItemProfile
                      isActive={location.pathname === "/app/friends"}
                    >
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.fullName} />
                      ) : (
                        <div className="placeholder">
                          {user.fullName.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </StyledItemProfile>
                    <StyledItemLabel>
                      <span>Profile</span>
                    </StyledItemLabel>
                  </StyledItems>
                  <StyledItems
                    isActive={isNotificationOpen}
                    onClick={() => setIsNotificationOpen(true)}
                  >
                    <StyledItemIcon>
                      <BellAlertIcon />
                      <div className="friend-request-length">
                        {friendRequests.length}
                      </div>
                    </StyledItemIcon>
                    <StyledItemLabel>
                      <span>Notifications</span>
                    </StyledItemLabel>
                  </StyledItems>
                  <StyledItems
                    isActive={location.pathname.startsWith("/app/settings")}
                  >
                    <Link to={"/app/settings/profile"}>
                      <StyledItemIcon>
                        <Cog8ToothIcon />
                      </StyledItemIcon>
                      <StyledItemLabel>
                        <span>Settings</span>
                      </StyledItemLabel>
                    </Link>
                  </StyledItems>
                </StyledItemsList>
              </>
            ) : (
              <>
                <StyledUserAvatar onClick={handleToggleProfile}>
                  <Avatar
                    image={user.avatar}
                    userName={user.fullName}
                    status={user.status}
                    showStatus
                    showStatusCircle
                    showUserName
                  />
                </StyledUserAvatar>
                <StyledActions>
                  <StyledNotificationButton
                    onClick={() => setIsNotificationOpen(true)}
                  >
                    <BellAlertIcon />
                    <div className="friend-request-length">
                        {friendRequests.length}
                      </div>
                  </StyledNotificationButton>
                  <StyledSettingIcon>
                    <Link to={"/app/settings/profile"}>
                      <Cog8ToothIcon />
                    </Link>
                  </StyledSettingIcon>
                </StyledActions>
              </>
            )}
          </StyledStatusBarContainer>
        </StyledStatusBarContent>
        <QuickProfile
          isOpen={isProfileOpen}
          shouldAnimate={shouldAnimate}
          user={user}
          onLogout={handleLogout}
          onClose={() => setIsProfileOpen(false)}
        />
        <FriendRequestsNotification
          onClose={handleCloseNotifications}
          isNotificationsOpen={isNotificationOpen}
        />
      </StyledStatusBar>
    </>
  );
};

export default StatusBar;

interface StyledItemsProps {
  isActive?: boolean;
}

const StyledStatusBar = styled.div`
  width: 100%;
  position: relative;
`;

const StyledStatusBarContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 4565669;
  background-color: ${({ theme }) => theme.background.primary};
  padding: 1.5rem;
  @media (max-width: 1000px) {
    padding: 1rem;
  }
  @media (max-width: 700px) {
    padding: 0;
    padding-top: 1rem;
  }
`;

const StyledStatusBarContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 0.8rem;
  padding: 1rem 1.5rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.border.primary};
  @media (max-width: 1000px) {
    padding: 0.5rem 1rem 0.5rem 0.5rem;
  }
  @media (max-width: 700px) {
    border-radius: 0;
    border: none;
  }
`;

const StyledUserAvatar = styled.div`
  width: max-content;
  padding-right: 2rem;
  border-radius: 3rem;
  padding: 0.5rem;
  padding-right: 2rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.background.primary};
  }
`;

const StyledActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledSettingIcon = styled.div`
  a {
    color: ${({ theme }) => theme.text.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
    svg {
      width: 2.4rem;
      transition: transform 0.4s ease;
    }
    &:hover {
      background-color: ${({ theme }) => theme.background.primary};
      color: var(--blue);
      svg {
        transform: rotate(90deg);
      }
    }
  }
`;

const StyledLogoutIcon = styled.div`
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;

  svg {
    width: 2.4rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.background.primary};
    color: #ef4444;
  }
`;

const StyledItemsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  padding: 0.6rem 0;
`;

const StyledItems = styled.div<StyledItemsProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({ isActive }) =>
    isActive
      ? ({ theme }) => theme.text.primary
      : ({ theme }) => theme.text.placeholder};

  a {
    color: ${({ isActive }) =>
      isActive
        ? ({ theme }) => theme.text.primary
        : ({ theme }) => theme.text.placeholder};
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const StyledItemIcon = styled.div`
  position: relative;
  .friend-request-length {
     position: absolute;
    top: -3px;
    right: -3px;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 3rem;
    background-color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-size: 9px;
  }
  svg {
    color: inherit;
    width: 2.4rem;
  }
`;

const StyledItemProfile = styled.div<StyledItemsProps>`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.background.thirdly};
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 0.7px solid ${({ theme }) => theme.text.placeholder};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${({ isActive }) => (isActive ? "1" : "0.7")};
  }

  .placeholder {
    color: inherit;
    font-size: var(--text-sm);
    font-weight: 500;
  }
`;

const StyledItemLabel = styled.div`
  color: inherit;
  span {
    font-size: var(--text-xxs);
    line-height: 1;
  }
`;

const RingBallAnim = keyframes`
0% {
  transform: rotate(-10deg);
}
50% {
  transform: rotate(10deg);
}
100% {
  transform: rotate(0);
}
`;

const StyledNotificationButton = styled.button`
  position: relative;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text.primary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
.friend-request-length {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 3rem;
    background-color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-size: 9px;
  }
  &:hover {
    /* background-color: ${({ theme }) => theme.background.primary}; */
    color: var(--blue);
    svg {
      animation: ${RingBallAnim} 0.3s ease-in;
    }
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
