import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGroups } from "@/contexts/GroupsContext"; // Fixed import path
import { useAuth } from "@/contexts/AuthContext";
import GroupHeader from "./header/GroupHeader";
import GroupMessages from "./messages/GroupMessages";
import GroupMessageInput from "./message-input/GroupMessageInput";
import GroupMembersSidebar from "./sidebar/GroupMembersSidebar";
import { useParams, useNavigate } from "react-router-dom";

interface GroupChatAreaProps {
  groupId?: string;
}

const GroupChatArea: React.FC<GroupChatAreaProps> = ({ groupId: propGroupId }) => {
  const { groupId: paramGroupId } = useParams<{ groupId: string }>();
  const navigate = useNavigate();
  const groupId = propGroupId || paramGroupId;
  
  const [showMembersSidebar, setShowMembersSidebar] = useState(false);
  const { 
    groups, 
    groupMembers, 
    groupConversations,
    loadGroupMembers,
    loadGroupMessages,
    setCurrentGroup 
  } = useGroups();
  const { user } = useAuth();

  const currentGroup = groups.find(g => g._id === groupId);
  const members = groupMembers[groupId || ''] || [];
  const conversation = groupConversations[groupId || ''];

  // Set current group when component mounts
  useEffect(() => {
    if (groupId) {
      setCurrentGroup(groupId);
    }
  }, [groupId, setCurrentGroup]);

  // Load group data when groupId changes
  useEffect(() => {
    if (groupId) {
      loadGroupMembers(groupId);
      if (!conversation || conversation.messages.length === 0) {
        loadGroupMessages(groupId);
      }
    }
  }, [groupId, loadGroupMembers, loadGroupMessages, conversation]);

  // Check if user is member of the group
  useEffect(() => {
    if (currentGroup && user && groupId) {
      const userMember = members.find(m => m.userId._id === user.id);
      if (!userMember && members.length > 0) {
        // User is not a member of this group, redirect to groups page
        navigate('/app/groups');
        return;
      }
    }
  }, [currentGroup, user, members, groupId, navigate]);

  if (!groupId) {
    return (
      <StyledGroupChatArea>
        <StyledErrorState>
          <StyledErrorText>No group selected</StyledErrorText>
        </StyledErrorState>
      </StyledGroupChatArea>
    );
  }

  if (!currentGroup) {
    return (
      <StyledGroupChatArea>
        <StyledErrorState>
          <StyledErrorText>Group not found</StyledErrorText>
        </StyledErrorState>
      </StyledGroupChatArea>
    );
  }

  const userMember = members.find(m => m.userId._id === user?.id);

  if (!userMember && members.length > 0) {
    return (
      <StyledGroupChatArea>
        <StyledErrorState>
          <StyledErrorText>You are not a member of this group</StyledErrorText>
        </StyledErrorState>
      </StyledGroupChatArea>
    );
  }

  return (
    <StyledGroupChatArea>
      <StyledMainChatArea showSidebar={showMembersSidebar}>
        <GroupHeader 
          group={currentGroup}
          memberCount={members.length}
          userRole={userMember?.role || 'member'}
          onToggleMembersSidebar={() => setShowMembersSidebar(!showMembersSidebar)}
        />
        <GroupMessages 
          groupId={groupId}
          conversation={conversation}
        />
        <GroupMessageInput groupId={groupId} />
      </StyledMainChatArea>
      
      {showMembersSidebar && (
        <GroupMembersSidebar
          group={currentGroup}
          members={members}
          userRole={userMember?.role || 'member'}
          onClose={() => setShowMembersSidebar(false)}
        />
      )}
    </StyledGroupChatArea>
  );
};

export default GroupChatArea;

const StyledGroupChatArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.background.secondary};
`;

const StyledMainChatArea = styled.div<{ showSidebar: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  
  ${({ showSidebar }) => showSidebar && `
    @media (max-width: 1200px) {
      display: none;
    }
  `}
`;

const StyledErrorState = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledErrorText = styled.div`
  font-size: var(--text-lg);
  color: ${({ theme }) => theme.text.secondary};
`;