import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "@app/search-bar/SearchBar";
import Heading from "@app/heading/Heading";
import Avatar from "@app/avatar/Avatar";
import {
  EllipsisHorizontalIcon,
  StarIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Menu, { type MenuItemProps } from "@app/menu/Menu";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface DirectMessagesProps { }

interface ChatData {
  id: string;
  userName: string;
  avatar: string;
  status: "online" | "offline" | "idle";
  lastMessage: string;
  lastMessageTime: string;
  unreadCount?: number;
}

const DirectMessages: React.FC<DirectMessagesProps> = ({ }) => {
  const [hoveredChatId, setHoveredChatId] = useState<string | null>(null);
  const [openMenuChatId, setOpenMenuChatId] = useState<string | null>(null);

  const handleToggleMenu = (chatId: string) => {
    setOpenMenuChatId(openMenuChatId === chatId ? null : chatId);
  };

  const handleCloseMenu = () => {
    setOpenMenuChatId(null);
  };

  const menuItems: MenuItemProps[] = [
    {
      label: "Add to favorite",
      icon: <StarIcon />,
      onClick: () => {
        handleCloseMenu();
      },
    },
    {
      label: "Clear messages",
      icon: <XMarkIcon />,
      onClick: () => {
        handleCloseMenu();
      },
    },
    {
      label: "Delete",
      icon: <TrashIcon />,
      danger: true,
      onClick: () => {
        handleCloseMenu();
        alert("Block functionality");
      },
    },
  ];

  const [chats] = useState<ChatData[]>([
    {
      id: "1",
      userName: "Sarah Chen",
      avatar: "",
      status: "online",
      lastMessage: "Hey! Are we still on for the meeting tomorrow?",
      lastMessageTime: "2m",
      unreadCount: 7,
    },
    {
      id: "2",
      userName: "Mike Johnson",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      status: "idle",
      lastMessage: "Thanks for sending over those files",
      lastMessageTime: "1h",
    },
    {
      id: "3",
      userName: "Emma Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      status: "online",
      lastMessage: "Perfect! See you there 👍",
      lastMessageTime: "3h",
    },
    {
      id: "4",
      userName: "David Kim",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      status: "offline",
      lastMessage: "Can we reschedule our call to next week?",
      lastMessageTime: "5h",
      unreadCount: 1,
    },
    {
      id: "5",
      userName: "Lisa Park",
      avatar:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      status: "offline",
      lastMessage: "Great job on the presentation!",
      lastMessageTime: "1d",
    },
    {
      id: "6",
      userName: "Alex Thompson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      status: "online",
      lastMessage: "I'll review the document and get back to you",
      lastMessageTime: "2d",
    },
    {
      id: "7",
      userName: "Maria Garcia",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      status: "idle",
      lastMessage: "Happy birthday! 🎉",
      lastMessageTime: "3d",
    },
    {
      id: "8",
      userName: "James Wilson",
      avatar:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face",
      status: "offline",
      lastMessage: "Let's catch up soon!",
      lastMessageTime: "1w",
    },
    {
      id: "9",
      userName: "Sophie Anderson",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      status: "online",
      lastMessage: "The project looks amazing so far",
      lastMessageTime: "1w",
      unreadCount: 3,
    },
    {
      id: "10",
      userName: "Ryan Davis",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      status: "offline",
      lastMessage: "Sure thing, I'll send it over",
      lastMessageTime: "2w",
    },
    {
      id: "11",
      userName: "James Wilson",
      avatar:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face",
      status: "offline",
      lastMessage: "Let's catch up soon!",
      lastMessageTime: "1w",
    },
    {
      id: "12",
      userName: "Sophie Anderson",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      status: "online",
      lastMessage: "The project looks amazing so far",
      lastMessageTime: "1w",
      unreadCount: 3,
    },
    {
      id: "13",
      userName: "Ryan Davis",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      status: "offline",
      lastMessage: "Sure thing, I'll send it over",
      lastMessageTime: "2w",
    },
    {
      id: "14",
      userName: "James Wilson",
      avatar:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face",
      status: "offline",
      lastMessage: "Let's catch up soon!",
      lastMessageTime: "1w",
    },
    {
      id: "15",
      userName: "Sophie Anderson",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      status: "online",
      lastMessage: "The project looks amazing so far",
      lastMessageTime: "1w",
      unreadCount: 3,
    },
    {
      id: "16",
      userName: "Ryan Davis",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      status: "offline",
      lastMessage: "Sure thing, I'll send it over",
      lastMessageTime: "2w",
    },
  ]);

  const handleShowOptions = (chatId: string) => {
    setHoveredChatId(chatId);
  };

  const handleHideOptions = () => {
    setHoveredChatId(null);
  };

  const handleChatClick = (e: React.MouseEvent, chatId: string) => {
    console.log(`Navigate to chat ${chatId}`);
  };

  return (
    <>
      <StyledDirectMess>
        <StyledTopHeader>
          <Heading title="Direct Messages" heading="h3" />
          <SearchBar placeholder="Search or start a new conversation" />
        </StyledTopHeader>
        <StyledChatsList>
          {chats.map((chat) => (
            <StyledChatItem key={chat.id}>
              <StyledChatItemContainer
                onClick={(e) => handleChatClick(e, chat.id)}
                onMouseEnter={() => handleShowOptions(chat.id)}
                onMouseLeave={handleHideOptions}
              >
                <StyledChatInfo>
                  <Avatar
                    image={chat.avatar}
                    status={chat.status}
                    userName={chat.userName}
                    showStatusCircle
                    size={35}
                  />
                  <StyledMessageInfo>
                    <StyledUserName hasUnread={!!chat.unreadCount}>
                      {chat.userName}
                      {chat.unreadCount && (
                        <StyledUnreadBadge>
                          {chat.unreadCount}
                        </StyledUnreadBadge>
                      )}
                    </StyledUserName>
                    {/* <StyledLastMessage>
                      {chat.lastMessage.substring(0, 40)}
                      {chat.lastMessage.length > 40 ? "..." : ""}
                    </StyledLastMessage> */}
                  </StyledMessageInfo>
                </StyledChatInfo>

                {hoveredChatId !== chat.id && (
                  <StyledLastMessageTime>
                    <span>{chat.lastMessageTime}</span>
                  </StyledLastMessageTime>
                )}
                {hoveredChatId === chat.id && (
                  <StyledDotsOptions
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleMenu(chat.id);
                    }}
                  >
                    <EllipsisHorizontalIcon />
                  </StyledDotsOptions>
                )}
              </StyledChatItemContainer>
              <div onClick={(e) => e.stopPropagation()}>
                <Menu
                  onClose={() => setOpenMenuChatId(null)}
                  isOpen={openMenuChatId === chat.id}
                  right="1"
                  items={menuItems}
                />
              </div>
            </StyledChatItem>
          ))}
        </StyledChatsList>
      </StyledDirectMess>
    </>
  );
};

export default DirectMessages;

const StyledDirectMess = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-bottom: 0.5rem;
`;

const StyledTopHeader = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  position: sticky;
  top: 0;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 20;
  @media (max-width: 1000px) {
    padding: 1.5rem 1rem;
  }
  @media (max-width: 700px) {
    padding: 2rem 1.5rem;
  }
`;

const StyledChatsList = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
   padding: 0;
  }
`;

const StyledChatItem = styled.div`
  width: 100%;
  position: relative;
`;

const StyledChatItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in;
  text-decoration: none;
  color: inherit;
  @media (max-width: 1000px) {
    padding: 1rem;
    border-radius: 0;
  }
  @media (max-width: 700px) {
    padding: 1rem 1.5rem;
    &:active {
        background-color: ${({ theme }) => theme.background.thirdly}; 
    }
  }
  @media (min-width: 700px) {
    &:hover {
      background-color: ${({ theme }) => theme.background.secondary};
    }
  }

`;

const StyledChatInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
`;

const StyledMessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
`;

const StyledUserName = styled.div<{ hasUnread?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: ${({ hasUnread }) => (hasUnread ? "500" : "400")};
  font-size: var(--text-base);
  color: ${({ hasUnread }) => (hasUnread ? ({ theme }) => theme.text.primary : ({ theme }) => theme.text.thirdly)};
   @media (max-width: 1000px) {
    font-size: var(--text-sm);
  }
`;

const StyledLastMessage = styled.div`
  width: 90%;
  font-size: var(--text-sm);
  color: ${({ theme }) => theme.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledUnreadBadge = styled.span`
  background-color: var(--blue);
  color: var(--light);
  font-size: var(--text-xs);
  font-weight: 500;
  padding: 0.125rem 0.375rem;
  border-radius: 10px;
  min-width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLastMessageTime = styled.div`
  flex-shrink: 0;
  span {
    font-size: var(--text-sm);
    color: ${({ theme }) => theme.text.placeholder};
  }
`;

const StyledDotsOptions = styled.div`
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  &:hover {
    background-color: ${({ theme }) => theme.background.thirdly};
  }
  svg {
    color: ${({ theme }) => theme.text.placeholder};
    width: 2rem;
    height: 2rem;
  }
`;
