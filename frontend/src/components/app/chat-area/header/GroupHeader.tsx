import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@app/avatar/Avatar";
import {
  Bars3BottomRightIcon,
  UsersIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  UserPlusIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { HashtagIcon } from "@heroicons/react/24/solid";
import Menu, { type MenuItemProps } from "@app/menu/Menu";
import GroupInfoModal from "../modals/GroupInfoModal";
import AddMemberModal from "../modals/AddMemberModal";
import { useGroups } from "@/contexts/GroupsContext";
import type { ChatGroup } from "@/services/Api";

interface GroupHeaderProps {
  group: ChatGroup;
  memberCount: number;
  userRole: 'admin' | 'moderator' | 'member';
  onToggleMembersSidebar: () => void;
}

const GroupHeader: React.FC<GroupHeaderProps> = ({ 
  group, 
  memberCount, 
  userRole,
  onToggleMembersSidebar 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showGroupInfo, setShowGroupInfo] = useState(false);
  const [showAddMember, setShowAddMember] = useState(false);
  
  const { leaveGroup } = useGroups();

  const handleLeaveGroup = async () => {
    try {
      await leaveGroup(group._id);
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Failed to leave group:', error);
    }
  };

  const canManageMembers = userRole === 'admin' || userRole === 'moderator';

  const menuItems: MenuItemProps[] = [
    {
      label: "Group Info",
      icon: <InformationCircleIcon />,
      onClick: () => {
        setShowGroupInfo(true);
        setIsMenuOpen(false);
      },
    },
    ...(canManageMembers ? [{
      label: "Add Members",
      icon: <UserPlusIcon />,
      onClick: () => {
        setShowAddMember(true);
        setIsMenuOpen(false);
      },
    }] : []),
    {
      label: "Group Settings",
      icon: <Cog6ToothIcon />,
      onClick: () => {
        setIsMenuOpen(false);
        // TODO: Implement group settings
        alert("Group settings not implemented yet");
      },
    },
    {
      label: "Leave Group",
      icon: <ArrowLeftOnRectangleIcon />,
      danger: true,
      onClick: handleLeaveGroup,
    },
  ];

  return (
    <>
      <StyledGroupHeader>
        <StyledLeftPart onClick={() => setShowGroupInfo(true)}>
          <StyledGroupIcon>
            {group.avatar ? (
              <Avatar
                image={group.avatar}
                userName={group.name}
                size={40}
                isGroup
              />
            ) : (
              <StyledDefaultGroupIcon>
                <HashtagIcon />
              </StyledDefaultGroupIcon>
            )}
          </StyledGroupIcon>
          
          <StyledGroupInfo>
            <StyledGroupName>{group.name}</StyledGroupName>
            <StyledGroupDetails>
              {memberCount} member{memberCount !== 1 ? 's' : ''}
              {group.isPrivate && <StyledPrivateBadge>Private</StyledPrivateBadge>}
            </StyledGroupDetails>
          </StyledGroupInfo>
        </StyledLeftPart>
        
        <StyledRightPart>
          <StyledActionButton onClick={onToggleMembersSidebar} title="Show members">
            <UsersIcon />
          </StyledActionButton>
          
          <StyledActionButton onClick={() => setIsMenuOpen(true)} title="Group menu">
            <Bars3BottomRightIcon />
          </StyledActionButton>
        </StyledRightPart>
        
        <Menu
          onClose={() => setIsMenuOpen(false)}
          isOpen={isMenuOpen}
          right="0"
          top="100"
          items={menuItems}
        />
      </StyledGroupHeader>
      
      {showGroupInfo && (
        <GroupInfoModal
          group={group}
          memberCount={memberCount}
          userRole={userRole}
          isOpen={showGroupInfo}
          onClose={() => setShowGroupInfo(false)}
        />
      )}
      
      {showAddMember && canManageMembers && (
        <AddMemberModal
          group={group}
          isOpen={showAddMember}
          onClose={() => setShowAddMember(false)}
        />
      )}
    </>
  );
};

export default GroupHeader;

const StyledGroupHeader = styled.header`
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
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.8rem;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.background.primary};
  }
`;

const StyledGroupIcon = styled.div`
  flex-shrink: 0;
`;

const StyledDefaultGroupIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.text.primary};
  }
`;

const StyledGroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 0;
`;

const StyledGroupName = styled.h3`
  font-size: var(--text-lg);
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  margin: 0;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledGroupDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: var(--text-sm);
  color: ${({ theme }) => theme.text.secondary};
`;

const StyledPrivateBadge = styled.span`
  background-color: var(--blue);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  font-size: var(--text-xs);
  font-weight: 500;
`;

const StyledRightPart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledActionButton = styled.button`
  width: 4rem;
  height: 4rem;
  border: none;
  background: none;
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
    width: 2.4rem;
    height: 2.4rem;
  }
`;