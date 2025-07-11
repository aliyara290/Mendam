import React, { useState } from "react";
import styled from "styled-components";
import ModalComponent from "@app/modal/Modal";
import {
  PencilIcon,
  CalendarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { HashtagIcon } from "@heroicons/react/24/solid";
import Avatar from "@app/avatar/Avatar";
import Button from "@app/ui/button/Button";
import type { ChatGroup } from "@/services/Api";

interface GroupInfoModalProps {
  group: ChatGroup;
  memberCount: number;
  userRole: 'admin' | 'moderator' | 'member';
  isOpen: boolean;
  onClose: () => void;
}

const GroupInfoModal: React.FC<GroupInfoModalProps> = ({
  group,
  memberCount,
  userRole,
  isOpen,
  onClose,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(group.name);
  const [editedDescription, setEditedDescription] = useState(group.description || "");

  const canEdit = userRole === 'admin' || userRole === 'moderator';

  const handleSaveChanges = async () => {
    try {
      // TODO: Implement group update API call
      console.log('Saving changes:', { name: editedName, description: editedDescription });
      setIsEditing(false);
      // You would call updateGroup API here
    } catch (error) {
      console.error('Failed to update group:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditedName(group.name);
    setEditedDescription(group.description || "");
    setIsEditing(false);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <ModalComponent
      title={isEditing ? "Edit Group Info" : "Group Info"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <StyledGroupInfoContent>
        <StyledGroupHeader>
          <StyledGroupIconContainer>
            {group.avatar ? (
              <Avatar
                image={group.avatar}
                userName={group.name}
                size={80}
                isGroup
              />
            ) : (
              <StyledDefaultGroupIcon>
                <HashtagIcon />
              </StyledDefaultGroupIcon>
            )}
          </StyledGroupIconContainer>
          
          {isEditing ? (
            <StyledEditingSection>
              <StyledInputGroup>
                <StyledLabel>Group Name</StyledLabel>
                <StyledInput
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  placeholder="Enter group name"
                />
              </StyledInputGroup>
              
              <StyledInputGroup>
                <StyledLabel>Description</StyledLabel>
                <StyledTextarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  placeholder="Enter group description (optional)"
                  rows={3}
                />
              </StyledInputGroup>
              
              <StyledButtonGroup>
                <Button
                  variant="cancel"
                  title="Cancel"
                  onClick={handleCancelEdit}
                />
                <Button
                  variant="primary"
                  title="Save Changes"
                  onClick={handleSaveChanges}
                />
              </StyledButtonGroup>
            </StyledEditingSection>
          ) : (
            <StyledGroupDetails>
              <StyledGroupTitleSection>
                <StyledGroupTitle>{group.name}</StyledGroupTitle>
                {canEdit && (
                  <StyledEditButton onClick={() => setIsEditing(true)}>
                    <PencilIcon />
                  </StyledEditButton>
                )}
              </StyledGroupTitleSection>
              
              {group.description && (
                <StyledGroupDescription>{group.description}</StyledGroupDescription>
              )}
            </StyledGroupDetails>
          )}
        </StyledGroupHeader>

        {!isEditing && (
          <StyledGroupStats>
            <StyledStatItem>
              <StyledStatIcon>
                <UserGroupIcon />
              </StyledStatIcon>
              <StyledStatContent>
                <StyledStatLabel>Members</StyledStatLabel>
                <StyledStatValue>{memberCount}</StyledStatValue>
              </StyledStatContent>
            </StyledStatItem>

            <StyledStatItem>
              <StyledStatIcon>
                <CalendarIcon />
              </StyledStatIcon>
              <StyledStatContent>
                <StyledStatLabel>Created</StyledStatLabel>
                <StyledStatValue>{formatDate(group.createdAt)}</StyledStatValue>
              </StyledStatContent>
            </StyledStatItem>

            <StyledStatItem>
              <StyledStatIcon>
                {group.isPrivate ? <LockClosedIcon /> : <GlobeAltIcon />}
              </StyledStatIcon>
              <StyledStatContent>
                <StyledStatLabel>Type</StyledStatLabel>
                <StyledStatValue>
                  {group.isPrivate ? 'Private Group' : 'Public Group'}
                </StyledStatValue>
              </StyledStatContent>
            </StyledStatItem>

            <StyledStatItem>
              <StyledStatIcon>
                {/* <CrownIcon /> */}
              </StyledStatIcon>
              <StyledStatContent>
                <StyledStatLabel>Created by</StyledStatLabel>
                <StyledStatValue>{group.createdBy.fullName}</StyledStatValue>
              </StyledStatContent>
            </StyledStatItem>
          </StyledGroupStats>
        )}

        {!isEditing && (
          <StyledAdditionalInfo>
            <StyledInfoSection>
              <h4>Group ID</h4>
              <StyledGroupId>{group._id}</StyledGroupId>
            </StyledInfoSection>
          </StyledAdditionalInfo>
        )}
      </StyledGroupInfoContent>
    </ModalComponent>
  );
};

export default GroupInfoModal;

const StyledGroupInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledGroupHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`;

const StyledGroupIconContainer = styled.div`
  position: relative;
`;

const StyledDefaultGroupIcon = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 4rem;
    height: 4rem;
    color: ${({ theme }) => theme.text.primary};
  }
`;

const StyledGroupDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
`;

const StyledGroupTitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledGroupTitle = styled.h2`
  font-size: var(--text-xxl);
  color: ${({ theme }) => theme.text.primary};
  font-weight: 600;
  margin: 0;
`;

const StyledEditButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text.placeholder};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.text.primary};
  }
  
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const StyledGroupDescription = styled.p`
  font-size: var(--text-md);
  color: ${({ theme }) => theme.text.secondary};
  line-height: 1.5;
  margin: 0;
`;

const StyledEditingSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledLabel = styled.label`
  font-size: var(--text-sm);
  font-weight: 600;
  color: ${({ theme }) => theme.text.secondary};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
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
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.border.secondary};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.background.secondary};
  color: ${({ theme }) => theme.text.primary};
  font-size: var(--text-md);
  outline: none;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease;
  
  &:focus {
    border-color: var(--blue);
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }
`;

const StyledButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

const StyledGroupStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const StyledStatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 0.8rem;
`;

const StyledStatIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text.primary};
  
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const StyledStatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const StyledStatLabel = styled.div`
  font-size: var(--text-sm);
  color: ${({ theme }) => theme.text.placeholder};
  font-weight: 500;
`;

const StyledStatValue = styled.div`
  font-size: var(--text-md);
  color: ${({ theme }) => theme.text.primary};
  font-weight: 600;
`;

const StyledAdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledInfoSection = styled.div`
  h4 {
    font-size: var(--text-sm);
    color: ${({ theme }) => theme.text.placeholder};
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const StyledGroupId = styled.div`
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: var(--text-sm);
  color: ${({ theme }) => theme.text.secondary};
  background-color: ${({ theme }) => theme.background.secondary};
  padding: 0.8rem 1rem;
  border-radius: 0.6rem;
  word-break: break-all;
`;