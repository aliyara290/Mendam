import React, { useState } from "react";
import styled from "styled-components";
import {
  XMarkIcon,
  MagnifyingGlassIcon,
  // CrownIcon,
  ShieldCheckIcon,
  EllipsisHorizontalIcon,
  UserMinusIcon,
  UserPlusIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import Avatar from "@app/avatar/Avatar";
import Menu, { type MenuItemProps } from "@app/menu/Menu";
import { useAuth } from "@/contexts/AuthContext";
import { useGroups } from "@/contexts/GroupsContext";
import type { ChatGroup, GroupMember } from "@/services/Api";

interface GroupMembersSidebarProps {
  group: ChatGroup;
  members: GroupMember[];
  userRole: 'admin' | 'moderator' | 'member';
  onClose: () => void;
}

const GroupMembersSidebar: React.FC<GroupMembersSidebarProps> = ({
  group,
  members,
  userRole,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openMenuMemberId, setOpenMenuMemberId] = useState<string | null>(null);
  const { user } = useAuth();
  const { removeMember, updateMemberRole } = useGroups();

  const canManageMembers = userRole === 'admin' || userRole === 'moderator';
  const isAdmin = userRole === 'admin';

  // Filter members based on search
  const filteredMembers = members.filter(member =>
    member.userId.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.userId.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group members by role
  const membersByRole = {
    admin: filteredMembers.filter(m => m.role === 'admin'),
    moderator: filteredMembers.filter(m => m.role === 'moderator'),
    member: filteredMembers.filter(m => m.role === 'member'),
  };

  const handleRemoveMember = async (memberId: string) => {
    try {
      await removeMember(group._id, memberId);
      setOpenMenuMemberId(null);
    } catch (error) {
      console.error('Failed to remove member:', error);
    }
  };

  const handleUpdateRole = async (memberId: string, newRole: 'admin' | 'moderator' | 'member') => {
    try {
      await updateMemberRole(group._id, memberId, newRole);
      setOpenMenuMemberId(null);
    } catch (error) {
      console.error('Failed to update member role:', error);
    }
  };

  const getMemberMenuItems = (member: GroupMember): MenuItemProps[] => {
    const items: MenuItemProps[] = [];
    
    // Can't manage yourself or if you don't have permission
    if (member.userId._id === user?.id || !canManageMembers) {
      return items;
    }

    // Admin actions
    if (isAdmin) {
      if (member.role !== 'admin') {
        items.push({
          label: "Make Admin",
          icon: <UserMinusIcon />,
          onClick: () => handleUpdateRole(member.userId._id, 'admin'),
        });
      }
      
      if (member.role !== 'moderator' && member.role !== 'admin') {
        items.push({
          label: "Make Moderator",
          icon: <ShieldCheckIcon />,
          onClick: () => handleUpdateRole(member.userId._id, 'moderator'),
        });
      }
      
      if (member.role === 'moderator' || member.role === 'admin') {
        items.push({
          label: "Remove Role",
          icon: <UserMinusIcon />,
          onClick: () => handleUpdateRole(member.userId._id, 'member'),
        });
      }
    }

    // Both admin and moderator can remove members (but admins can't be removed by moderators)
    if (canManageMembers && !(userRole === 'moderator' && member.role === 'admin')) {
      items.push({
        label: "Remove from Group",
        icon: <ExclamationTriangleIcon />,
        danger: true,
        onClick: () => handleRemoveMember(member.userId._id),
      });
    }

    return items;
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin':
        return <UserMinusIcon />;
      case 'moderator':
        return <ShieldCheckIcon />;
      default:
        return null;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return '#f59e0b';
      case 'moderator':
        return '#3b82f6';
      default:
        return 'inherit';
    }
  };

  const renderMemberSection = (title: string, members: GroupMember[], roleKey: string) => {
    if (members.length === 0) return null;

    return (
      <StyledMemberSection key={roleKey}>
        <StyledSectionTitle>
          {title} — {members.length}
        </StyledSectionTitle>
        <StyledMembersList>
          {members.map((member) => (
            <StyledMemberItem key={member.userId._id}>
              <StyledMemberInfo>
                <Avatar
                  image={member.userId.avatar}
                  userName={member.userId.fullName}
                  status={member.userId.isOnline ? "online" : "offline"}
                  showStatusCircle
                  size={36}
                />
                <StyledMemberDetails>
                  <StyledMemberName>
                    {member.userId.fullName}
                    {member.userId._id === user?.id && (
                      <StyledYouBadge>You</StyledYouBadge>
                    )}
                  </StyledMemberName>
                  <StyledMemberUsername>
                    @{member.userId.username}
                  </StyledMemberUsername>
                </StyledMemberDetails>
              </StyledMemberInfo>

              <StyledMemberActions>
                {member.role !== 'member' && (
                  <StyledRoleIcon color={getRoleColor(member.role)}>
                    {getRoleIcon(member.role)}
                  </StyledRoleIcon>
                )}
                
                {getMemberMenuItems(member).length > 0 && (
                  <StyledMenuButton
                    onClick={() => setOpenMenuMemberId(
                      openMenuMemberId === member.userId._id ? null : member.userId._id
                    )}
                  >
                    <EllipsisHorizontalIcon />
                  </StyledMenuButton>
                )}
              </StyledMemberActions>

              {openMenuMemberId === member.userId._id && (
                <Menu
                  onClose={() => setOpenMenuMemberId(null)}
                  isOpen={true}
                  right="0"
                  top="100"
                  items={getMemberMenuItems(member)}
                />
              )}
            </StyledMemberItem>
          ))}
        </StyledMembersList>
      </StyledMemberSection>
    );
  };

  return (
    <>
      <StyledSidebarOverlay onClick={onClose} />
      <StyledGroupMembersSidebar>
        <StyledSidebarHeader>
          <StyledHeaderTitle>
            <h3>Members</h3>
            <StyledMemberCount>{members.length}</StyledMemberCount>
          </StyledHeaderTitle>
          <StyledCloseButton onClick={onClose}>
            <XMarkIcon />
          </StyledCloseButton>
        </StyledSidebarHeader>

        <StyledSearchContainer>
          <StyledSearchBar>
            <MagnifyingGlassIcon />
            <input
              type="text"
              placeholder="Search members"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </StyledSearchBar>
        </StyledSearchContainer>

        <StyledMembersContainer>
          {renderMemberSection("Admins", membersByRole.admin, "admin")}
          {renderMemberSection("Moderators", membersByRole.moderator, "moderator")}
          {renderMemberSection("Members", membersByRole.member, "member")}
          
          {filteredMembers.length === 0 && (
            <StyledEmptyState>
              <StyledEmptyText>
                {searchQuery 
                  ? `No members found matching "${searchQuery}"`
                  : "No members found"
                }
              </StyledEmptyText>
            </StyledEmptyState>
          )}
        </StyledMembersContainer>
      </StyledGroupMembersSidebar>
    </>
  );
};

export default GroupMembersSidebar;

const StyledSidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  
  @media (min-width: 1201px) {
    display: none;
  }
`;

const StyledGroupMembersSidebar = styled.div`
  width: 32rem;
  height: 100%;
  background-color: ${({ theme }) => theme.background.primary};
  border-left: 1px solid ${({ theme }) => theme.border.secondary};
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1001;
  
  @media (max-width: 1200px) {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1001;
    box-shadow: var(--shadow-lg);
  }
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledSidebarHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.border.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  h3 {
    font-size: var(--text-xl);
    color: ${({ theme }) => theme.text.primary};
    font-weight: 600;
    margin: 0;
  }
`;

const StyledMemberCount = styled.span`
  background-color: ${({ theme }) => theme.background.thirdly};
  color: ${({ theme }) => theme.text.secondary};
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: var(--text-sm);
  font-weight: 500;
`;

const StyledCloseButton = styled.button`
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
    background-color: ${({ theme }) => theme.background.thirdly};
    color: ${({ theme }) => theme.text.primary};
  }
  
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const StyledSearchContainer = styled.div`
  padding: 0 2rem 2rem;
`;

const StyledSearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  svg {
    position: absolute;
    left: 1.2rem;
    width: 1.8rem;
    height: 1.8rem;
    color: ${({ theme }) => theme.text.placeholder};
    z-index: 1;
  }
  
  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.2rem 0 4.2rem;
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

const StyledMembersContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 2rem 2rem;
`;

const StyledMemberSection = styled.div`
  margin-bottom: 2rem;
`;

const StyledSectionTitle = styled.h4`
  font-size: var(--text-sm);
  color: ${({ theme }) => theme.text.secondary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 1rem 0;
  padding: 0 0.5rem;
`;

const StyledMembersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledMemberItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.8rem;
  transition: background-color 0.2s ease;
  position: relative;
  
  &:hover {
    background-color: ${({ theme }) => theme.background.secondary};
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
  gap: 0.2rem;
  min-width: 0;
`;

const StyledMemberName = styled.div`
  font-size: var(--text-md);
  color: ${({ theme }) => theme.text.primary};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledYouBadge = styled.span`
  background-color: var(--blue);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 0.8rem;
  font-size: var(--text-xs);
  font-weight: 500;
  flex-shrink: 0;
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
  gap: 0.5rem;
`;

const StyledRoleIcon = styled.div<{ color: string }>`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color};
  
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const StyledMenuButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  background: none;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text.placeholder};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.background.thirdly};
    color: ${({ theme }) => theme.text.primary};
  }
  
  svg {
    width: 1.8rem;
    height: 1.8rem;
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