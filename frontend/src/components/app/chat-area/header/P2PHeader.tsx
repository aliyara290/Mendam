import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "../../avatar/Avatar";
import {
  Bars3BottomRightIcon,
  NoSymbolIcon,
  PhoneIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Profile from "@app/chat-area/profile/Profile";
import Menu, { type MenuItemProps } from "@app/menu/Menu";

interface P2PHeaderProps {}

const P2PHeader: React.FC<P2PHeaderProps> = ({}) => {
  const [openPortfolio, setOpenPortfolio] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClosePortfolio = () => {
    setOpenPortfolio(false);
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const menuItems: MenuItemProps[] = [
    {
      label: "View Profile",
      icon: <UserIcon />,
      onClick: () => {
        setOpenPortfolio(true);
        handleOpenMenu();
      },
    },
    {
      label: "Block",
      icon: <NoSymbolIcon />,
      onClick: () => alert("Reply"),
    },
  ];

  return (
    <>
      <StyledP2PHeader>
        <StyledLeftPart onClick={() => setOpenPortfolio(true)}>
          <Avatar
            image="https://res.cloudinary.com/decjm9mmr/image/upload/v1750110103/WhatsApp_Image_2025-06-14_at_01.49.57_ba9322cc_uoefdw.jpg"
            showStatus
            showStatusCircle
            showUserName
            userName="leibe"
            status="online"
          />
        </StyledLeftPart>
        <StyledRightPart>
          <StyledCall>
            <StyledIcon>
              <VideoCameraIcon />
            </StyledIcon>
            <StyledLine />
            <StyledIcon>
              <PhoneIcon />
            </StyledIcon>
          </StyledCall>
          <StyledHamburgerIcon onClick={handleOpenMenu}>
            <Bars3BottomRightIcon />
          </StyledHamburgerIcon>
        </StyledRightPart>
        <Menu
          onClose={() => setIsMenuOpen(false)}
          isOpen={isMenuOpen}
          right="0"
          top="100"
          items={menuItems}
        />
      </StyledP2PHeader>
      <Profile isOpen={openPortfolio} onClick={handleClosePortfolio} />
    </>
  );
};

export default P2PHeader;

const StyledP2PHeader = styled.header`
  width: 100%;
  /* height: 8rem; */
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const StyledLeftPart = styled.div`
  width: max-content;
  border-radius: 3rem;
  cursor: pointer;
  padding: 0.7em 2rem 0.7em 0.7em;
  &:hover {
    background-color: ${({ theme }) => theme.background.primary};
  }
`;

const StyledRightPart = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyledCall = styled.div`
  width: max-content;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.primary};
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const StyledLine = styled.div`
  width: 1px;
  height: 2rem;
  background-color: ${({ theme }) => theme.background.thirdly};
`;

const StyledIcon = styled.div`
  width: 5rem;
  height: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.text.placeholder};
  &:hover {
    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.background.thirdly};
  }
  svg {
    width: 2.2rem;
  }
`;

const StyledHamburgerIcon = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.text.placeholder};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 3rem;
  }
  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }
`;
