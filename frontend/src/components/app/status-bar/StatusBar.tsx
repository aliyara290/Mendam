import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@app/avatar/Avatar";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import QuickProfile from "./QuickProfile";

interface StatusBarProps {}

const StatusBar: React.FC<StatusBarProps> = ({}) => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);

  const handleCloseProfile = () => {
    setIsProfileOpen(false);
  };

  const handleToggleProfile = () => {
    if (!isProfileOpen) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
    setIsProfileOpen((prev) => !prev);
  };
  return (
    <>
      <StyledStatusBar>
        <StyledStatusBarContent>
          <StyledStatusBarContainer>
            <StyledUserAvatar onClick={handleToggleProfile}>
              <Avatar
                image="https://res.cloudinary.com/decjm9mmr/image/upload/q_10/linkedin_qeixe5.jpg"
                status="online"
                showStatus
                showStatusCircle
                showUserName
              />
            </StyledUserAvatar>
            <StyledSettingIcon>
              <Cog8ToothIcon />
            </StyledSettingIcon>
          </StyledStatusBarContainer>
        </StyledStatusBarContent>
        <QuickProfile
          onClose={handleCloseProfile}
          isOpen={isProfileOpen}
          shouldAnimate={shouldAnimate}
        />
      </StyledStatusBar>
    </>
  );
};

export default StatusBar;

const StyledStatusBar = styled.div`
  width: 100%;

  position: relative;
`;
const StyledStatusBarContent = styled.div`
  width: 100%;
  position: relative;
  z-index: 4565669;
  background-color: ${({ theme }) => theme.background.primary};
  padding: 1.5rem;
`;

const StyledStatusBarContainer = styled.div`
  width: 100%;
  height: 100%;
  /* height: 7rem; */
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 0.8rem;
  padding: 1rem 1.5rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.border.primary};
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

const StyledSettingIcon = styled.div`
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 2.7rem;
    transition: transform 0.6s ease;
  }
  &:hover svg {
    transform: rotate(90deg);
  }
`;
