import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@app/avatar/Avatar";
import {
  Bars3BottomRightIcon,
  NoSymbolIcon,
  TrashIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Profile from "@app/chat-area/profile/Profile";
import Menu, { type MenuItemProps } from "@app/menu/Menu";
import { useFriends } from "@/contexts/FriendsContext";
import { useMessages } from "@/contexts/MessagesContext";

interface Recipient {
  _id: string;
  username: string;
  fullName: string;
  avatar?: string;
  status: string;
  isOnline: boolean;
  lastSeen: Date;
}

interface P2PHeaderProps {
  recipient: Recipient;
}

const P2PHeader: React.FC<P2PHeaderProps> = ({ recipient }) => {
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  const { removeFriend, blockUser } = useFriends();
  const { setCurrentConversation } = useMessages();

  const handleCloseProfile = () => {
    setOpenProfile(false);
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleRemoveFriend = async () => {
    try {
      await removeFriend(recipient._id);
      setCurrentConversation(null);
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Failed to remove friend:', error);
    }
  };

  const handleBlockUser = async () => {
    try {
      await blockUser(recipient._id);
      setCurrentConversation(null);
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Failed to block user:', error);
    }
  };

  const handleClearMessages = () => {
    alert("Clear messages functionality not implemented yet");
    setIsMenuOpen(false);
  };

  const menuItems: MenuItemProps[] = [
    {
      label: "View Profile",
      icon: <UserIcon />,
      onClick: () => {
        setOpenProfile(true);
        setIsMenuOpen(false);
      },
    },
    {
      label: "Clear messages",
      icon: <XMarkIcon />,
      onClick: handleClearMessages,
    },
    {
      label: "Remove Friend",
      icon: <TrashIcon />,
      onClick: handleRemoveFriend,
    },
    {
      label: "Block User",
      icon: <NoSymbolIcon />,
      danger: true,
      onClick: handleBlockUser,
    },
  ];

  const getStatusColor = () => {
    if (!recipient.isOnline) return "offline";
    return recipient.status === "idle" ? "idle" : "online";
  };

  const formatLastSeen = (lastSeen: Date) => {
    if (recipient.isOnline) return "Online";
    
    const now = new Date();
    const diff = now.getTime() - new Date(lastSeen).getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    
    return new Date(lastSeen).toLocaleDateString();
  };

  return (
    <>
      <StyledP2PHeader>
        <StyledLeftPart onClick={() => setOpenProfile(true)}>
          <Avatar
            image={recipient.avatar}
            showStatus
            showStatusCircle
            showUserName
            userName={recipient.fullName}
            status={getStatusColor()}
          />
          {/* <StyledUserStatus>
            <StyledStatusText>
              {formatLastSeen(recipient.lastSeen)}
            </StyledStatusText>
          </StyledUserStatus> */}
        </StyledLeftPart>
        
        <StyledRightPart>
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
      
      <Profile 
        isOpen={openProfile} 
        onClick={handleCloseProfile}
        user={recipient}
      />
    </>
  );
};

export default P2PHeader;

const StyledP2PHeader = styled.header`
  width: 100%;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: ${({ theme }) => theme.background.secondary};
  
  @media (max-width: 1000px) {
    padding: 0.5rem 1rem;
  }
`;

const StyledLeftPart = styled.div`
  width: max-content;
  border-radius: 3rem;
  cursor: pointer;
  padding: 0.7em 2rem 0.7em 0.7em;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.background.primary};
  }
`;

const StyledUserStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  
  @media (max-width: 600px) {
    display: none;
  }
`;

const StyledStatusText = styled.span`
  font-size: var(--text-sm);
  color: ${({ theme }) => theme.text.placeholder};
  line-height: 1;
`;

const StyledRightPart = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyledHamburgerIcon = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.text.placeholder};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  
  svg {
    width: 3rem;
  }
  
  &:hover {
    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.background.primary};
  }
`;