import React from "react";
import styled from "styled-components";
import {
  BriefcaseIcon,
  CalendarIcon,
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

interface User {
  _id: string;
  username: string;
  fullName: string;
  avatar?: string;
  status: string;
  isOnline: boolean;
  lastSeen: Date;
  jobTitle?: string;
  biography?: string;
}

interface ProfileProps {
  onClick: () => void;
  isOpen: boolean;
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ onClick, isOpen, user }) => {
  if (!isOpen) {
    return null;
  }

  const formatJoinDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  };

  const getStatusText = () => {
    if (user.isOnline) {
      return user.status === 'idle' ? 'Idle' : 'Online';
    }
    return 'Offline';
  };

  const getStatusColor = () => {
    if (!user.isOnline) return '#6b7280';
    return user.status === 'idle' ? '#f2c100' : '#43a25a';
  };

  return (
    <>
      <StyledProfile>
        <StyledProfileContent>
          <StyledProfileCover>
            <StyledAvatar>
              <StyledAvatarPic>
                <StyledAvatarPicContent>
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.fullName} />
                  ) : (
                    <StyledAvatarPlaceholder>
                      {user.fullName.charAt(0).toUpperCase()}
                    </StyledAvatarPlaceholder>
                  )}
                </StyledAvatarPicContent>
                <StyledBar />
              </StyledAvatarPic>
              <StyledAvatarName>
                <h4>{user.fullName}</h4>
                <span>@{user.username}</span>
                <StyledStatusIndicator>
                  <StyledStatusDot color={getStatusColor()} />
                  <StyledStatusText>{getStatusText()}</StyledStatusText>
                </StyledStatusIndicator>
              </StyledAvatarName>
            </StyledAvatar>
          </StyledProfileCover>

          <StyledUserInfo>
            <StyledNavigation>
              <StyledButtonList>
                <StyledButtonListItem>Personal Info</StyledButtonListItem>
                <StyledButtonListItem>Mutual Friends</StyledButtonListItem>
              </StyledButtonList>
            </StyledNavigation>

            <StyledPersonalInfo>
              <StyledInfoItem>
                <StyledInfoIcon>
                  <EnvelopeIcon />
                </StyledInfoIcon>
                <StyledInfoData>@{user.username}</StyledInfoData>
              </StyledInfoItem>

              {user.jobTitle && (
                <StyledInfoItem>
                  <StyledInfoIcon>
                    <BriefcaseIcon />
                  </StyledInfoIcon>
                  <StyledInfoData>{user.jobTitle}</StyledInfoData>
                </StyledInfoItem>
              )}

              <StyledInfoItem>
                <StyledInfoIcon>
                  <CalendarIcon />
                </StyledInfoIcon>
                <StyledInfoData>Joined {formatJoinDate(user.lastSeen)}</StyledInfoData>
              </StyledInfoItem>
            </StyledPersonalInfo>

            {user.biography && (
              <StyledBio>
                <p>{user.biography}</p>
              </StyledBio>
            )}
          </StyledUserInfo>

          <StyledCloseModal onClick={onClick}>
            <XMarkIcon />
          </StyledCloseModal>
        </StyledProfileContent>
      </StyledProfile>
    </>
  );
};

export default Profile;

const StyledProfile = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000039;
  z-index: 234567890876543;
`;

const StyledProfileContent = styled.div`
  width: 100%;
  height: 50rem;
  max-width: 70rem;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 2rem;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  position: relative;
  border: 1px solid ${({ theme }) => theme.border.primary};
`;

const StyledCloseModal = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff39;
  color: var(--light);
  cursor: pointer;
  
  &:hover {
    background-color: #ffffff58;
  }
  
  svg {
    width: 2.2rem;
  }
`;

const StyledProfileCover = styled.div`
  width: 100%;
  height: 13rem;
  background: var(--blue);
  margin-bottom: 16rem;
  position: relative;
`;

const StyledAvatar = styled.div`
  position: absolute;
  bottom: -16rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledAvatarPic = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.background.secondary};
  padding: 1rem;
  position: relative;
`;

const StyledBar = styled.div`
  width: 135%;
  height: 7rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.background.secondary};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const StyledAvatarPicContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 0%;
  }
`;

const StyledAvatarPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-big);
  font-weight: 600;
  color: var(--light);
  background: ${({ theme }) => theme.background.thirdly};
  text-transform: uppercase;
`;

const StyledAvatarName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  
  h4 {
    font-size: var(--text-xxl);
    line-height: 1;
    color: ${({ theme }) => theme.text.primary};
    font-weight: 500;
  }
  
  span {
    font-size: var(--text-md);
    line-height: 1;
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const StyledStatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledStatusDot = styled.div<{ color: string }>`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const StyledStatusText = styled.span`
  font-size: var(--text-sm);
  color: ${({ theme }) => theme.text.secondary};
`;

const StyledUserInfo = styled.div`
  width: 100%;
  max-height: 19rem;
  overflow: auto;
`;

const StyledNavigation = styled.div`
  background-color: ${({ theme }) => theme.background.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.border.secondary};
  margin: 0 2rem;
  position: sticky;
  top: 0;
`;

const StyledButtonList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyledButtonListItem = styled.li`
  font-size: var(--text-md);
  color: ${({ theme }) => theme.text.thirdly};
  padding: 1rem 0;
  cursor: pointer;
  position: relative;
  
  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }
  
  &:first-child::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.text.thirdly};
  }
`;

const StyledPersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
`;

const StyledInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledInfoIcon = styled.div`
  color: ${({ theme }) => theme.text.thirdly};
  
  svg {
    width: 2rem;
  }
`;

const StyledInfoData = styled.div`
  color: ${({ theme }) => theme.text.thirdly};
  font-size: var(--text-md);
`;

const StyledBio = styled.div`
  padding: 0 2rem 2rem;
  
  p {
    font-size: var(--text-md);
    color: ${({ theme }) => theme.text.thirdly};
    line-height: 1.6;
  }
`;