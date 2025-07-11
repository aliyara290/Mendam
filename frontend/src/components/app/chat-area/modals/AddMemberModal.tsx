import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalComponent from "@app/modal/Modal";
import {
  MagnifyingGlassIcon,
  UserPlusIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";
import Avatar from "@app/avatar/Avatar";
import Button from "@app/ui/button/Button";
import { useGroups } from "@/contexts/GroupsContext";
import { useFriends } from "@/contexts/FriendsContext";
import type { ChatGroup } from "@/services/Api";

interface AddMemberModalProps {
  group: ChatGroup;
  isOpen: boolean;
  onClose: () => void;
}

interface PotentialMember {
  _id: string;
  username: string;
  fullName: string;
  avatar?: string;
  status: string;
}

const AddMemberModal: React.FC<AddMemberModalProps> = ({
  group,
  isOpen,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<PotentialMember[]>([]);
  const [friendsList, setFriendsList] = useState<PotentialMember[]>([]);
  const [addedMembers, setAddedMembers] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const { addMember, groupMembers } = useGroups();
  const { friends } = useFriends();

  // Get current group members IDs for filtering
  const currentMemberIds = new Set(
    (groupMembers[group._id] || []).map(member => member.userId._id)
  );

  // Load friends list on mount
  useEffect(() => {
    if (isOpen) {
      // Convert friends to potential members format and filter out current members
      const availableFriends = friends
        .map(friend => ({
          _id: friend.friendId._id,
          username: friend.friendId.username,
          fullName: friend.friendId.fullName,
          avatar: friend.friendId.avatar,
          status: friend.friendId.status,
        }))
        .filter(friend => !currentMemberIds.has(friend._id));
      
      setFriendsList(availableFriends);
      setSearchResults(availableFriends);
      setSearchQuery("");
      setAddedMembers(new Set());
      setError("");
    }
  }, [isOpen, friends, groupMembers, group._id]);

  // Filter results based on search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults(friendsList);
    } else {
      const filtered = friendsList.filter(friend =>
        friend.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        friend.username.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    }
  }, [searchQuery, friendsList]);

  const handleAddMember = async (userId: string) => {
    try {
      setError("");
      await addMember(group._id, userId);
      setAddedMembers(prev => new Set([...prev, userId]));
    } catch (error: any) {
      setError(error.message || "Failed to add member");
    }
  };

  const handleClose = () => {
    setSearchQuery("");
    setSearchResults([]);
    setAddedMembers(new Set());
    setError("");
    onClose();
  };

  return (
    <ModalComponent 
      title={`Add Members to ${group.name}`} 
      isOpen={isOpen} 
      onClose={handleClose}
    >
      <StyledAddMemberContent>
        <StyledSearchSection>
          <StyledSearchBar>
            <StyledSearchIcon>
              <MagnifyingGlassIcon />
            </StyledSearchIcon>
            <StyledSearchInput>
              <input
                type="text"
                placeholder="Search your friends to add"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </StyledSearchInput>
          </StyledSearchBar>
        </StyledSearchSection>

        {error && (
          <StyledError>
            {error}
          </StyledError>
        )}

        <StyledResultsSection>
          <StyledResultsHeader>
            <h4>
              {searchResults.length === 0 && searchQuery 
                ? "No friends found" 
                : searchResults.length === 0 && !searchQuery
                ? "No friends available to add"
                : `${searchResults.length} friend${searchResults.length !== 1 ? 's' : ''} available`
              }
            </h4>
          </StyledResultsHeader>

          {searchResults.length === 0 ? (
            <StyledEmptyState>
              {searchQuery ? (
                <StyledEmptyText>
                  No friends found matching "{searchQuery}". Try a different search term.
                </StyledEmptyText>
              ) : (
                <StyledEmptyText>
                  All your friends are already members of this group, or you don't have any friends to add yet.
                </StyledEmptyText>
              )}
            </StyledEmptyState>
          ) : (
            <StyledMembersList>
              {searchResults.map((friend) => (
                <StyledMemberItem key={friend._id}>
                  <StyledMemberInfo>
                    <Avatar
                      image={friend.avatar}
                      userName={friend.fullName}
                      status="offline" // We don't have real-time status here
                      size={40}
                    />
                    <StyledMemberDetails>
                      <StyledMemberName>{friend.fullName}</StyledMemberName>
                      <StyledMemberUsername>@{friend.username}</StyledMemberUsername>
                    </StyledMemberDetails>
                  </StyledMemberInfo>
                  
                  <StyledMemberActions>
                    {addedMembers.has(friend._id) ? (
                      <StyledAddedButton>
                        <CheckIcon />
                        <span>Added</span>
                      </StyledAddedButton>
                    ) : (
                      <StyledAddButton 
                        onClick={() => handleAddMember(friend._id)}
                        disabled={loading}
                      >
                        <UserPlusIcon />
                        <span>Add</span>
                      </StyledAddButton>
                    )}
                  </StyledMemberActions>
                </StyledMemberItem>
              ))}
            </StyledMembersList>
          )}
        </StyledResultsSection>

        <StyledModalActions>
          <Button 
            variant="primary" 
            title="Done" 
            onClick={handleClose}
          />
        </StyledModalActions>
      </StyledAddMemberContent>
    </ModalComponent>
  );
};

export default AddMemberModal;

const StyledAddMemberContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledSearchSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledSearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledSearchIcon = styled.div`
  position: absolute;
  left: 1.2rem;
  z-index: 1;
  color: ${({ theme }) => theme.text.placeholder};
  
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const StyledSearchInput = styled.div`
  width: 100%;
  
  input {
    width: 100%;
    height: 4.5rem;
    padding: 0 1.5rem 0 4.5rem;
    border: 1px solid ${({ theme }) => theme.border.secondary};
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.background.secondary};
    color: ${({ theme }) => theme.text.primary};
    font-size: var(--text-md);
    outline: none;
    transition: border-color 0.2s ease;
    
    &:focus {
      border-color: var(--blue);
    }
    
    &::placeholder {
      color: ${({ theme }) => theme.text.placeholder};
    }
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

const StyledResultsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledResultsHeader = styled.div`
  h4 {
    font-size: var(--text-md);
    color: ${({ theme }) => theme.text.secondary};
    font-weight: 600;
    margin: 0;
  }
`;

const StyledMembersList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 40rem;
  overflow-y: auto;
  gap: 0.5rem;
`;

const StyledMemberItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.background.secondary};
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.background.primary};
  }
`;

const StyledMemberInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
`;

const StyledMemberDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 0;
`;

const StyledMemberName = styled.div`
  font-size: var(--text-md);
  color: ${({ theme }) => theme.text.primary};
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledMemberUsername = styled.div`
  font-size: var(--text-sm);
  color: ${({ theme }) => theme.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledMemberActions = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.2rem;
  background-color: var(--blue);
  color: white;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  font-size: var(--text-sm);
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: var(--dark-blue);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const StyledAddedButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.2rem;
  background-color: ${({ theme }) => theme.background.thirdly};
  color: ${({ theme }) => theme.text.secondary};
  border: 1px solid ${({ theme }) => theme.border.secondary};
  border-radius: 0.6rem;
  font-size: var(--text-sm);
  font-weight: 500;
  
  svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--success-500);
  }
`;

const StyledEmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  text-align: center;
`;

const StyledEmptyText = styled.div`
  color: ${({ theme }) => theme.text.secondary};
  font-size: var(--text-md);
  line-height: 1.5;
`;

const StyledModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.border.secondary};
`;