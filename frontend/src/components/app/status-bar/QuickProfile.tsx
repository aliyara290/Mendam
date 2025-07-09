import { ChevronRightIcon, ArrowRightStartOnRectangleIcon, UserIcon } from "@heroicons/react/16/solid";
import React from "react";
import styled from "styled-components";
import { type User } from "@/types/User";
import { Link } from "react-router-dom";

interface QuickProfileProps {
  isOpen: boolean;
  shouldAnimate: boolean;
  user: User;
  onLogout: () => void;
}

const QuickProfile: React.FC<QuickProfileProps> = ({
  isOpen,
  shouldAnimate,
  user,
  onLogout,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return '#43a25a';
      case 'idle':
        return '#f2c100';
      case 'offline':
      default:
        return '#6b7280';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online':
        return 'online';
      case 'idle':
        return 'idle';
      case 'offline':
      default:
        return 'offline';
    }
  };

  return (
    <>
      <StyledQuickProfile isOpen={isOpen} shouldAnimate={shouldAnimate}>
        <StyledPortfolioCover>
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
            </StyledAvatarPic>
            <StyledAvatarName>
              <h4>{user.fullName}</h4>
              <span>@{user.username}</span>
            </StyledAvatarName>
          </StyledAvatar>
        </StyledPortfolioCover>
        <StyledOptions>
          <StyledOptionsContainer>
            <StyledOptionItem as={Link} to="/app/settings/profile">
              <StyledLeftPart>
               
                <StyledOptionName>Edit profile</StyledOptionName>
              </StyledLeftPart>
              <StyledRightPart>
                <StyledIcon>
                  <ChevronRightIcon />
                </StyledIcon>
              </StyledRightPart>
            </StyledOptionItem>
            <StyledLine />
            <StyledOptionItem>
              <StyledLeftPart>
                <StyledOptionIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12px"
                    height="12px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill={getStatusColor(user.status)}
                    />
                  </svg>
                </StyledOptionIcon>
                <StyledOptionName>{getStatusText(user.status)}</StyledOptionName>
              </StyledLeftPart>
              <StyledRightPart>
                <StyledIcon>
                  <ChevronRightIcon />
                </StyledIcon>
              </StyledRightPart>
            </StyledOptionItem>
            <StyledLine />
            <StyledOptionItem onClick={onLogout} isLogout>
              <StyledLeftPart>
                {/* <StyledOptionIcon>
                  <ArrowRightStartOnRectangleIcon />
                </StyledOptionIcon> */}
                <StyledOptionName>Sign out</StyledOptionName>
              </StyledLeftPart>
            </StyledOptionItem>
          </StyledOptionsContainer>
        </StyledOptions>
      </StyledQuickProfile>
    </>
  );
};

export default QuickProfile;

interface StyledQuickProfileProps {
  isOpen: boolean;
  shouldAnimate: boolean;
}

interface StyledOptionItemProps {
  isLogout?: boolean;
}

const StyledQuickProfile = styled.div<StyledQuickProfileProps>`
  position: absolute;
  left: 1.5rem;
  top: ${({ isOpen }) => (isOpen ? "-36rem" : "31rem")};
  width: 25rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.secondary};
  z-index: 456566;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border.primary};
  box-shadow: var(--shadow-lg);
  transition: ${({ shouldAnimate }) =>
    shouldAnimate ? "top 0.3s ease" : "none"};
`;

const StyledPortfolioCover = styled.div`
  width: 100%;
  height: 8rem;
  background: var(--blue);
  position: relative;
  margin-bottom: 11rem;
`;

const StyledAvatar = styled.div`
  position: absolute;
  bottom: -9rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
`;

const StyledAvatarPic = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.background.secondary};
  padding: 0.8rem;
  position: relative;
`;

const StyledAvatarPicContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background.thirdly};
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const StyledAvatarPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xxl);
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  background: linear-gradient(135deg, var(--blue), #764ba2);
  color: white;
`;

const StyledAvatarName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.4rem;
  h4 {
    font-size: var(--text-xl);
    line-height: 1;
    color: ${({ theme }) => theme.text.primary};
    font-weight: 500;
  }
  span {
    font-size: var(--text-sm);
    line-height: 1;
    color: ${({ theme }) => theme.text.thirdly};
  }
`;

const StyledOptions = styled.div`
  width: 100%;
  padding: 1rem;
  user-select: none;
`;

const StyledOptionsContainer = styled.div`
  width: 100%;
  padding: 0.7rem;
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.background.thirdly};
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const StyledOptionItem = styled.div<StyledOptionItemProps>`
  padding: 0.8rem 1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ isLogout, theme }) => 
      isLogout ? '#554955' : theme.background.secondary};
    
    ${({ isLogout }) => isLogout && `
      ${StyledOptionName} {
        color: #ff99a4;
      }
      ${StyledOptionIcon} {
        color: #ff99a4;
      }
    `}
  }
`;

const StyledOptionName = styled.div`
  font-size: var(--text-md);
  color: ${({ theme }) => theme.text.thirdly};
  line-height: 1;
`;

const StyledOptionIcon = styled.div`
  color: ${({ theme }) => theme.text.thirdly};
  display: flex;
  align-items: center;
  height: 100%;
  padding-top: 1px;
  
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.border.secondary};
  opacity: 0.3;
`;

const StyledLeftPart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledRightPart = styled.div`
  width: max-content;
`;

const StyledIcon = styled.div`
  svg {
    width: 1.6rem;
    color: ${({ theme }) => theme.text.placeholder};
  }
`;