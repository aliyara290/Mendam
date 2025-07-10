import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalComponent from "@app/modal/Modal";
import {
  MagnifyingGlassIcon,
  UserPlusIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";
import Avatar from "@app/avatar/Avatar";
import { useFriends } from "@/contexts/FriendsContext";
import Button from "@app/ui/button/Button";

interface AddFriendModalProps {
  title: string;
  onClose: () => void;
  isOpen: boolean;
}

interface SearchResult {
  _id: string;
  username: string;
  fullName: string;
  avatar?: string;
  status: string;
}

const AddFriendModal: React.FC<AddFriendModalProps> = ({
  title,
  onClose,
  isOpen,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [requestSent, setRequestSent] = useState<Set<string>>(new Set());
  const [error, setError] = useState<string>("");

  const { searchUsers, sendFriendRequest, friends } = useFriends();

  const friendIds = new Set(friends.map(friend => friend.friendId._id));

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setSearching(true);
    setError("");

    try {
      const results = await searchUsers(searchQuery.trim());
      const filteredResults = results.filter(user => !friendIds.has(user._id));
      setSearchResults(filteredResults);
    } catch (error: any) {
      setError(error.message || "Failed to search users");
      setSearchResults([]);
    } finally {
      setSearching(false);
    }
  };

  const handleSendFriendRequest = async (userId: string) => {
    try {
      setError("");
      await sendFriendRequest(userId);
      setRequestSent(prev => new Set([...prev, userId]));
    } catch (error: any) {
      setError(error.message || "Failed to send friend request");
    }
  };

  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
      setSearchResults([]);
      setRequestSent(new Set());
      setError("");
    }
  }, [isOpen]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <ModalComponent title={title} onClose={onClose} isOpen={isOpen}>
      <StyledAddFriendContent>
        <StyledSearchBar>
          <StyledSearchBarContent>
            <StyledSearchInput>
              <input
                type="text"
                placeholder="Search for friend by username or name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={searching}
              />
            </StyledSearchInput>
            <StyledSearchIcon onClick={handleSearch} disabled={searching}>
              <MagnifyingGlassIcon />
            </StyledSearchIcon>
          </StyledSearchBarContent>
        </StyledSearchBar>

        {error && (
          <StyledError>
            {error}
          </StyledError>
        )}

        <StyledSearchResult>
          <StyledResultHeading>
            <h6>
              {searching 
                ? "Searching..." 
                : searchResults.length > 0 
                ? `Found ${searchResults.length} user${searchResults.length !== 1 ? 's' : ''}:`
                : searchQuery.trim() 
                ? "No users found"
                : "Enter a username or name to search"
              }
            </h6>
          </StyledResultHeading>

          {searchResults.length > 0 && (
            <StyledUsersList>
              {searchResults.map((user) => (
                <StyledUserItem key={user._id}>
                  <StyledChatItemContainer>
                    <Avatar
                      image={user.avatar}
                      status="offline" // We don't have real-time status in search results
                      userName={user.fullName}
                      showUserName
                      size={35}
                    />
                    <StyledUserInfo>
                      <StyledUsername>@{user.username}</StyledUsername>
                    </StyledUserInfo>
                    <StyledActions>
                      {requestSent.has(user._id) ? (
                        <StyledSentButton>
                          <CheckIcon />
                          <span>Request Sent</span>
                        </StyledSentButton>
                      ) : (
                        <StyledAddButton 
                          onClick={() => handleSendFriendRequest(user._id)}
                        >
                          <UserPlusIcon />
                          <span>Add Friend</span>
                        </StyledAddButton>
                      )}
                    </StyledActions>
                  </StyledChatItemContainer>
                </StyledUserItem>
              ))}
            </StyledUsersList>
          )}
        </StyledSearchResult>

        <StyledModalActions>
          <Button 
            variant="cancel" 
            title="Close" 
            onClick={onClose}
          />
        </StyledModalActions>
      </StyledAddFriendContent>
    </ModalComponent>
  );
};

export default AddFriendModal;

const StyledAddFriendContent = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledSearchBar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3456;
  background-color: ${({ theme }) => theme.background.thirdly};
`;

const StyledSearchBarContent = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledSearchInput = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.border.secondary};
  
  input {
    padding: 0 1.5rem;
    width: 100%;
    height: 100%;
    background: transparent;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.text.primary};
    font-size: var(--text-md);
    
    &::placeholder {
      color: ${({ theme }) => theme.text.placeholder};
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;

const StyledSearchIcon = styled.button<{ disabled?: boolean }>`
  color: var(--light);
  width: 7rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ disabled }) => disabled ? '#999' : 'var(--blue)'};
  border: 1px solid transparent;
  border-radius: 0.8rem;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: var(--dark-blue);
  }
  
  svg {
    width: 2.1rem;
  }
`;

const StyledError = styled.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  text-align: center;
`;

const StyledSearchResult = styled.div`
  width: 100%;
`;

const StyledResultHeading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.5rem;
  
  h6 {
    line-height: 1;
    font-weight: 500;
    color: ${({ theme }) => theme.text.secondary};
    font-size: var(--text-md);
  }
`;

const StyledUsersList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 40rem;
  overflow-y: auto;
`;

const StyledUserItem = styled.div`
  width: 100%;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.border.secondary};
  }
`;

const StyledChatItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  gap: 1rem;
`;

const StyledUserInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const StyledUsername = styled.div`
  font-size: var(--text-sm);
  color: ${({ theme }) => theme.text.placeholder};
  margin-top: 0.3rem;
`;

const StyledActions = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  background-color: var(--blue);
  color: white;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  font-size: var(--text-sm);
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: var(--dark-blue);
  }
  
  svg {
    width: 1.6rem;
  }
`;

const StyledSentButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  background-color: ${({ theme }) => theme.background.secondary};
  color: ${({ theme }) => theme.text.secondary};
  border: 1px solid ${({ theme }) => theme.border.secondary};
  border-radius: 0.6rem;
  font-size: var(--text-sm);
  
  svg {
    width: 1.6rem;
    color: var(--success-500);
  }
`;

const StyledModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.border.secondary};
`;