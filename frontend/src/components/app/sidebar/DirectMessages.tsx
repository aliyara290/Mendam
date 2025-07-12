import React, { useState, useEffect } from "react";
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
import { useFriends } from "@/contexts/FriendsContext";
import { useMessages } from "@/contexts/MessagesContext";
import { useAuth } from "@/contexts/AuthContext";

interface DirectMessagesProps {}

const DirectMessages: React.FC<DirectMessagesProps> = ({}) => {
  const [hoveredChatId, setHoveredChatId] = useState<string | null>(null);
  const [openMenuChatId, setOpenMenuChatId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { friends, loading: friendsLoading } = useFriends();
  const { 
    conversations, 
    currentConversation, 
    setCurrentConversation, 
    loadMessages 
  } = useMessages();
  const { user } = useAuth();

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
        alert("Delete functionality");
      },
    },
  ];

  // Create chat data from friends and conversations
  const chatData = friends.map(friend => {
    const friendId = friend.friendId._id;
    const conversation = conversations[friendId];
    const lastMessage = conversation?.messages[conversation.messages.length - 1];
    
    // Calculate unread count (messages not read by current user)
    const unreadCount = conversation?.messages.filter(msg => 
      msg.senderId._id !== user?.id && 
      !msg.readBy.some(read => read.userId === user?.id)
    ).length || 0;

    return {
      id: friendId,
      userName: friend.friendId.fullName,
      avatar: friend.friendId.avatar,
      status: friend.friendId.isOnline ? "online" : "offline" as const,
      lastMessage: lastMessage?.content || "No messages yet",
      lastMessageTime: lastMessage ? formatTime(new Date(lastMessage.createdAt)) : "",
      unreadCount: unreadCount > 0 ? unreadCount : undefined,
    };
  });

  // Filter chats based on search query
  const filteredChats = chatData.filter(chat =>
    chat.userName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleShowOptions = (chatId: string) => {
    setHoveredChatId(chatId);
  };

  const handleHideOptions = () => {
    setHoveredChatId(null);
  };

  const handleChatClick = async (chatId: string) => {
    
    try {
      // Set the current conversation immediately
      setCurrentConversation(chatId);
      
      // Load messages for this conversation if not already loaded
      const conversation = conversations[chatId];
      if (!conversation || conversation.messages.length === 0) {
        await loadMessages(chatId, 1);
      }
    } catch (error) {
      console.error('❌ Failed to load conversation:', error);
    }
  };

  function formatTime(date: Date): string {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return "now";
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d`;
    
    return `${Math.floor(diffInDays / 7)}w`;
  }

  if (friendsLoading && friends.length === 0) {
    return (
      <StyledDirectMess>
        <StyledTopHeader>
          <Heading title="Direct Messages" heading="h3" />
          <SearchBar placeholder="Search or start a new conversation" />
        </StyledTopHeader>
        <StyledLoadingContainer>
          <StyledLoadingText>Loading conversations...</StyledLoadingText>
        </StyledLoadingContainer>
      </StyledDirectMess>
    );
  }

  return (
    <>
      <StyledDirectMess>
        <StyledTopHeader>
          <Heading title="Direct Messages" heading="h3" />
          <SearchBar 
            placeholder="Search or start a new conversation"
            value={searchQuery}
            onInputChange={setSearchQuery}
          />
        </StyledTopHeader>

        {filteredChats.length === 0 ? (
          <StyledEmptyState>
            <StyledEmptyText>
              {searchQuery 
                ? `No conversations found matching "${searchQuery}"`
                : "No conversations yet. Add some friends to start chatting!"
              }
            </StyledEmptyText>
          </StyledEmptyState>
        ) : (
          <StyledChatsList>
            {filteredChats.map((chat) => (
              <StyledChatItem key={chat.id}>
                <StyledChatItemContainer
                  onClick={() => handleChatClick(chat.id)}
                  onMouseEnter={() => handleShowOptions(chat.id)}
                  onMouseLeave={handleHideOptions}
                  isActive={currentConversation === chat.id}
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
                      <StyledLastMessage>
                        {chat.lastMessage.substring(0, 40)}
                        {chat.lastMessage.length > 40 ? "..." : ""}
                      </StyledLastMessage>
                    </StyledMessageInfo>
                  </StyledChatInfo>

                  {hoveredChatId !== chat.id && chat.lastMessageTime && (
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
        )}
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
  gap: 3px;
  @media (max-width: 1000px) {
    padding: 0;
  }
`;

const StyledChatItem = styled.div`
  width: 100%;
  position: relative;
`;

interface StyledChatItemContainerProps {
  isActive?: boolean;
}

const StyledChatItemContainer = styled.div<StyledChatItemContainerProps>`
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
  background-color: ${({ isActive, theme }) => 
    isActive ? theme.background.secondary : 'transparent'};
  
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
      background-color: ${({ theme, isActive }) => 
        isActive ? theme.background.secondary : theme.background.thirdly};
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
  color: ${({ hasUnread, theme }) => (hasUnread ? theme.text.primary : theme.text.thirdly)};
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

const StyledLoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`;

const StyledLoadingText = styled.div`
  color: ${({ theme }) => theme.text.secondary};
  font-size: var(--text-md);
`;

const StyledEmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`;

const StyledEmptyText = styled.div`
  color: ${({ theme }) => theme.text.secondary};
  font-size: var(--text-md);
  text-align: center;
`;