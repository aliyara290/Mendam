import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGroups } from "@/contexts/ChatGroupsContext";
import { useAuth } from "@/contexts/AuthContext";
import GroupHeader from "./header/GroupHeader";
import GroupMessages from "./messages/GroupMessages";
import GroupMessageInput from "./message-input/GroupMessageInput";
import GroupMembersSidebar from "./sidebar/GroupMembersSidebar";

interface GroupChatAreaProps {
  groupId: string;
}

const GroupChatArea: React.FC<GroupChatAreaProps> = ({ groupId }) => {
  const [showMembersSidebar, setShowMembersSidebar] = useState(false);
  const { 
    groups, 
    groupMembers, 
    groupConversations,
    loadGroupMembers,
    loadGroupMessages 
  } = useGroups();
  const { user } = useAuth();

  const currentGroup = groups.find(g => g._id === groupId);
  const members = groupMembers[groupId] || [];
  const conversation = groupConversations[groupId];

  // Load group data when groupId changes
  useEffect(() => {
    if (groupId) {
      loadGroupMembers(groupId);
      if (!conversation || conversation.messages.length === 0) {
        loadGroupMessages(groupId);
      }
    }
  }, [groupId]);

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