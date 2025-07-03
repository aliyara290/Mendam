import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@app/avatar/Avatar";
import { Cog8ToothIcon, HomeIcon } from "@heroicons/react/24/outline";
import QuickProfile from "./QuickProfile";
import { Link, useLocation } from "react-router-dom";

interface StatusBarProps { }

const StatusBar: React.FC<StatusBarProps> = ({ }) => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
  const location = useLocation()
  // const handleCloseProfile = () => {
  //   setIsProfileOpen(false);
  // };

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
                  <StyledItems isActive={location.pathname === "/app/friends"}>
                    <Link to={"/app/friends"}>
                      <StyledItemProfile isActive={location.pathname === "/app/friends"}>
                        <img src="https://res.cloudinary.com/decjm9mmr/image/upload/q_10/linkedin_qeixe5.jpg" alt="" />
                        {/* <UserIcon /> */}
                      </StyledItemProfile>
                      <StyledItemLabel>
                        <span>Profile</span>
                      </StyledItemLabel>
                    </Link>
                  </StyledItems>
                  <StyledItems isActive={location.pathname.startsWith("/app/settings")}>
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
                    image="https://res.cloudinary.com/decjm9mmr/image/upload/q_10/linkedin_qeixe5.jpg"
                    status="online"
                    showStatus
                    showStatusCircle
                    showUserName
                  />
                </StyledUserAvatar>
                <StyledSettingIcon>
                  <Link to={"/app/settings/profile"}>
                    <Cog8ToothIcon />
                  </Link>
                </StyledSettingIcon>
              </>
            )}

          </StyledStatusBarContainer>
        </StyledStatusBarContent>
        <QuickProfile
          // onClose={handleCloseProfile}
          isOpen={isProfileOpen}
          shouldAnimate={shouldAnimate}
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
  /* height: 7rem; */
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

const StyledSettingIcon = styled.div`
  a {
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
  }
`;
const StyledItemsList = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
align-items: center;
padding: 0.6rem 0;
`;
const StyledItems = styled.div<StyledItemsProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
  color: ${({ isActive }) => (isActive ? ({ theme }) => theme.text.primary : ({ theme }) => theme.text.placeholder)};

    display: flex;
    align-items: center;
    flex-direction: column;
    /* gap: 0.1rem; */
    position: relative;
    /* &::after
      {
        content: "";
        position: absolute;
        bottom: -1rem;
        left: 50%;
        transform: translateX(-50%);
        width: 150%;
        height: 3px;
        background-color: ${({ theme }) => theme.text.thirdly};
      } */
  }
`;
const StyledItemIcon = styled.div`
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
  svg {
    width: 1rem;
    /* color: ${({ theme }) => theme.text.placeholder}; */
    color: inherit;

  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${({ isActive }) => (isActive ? "1" : "0.7")};
    
  }
`;
const StyledItemLabel = styled.div`
/* color: ${({ theme }) => theme.text.thirdly}; */
/* display: none; */
    color: inherit;

span {
  font-size: var(--text-xxs);
  line-height: 1;
}
`;
