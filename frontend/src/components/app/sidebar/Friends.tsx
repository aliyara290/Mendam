import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBar from "@app/search-bar/SearchBar";
import Heading from "@app/heading/Heading";
import Avatar from "@app/avatar/Avatar";
import SquareBtn from "@app/ui/button/SquareBtn";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import AddFriendModal from "./modals/AddFriendModal";
import { useFriends } from "@/contexts/FriendsContext";
import { useMessages } from "@/contexts/MessagesContext";
import { useNavigate } from "react-router-dom";
import Menu, { type MenuItemProps } from "@app/menu/Menu";
import { NoSymbolIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/solid";

interface FriendsProps {}

const Friends: React.FC<FriendsProps> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openMenuFriendId, setOpenMenuFriendId] = useState<string | null>(null);
  
  const { friends, loading, error, loadFriends, removeFriend, blockUser } = useFriends();
  const { setCurrentConversation } = useMessages();
  const navigate = useNavigate();

  // Load friends on component mount
  useEffect(() => {
    loadFriends();
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleStartChat = (friendId: string) => {
    setCurrentConversation(friendId);
    // Navigate to direct messages if not already there
    navigate('/app/@me');
  };

  const handleRemoveFriend = async (friendId: string) => {
    try {
      await removeFriend(friendId);
      setOpenMenuFriendId(null);
    } catch (error) {
      console.error('Failed to remove friend:', error);
    }
  };

  const handleBlockUser = async (friendId: string) => {
    try {
      await blockUser(friendId);
      setOpenMenuFriendId(null);
    } catch (error) {
      console.error('Failed to block user:', error);
    }
  };

  const getMenuItems = (friendId: string): MenuItemProps[] => [
    {
      label: "Start Chat",
      icon: <ChatBubbleOvalLeftEllipsisIcon />,
      onClick: () => {
        handleStartChat(friendId);
        setOpenMenuFriendId(null);
      },
    },
    {
      label: "Remove Friend",
      icon: <XMarkIcon />,
      onClick: () => handleRemoveFriend(friendId),
    },
    {
      label: "Block User",
      icon: <NoSymbolIcon />,
      danger: true,
      onClick: () => handleBlockUser(friendId),
    },
  ];

  // Filter friends based on search query
  const filteredFriends = friends.filter(friend =>
    friend.friendId.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    friend.friendId.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading && friends.length === 0) {
    return (
      <StyledFriends>
        <StyledTopHeader>
          <Heading title="Friends" heading="h3" />
          <StyledSBarRow>
            <SearchBar placeholder="Search for people" />
            <SquareBtn onClick={() => setIsModalOpen(true)} />
          </StyledSBarRow>
        </StyledTopHeader>
        <StyledLoadingContainer>
          <StyledLoadingText>Loading friends...</StyledLoadingText>
        </StyledLoadingContainer>
        <AddFriendModal
          title="Add new friend"
          onClose={handleCloseModal}
          isOpen={isModalOpen}
        />
      </StyledFriends>
    );
  }

  if (error) {
    return (
      <StyledFriends>
        <StyledTopHeader>
          <Heading title="Friends" heading="h3" />
          <StyledSBarRow>
            <SearchBar placeholder="Search for people" />
            <SquareBtn onClick={() => setIsModalOpen(true)} />
          </StyledSBarRow>
        </StyledTopHeader>
        <StyledErrorContainer>
          <StyledErrorText>Failed to load friends: {error}</StyledErrorText>
          <StyledRetryButton onClick={loadFriends}>Retry</StyledRetryButton>
        </StyledErrorContainer>
        <AddFriendModal
          title="Add new friend"
          onClose={handleCloseModal}
          isOpen={isModalOpen}
        />
      </StyledFriends>
    );
  }

  return (
    <StyledFriends>
      <StyledTopHeader>
        <Heading title="Friends" heading="h3" />
        <StyledSBarRow>
          <SearchBar 
            placeholder="Search for people"
            value={searchQuery}
            onInputChange={(value) => setSearchQuery(value)}
          />
          <SquareBtn onClick={() => setIsModalOpen(true)} />
        </StyledSBarRow>
      </StyledTopHeader>

      {filteredFriends.length === 0 ? (
        <StyledEmptyState>
          <StyledEmptyText>
            {searchQuery 
              ? `No friends found matching "${searchQuery}"`
              : "No friends yet. Add some friends to start chatting!"
            }
          </StyledEmptyText>
        </StyledEmptyState>
      ) : (
        <StyledChatsList>
          {filteredFriends.map((friend) => (
            <StyledChatItem key={friend._id}>
              <StyledChatItemContainer>
                <Avatar
                  image={friend.friendId.avatar}
                  status={friend.friendId.isOnline ? "online" : "offline"}
                  userName={friend.friendId.fullName}
                  showStatusCircle
                  showUserName
                  size={35}
                />
                <StyledOptions>
                  <StyledOptionsItem onClick={() => handleStartChat(friend.friendId._id)}>
                    <ChatBubbleOvalLeftEllipsisIcon />
                  </StyledOptionsItem>
                  <StyledOptionsItem 
                    onClick={() => setOpenMenuFriendId(
                      openMenuFriendId === friend.friendId._id ? null : friend.friendId._id
                    )}
                  >
                    <EllipsisHorizontalIcon />
                  </StyledOptionsItem>
                </StyledOptions>
              </StyledChatItemContainer>
              
              {/* Menu for each friend */}
              <div onClick={(e) => e.stopPropagation()}>
                <Menu
                  onClose={() => setOpenMenuFriendId(null)}
                  isOpen={openMenuFriendId === friend.friendId._id}
                  right="1"
                  items={getMenuItems(friend.friendId._id)}
                />
              </div>
            </StyledChatItem>
          ))}
        </StyledChatsList>
      )}

      <AddFriendModal
        title="Add new friend"
        onClose={handleCloseModal}
        isOpen={isModalOpen}
      />
    </StyledFriends>
  );
};

export default Friends;

const StyledFriends = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-bottom: 1rem;
  position: relative;
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

const StyledSBarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 1000px) {
    gap: 1rem;
  }
  @media (max-width: 700px) {
    gap: 1.5rem;
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
  transition: background-color 0.1s ease-in-out;
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

const StyledOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledOptionsItem = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text.placeholder};
  &:hover {
    background-color: ${({ theme }) => theme.background.thirdly};
    color: ${({ theme }) => theme.text.secondary};
  }
  svg {
    width: 2rem;
    color: inherit;
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

const StyledErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
`;

const StyledErrorText = styled.div`
  color: ${({ theme }) => theme.text.secondary};
  font-size: var(--text-md);
  text-align: center;
`;

const StyledRetryButton = styled.button`
  padding: 0.8rem 1.6rem;
  background-color: var(--blue);
  color: white;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  font-size: var(--text-sm);
  
  &:hover {
    background-color: var(--dark-blue);
  }
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