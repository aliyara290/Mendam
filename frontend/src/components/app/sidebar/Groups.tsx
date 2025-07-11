import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import SearchBar from "@app/search-bar/SearchBar";
import Heading from "@app/heading/Heading";
import Avatar from "@app/avatar/Avatar";
import SquareBtn from "@app/ui/button/SquareBtn";
import { 
  EllipsisHorizontalIcon,
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";
import { HashtagIcon } from "@heroicons/react/24/solid";
import CreateGroupModal from "./modals/CreateGroupModal";
import Menu, { type MenuItemProps } from "@app/menu/Menu";
import { useGroups } from "@/contexts/GroupsContext";

interface GroupsProps {}

const Groups: React.FC<GroupsProps> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openMenuGroupId, setOpenMenuGroupId] = useState<string | null>(null);
  
  const { groupId } = useParams<{ groupId: string }>();
  const navigate = useNavigate();
  
  const { 
    groups, 
    loading, 
    error, 
    loadGroups, 
    leaveGroup,
    setCurrentGroup,
    currentGroup 
  } = useGroups();

  // Load groups on component mount
  useEffect(() => {
    loadGroups();
  }, []);

  // Set current group based on URL parameter
  useEffect(() => {
    if (groupId) {
      setCurrentGroup(groupId);
    }
  }, [groupId, setCurrentGroup]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleGroupClick = (clickedGroupId: string) => {
    setCurrentGroup(clickedGroupId);
    // Navigate to group chat using the same layout
    navigate(`/app/groups/${clickedGroupId}`);
  };

  const handleLeaveGroup = async (leaveGroupId: string) => {
    try {
      await leaveGroup(leaveGroupId);
      setOpenMenuGroupId(null);
      if (currentGroup === leaveGroupId) {
        setCurrentGroup(null);
        navigate('/app/groups');
      }
    } catch (error) {
      console.error('Failed to leave group:', error);
    }
  };

  const getMenuItems = (menuGroupId: string): MenuItemProps[] => [
    {
      label: "Group Settings",
      icon: <Cog6ToothIcon />,
      onClick: () => {
        setOpenMenuGroupId(null);
        // TODO: Implement group settings
        alert("Group settings not implemented yet");
      },
    },
    {
      label: "Leave Group",
      icon: <ArrowLeftOnRectangleIcon />,
      danger: true,
      onClick: () => handleLeaveGroup(menuGroupId),
    },
  ];

  // Filter groups based on search query
  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading && groups.length === 0) {
    return (
      <StyledGroups>
        <StyledTopHeader>
          <Heading title="Groups" heading="h3" />
          <StyledSBarRow>
            <SearchBar placeholder="Search for groups" />
            <SquareBtn onClick={() => setIsModalOpen(true)} />
          </StyledSBarRow>
        </StyledTopHeader>
        <StyledLoadingContainer>
          <StyledLoadingText>Loading groups...</StyledLoadingText>
        </StyledLoadingContainer>
        <CreateGroupModal
          title="Create new group"
          onClose={handleCloseModal}
          isOpen={isModalOpen}
        />
      </StyledGroups>
    );
  }

  if (error) {
    return (
      <StyledGroups>
        <StyledTopHeader>
          <Heading title="Groups" heading="h3" />
          <StyledSBarRow>
            <SearchBar placeholder="Search for groups" />
            <SquareBtn onClick={() => setIsModalOpen(true)} />
          </StyledSBarRow>
        </StyledTopHeader>
        <StyledErrorContainer>
          <StyledErrorText>Failed to load groups: {error}</StyledErrorText>
          <StyledRetryButton onClick={loadGroups}>Retry</StyledRetryButton>
        </StyledErrorContainer>
        <CreateGroupModal
          title="Create new group"
          onClose={handleCloseModal}
          isOpen={isModalOpen}
        />
      </StyledGroups>
    );
  }

  return (
    <StyledGroups>
      <StyledTopHeader>
        <Heading title="Groups" heading="h3" />
        <StyledSBarRow>
          <SearchBar 
            placeholder="Search for groups"
            value={searchQuery}
            onInputChange={(value) => setSearchQuery(value)}
          />
          <SquareBtn onClick={() => setIsModalOpen(true)} />
        </StyledSBarRow>
      </StyledTopHeader>

      {filteredGroups.length === 0 ? (
        <StyledEmptyState>
          <StyledEmptyIcon>
            <UserGroupIcon />
          </StyledEmptyIcon>
          <StyledEmptyText>
            {searchQuery 
              ? `No groups found matching "${searchQuery}"`
              : "No groups yet. Create a group to start collaborating!"
            }
          </StyledEmptyText>
          {!searchQuery && (
            <StyledCreateButton onClick={() => setIsModalOpen(true)}>
              Create Your First Group
            </StyledCreateButton>
          )}
        </StyledEmptyState>
      ) : (
        <StyledGroupsList>
          {filteredGroups.map((group) => (
            <StyledGroupItem key={group._id}>
              <StyledGroupItemContainer 
                onClick={() => handleGroupClick(group._id)}
                isActive={currentGroup === group._id || groupId === group._id}
              >
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
                    {group.memberCount || 0} member{(group.memberCount || 0) !== 1 ? 's' : ''}
                    {group.isPrivate && <StyledPrivateBadge>Private</StyledPrivateBadge>}
                  </StyledGroupDetails>
                </StyledGroupInfo>
                
                <StyledGroupActions onClick={(e) => e.stopPropagation()}>
                  <StyledOptionsItem 
                    onClick={() => setOpenMenuGroupId(
                      openMenuGroupId === group._id ? null : group._id
                    )}
                  >
                    <EllipsisHorizontalIcon />
                  </StyledOptionsItem>
                </StyledGroupActions>
              </StyledGroupItemContainer>
              
              {/* Menu for each group */}
              <div onClick={(e) => e.stopPropagation()}>
                <Menu
                  onClose={() => setOpenMenuGroupId(null)}
                  isOpen={openMenuGroupId === group._id}
                  right="1"
                  items={getMenuItems(group._id)}
                />
              </div>
            </StyledGroupItem>
          ))}
        </StyledGroupsList>
      )}

      <CreateGroupModal
        title="Create new group"
        onClose={handleCloseModal}
        isOpen={isModalOpen}
      />
    </StyledGroups>
  );
};

export default Groups;

const StyledGroups = styled.div`
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

const StyledGroupsList = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 0;
  }
`;

const StyledGroupItem = styled.div`
  width: 100%;
  position: relative;
`;

interface StyledGroupItemContainerProps {
  isActive?: boolean;
}

const StyledGroupItemContainer = styled.div<StyledGroupItemContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: ${({ isActive, theme }) => 
    isActive ? theme.background.secondary : 'transparent'};
  
  @media (max-width: 1000px) {
    padding: 1.2rem 1rem;
    border-radius: 0;
  }
  @media (max-width: 700px) {
    padding: 1.2rem 1.5rem;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-left: 1rem;
  min-width: 0;
`;

const StyledGroupName = styled.h4`
  font-size: var(--text-md);
  color: ${({ theme }) => theme.text.primary};
  font-weight: 500;
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

const StyledGroupActions = styled.div`
  display: flex;
  align-items: center;
`;

const StyledOptionsItem = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text.placeholder};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.background.thirdly};
    color: ${({ theme }) => theme.text.secondary};
  }
  
  svg {
    width: 2rem;
    color: inherit;
  }
`;

const StyledEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1.5rem;
`;

const StyledEmptyIcon = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 3rem;
    height: 3rem;
    color: ${({ theme }) => theme.text.placeholder};
  }
`;

const StyledEmptyText = styled.div`
  color: ${({ theme }) => theme.text.secondary};
  font-size: var(--text-md);
  text-align: center;
  line-height: 1.5;
`;

const StyledCreateButton = styled.button`
  padding: 1rem 2rem;
  background-color: var(--blue);
  color: white;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  font-size: var(--text-md);
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: var(--dark-blue);
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