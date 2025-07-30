import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useAuth } from "@/contexts/AuthContext";
import { useGroups } from "@/contexts/GroupsContext";
import Avatar from "@app/avatar/Avatar";

interface GroupMessagesProps {
  groupId: string;
  conversation?: {
    groupId: string;
    messages: any[];
    hasMore: boolean;
    loading: boolean;
  };
}

const GroupMessages: React.FC<GroupMessagesProps> = ({
  groupId,
  conversation,
}) => {
  const { user } = useAuth();
  const { loadGroupMessages } = useGroups();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [conversation?.messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const loadMoreMessages = async () => {
    if (!conversation?.hasMore || conversation?.loading || isLoadingMore)
      return;

    setIsLoadingMore(true);
    try {
      const currentLength = conversation.messages.length;
      const page = Math.floor(currentLength / 50) + 1;
      await loadGroupMessages(groupId, page);
    } catch (error) {
      console.error("Failed to load more messages:", error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (date: Date) => {
    const today = new Date();
    const messageDate = new Date(date);

    if (messageDate.toDateString() === today.toDateString()) {
      return "Today";
    }

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (messageDate.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    }

    return messageDate.toLocaleDateString();
  };

  if (!conversation) {
    return (
      <StyledGroupMessages>
        <StyledLoadingState>
          <StyledLoadingText>Loading messages...</StyledLoadingText>
        </StyledLoadingState>
      </StyledGroupMessages>
    );
  }

  if (conversation.loading && conversation.messages.length === 0) {
    return (
      <StyledGroupMessages>
        <StyledLoadingState>
          <StyledLoadingText>Loading messages...</StyledLoadingText>
        </StyledLoadingState>
      </StyledGroupMessages>
    );
  }

  if (conversation.messages.length === 0) {
    return (
      <StyledGroupMessages>
        <StyledEmptyState>
          <StyledEmptyIcon>💬</StyledEmptyIcon>
          <StyledEmptyTitle>Welcome to the group!</StyledEmptyTitle>
          <StyledEmptyText>
            Be the first to send a message in this group.
          </StyledEmptyText>
        </StyledEmptyState>
      </StyledGroupMessages>
    );
  }

  let lastMessageDate = "";

  return (
    <StyledGroupMessages>
      {conversation.hasMore && (
        <StyledLoadMoreContainer>
          <StyledLoadMoreButton
            onClick={loadMoreMessages}
            disabled={isLoadingMore || conversation.loading}
          >
            {isLoadingMore || conversation.loading
              ? "Loading..."
              : "Load older messages"}
          </StyledLoadMoreButton>
        </StyledLoadMoreContainer>
      )}

      <StyledMessagesList>
        {conversation.messages.map((message, index) => {
          const isOwn = message.senderId._id === user?.id;
          const messageDate = formatDate(message.createdAt);
          const showDateSeparator = messageDate !== lastMessageDate;
          lastMessageDate = messageDate;

          const prevMessage =
            index > 0 ? conversation.messages[index - 1] : null;
          const nextMessage =
            index < conversation.messages.length - 1
              ? conversation.messages[index + 1]
              : null;

          const showAvatar =
            !prevMessage || prevMessage.senderId._id !== message.senderId._id;
          const isLastInGroup =
            !nextMessage || nextMessage.senderId._id !== message.senderId._id;

          return (
            <React.Fragment key={message._id}>
              {showDateSeparator && (
                <StyledDateSeparator>
                  <StyledDateText>{messageDate}</StyledDateText>
                </StyledDateSeparator>
              )}

              <StyledMessageItem isOwn={isOwn}>
                <StyledMessageContent isOwn={isOwn}>
                  {!isOwn && showAvatar && (
                    <StyledMessageAvatar>
                      <Avatar
                        image={message.senderId.avatar}
                        userName={message.senderId.fullName}
                        size={36}
                      />
                    </StyledMessageAvatar>
                  )}

                  <StyledMessageGroup
                    isNotFirstMessage={!isOwn && !showAvatar}
                    isOwn={isOwn}
                  >
                    <StyledMessageBubble
                      isOwn={isOwn}
                      hasAvatar={!isOwn && showAvatar}
                      isLastInGroup={isLastInGroup}
                    >
                      {!isOwn && showAvatar && (
                        <StyledSenderName>
                          @{message.senderId.fullName}
                        </StyledSenderName>
                      )}
                      <StyledMessageContentWrapper>
                        <StyledMessageText>{message.content}</StyledMessageText>
                        <StyledMessageTime isOwn={isOwn}>
                          {formatTime(message.createdAt)}
                          {/* {isOwn && message.readBy.length > 1 && (
                          <StyledReadIndicator>✓✓</StyledReadIndicator>
                        )} */}
                        </StyledMessageTime>
                      </StyledMessageContentWrapper>
                    </StyledMessageBubble>
                  </StyledMessageGroup>
                </StyledMessageContent>
              </StyledMessageItem>
            </React.Fragment>
          );
        })}
      </StyledMessagesList>

      <div ref={messagesEndRef} />
    </StyledGroupMessages>
  );
};

export default GroupMessages;

const StyledGroupMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background.secondary};
`;

const StyledMessagesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const StyledMessageItem = styled.div<{ isOwn: boolean }>`
  display: flex;
  justify-content: ${({ isOwn }) => (isOwn ? "flex-end" : "flex-start")};
  margin-bottom: 0.6rem;
`;

const StyledMessageContent = styled.div<{ isOwn: boolean }>`
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;
  flex-direction: ${({ isOwn }) => (isOwn ? "row-reverse" : "row")};

  /* @media (max-width: 600px) {
    max-width: 70%;
  } */
  width: 100%;
`;

const StyledMessageAvatar = styled.div`
  flex-shrink: 0;
  align-self: flex-start;
`;

const StyledMessageGroup = styled.div<{
  isOwn: boolean;
  isNotFirstMessage: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isOwn }) => (isOwn ? "flex-end" : "flex-start")};
  gap: 0.9rem;
  /* min-width: 0; */
  padding-left: ${({ isNotFirstMessage }) =>
    isNotFirstMessage ? "4.4rem" : "0"};
  width: 100%;
`;

const StyledSenderName = styled.div`
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--blue);
  margin-bottom: 0.2rem;
  margin-left: 0.2rem;
`;

const StyledMessageBubble = styled.div<{
  isOwn: boolean;
  hasAvatar: boolean;
  isLastInGroup: boolean;
}>`
  ::-moz-selection {
    color: ${({ isOwn }) => (isOwn ? "var(--blue)" : "var(--light)")};
    background: ${({ isOwn }) => (isOwn ? "var(--light)" : "var(--blue)")};
  }

  ::selection {
    color: ${({ isOwn }) => (isOwn ? "var(--blue)" : "var(--light)")};
    background: ${({ isOwn }) => (isOwn ? "var(--light)" : "var(--blue)")};
  }

  background-color: ${({ isOwn, theme }) =>
    isOwn ? "var(--blue)" : theme.background.thirdly};
  color: ${({ isOwn, theme }) => (isOwn ? "white" : theme.text.primary)};
  padding: 0.6rem 0.9rem;
  border-radius: 1.2rem;
  word-wrap: break-word;
  position: relative;
  max-width: 50rem;

  @media (max-width: 500px) {
    max-width: 30rem;
  }
  /* min-width: 0; */

  ${({ isOwn, hasAvatar, isLastInGroup }) => {
    if (isOwn) {
      return isLastInGroup ? "border-bottom-right-radius: 0.3rem;" : "";
    } else {
      return hasAvatar && isLastInGroup
        ? "border-bottom-left-radius: 0.3rem;"
        : "";
    }
  }}
`;

const StyledMessageContentWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  /* align-items: end; */
  justify-content: end;
  flex-wrap: wrap;
`;
const StyledMessageText = styled.div`
  /* width: max-content; */
  font-size: var(--text-base);
  line-height: 1.4;
  /* word-break: break-word; */
  margin-bottom: 0.3rem;
`;

const StyledMessageTime = styled.div<{ isOwn: boolean }>`
  font-size: var(--text-xs);
  opacity: 0.7;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: ${({ isOwn }) => (isOwn ? "flex-start" : "flex-end")};
`;

const StyledReadIndicator = styled.span`
  color: #4ade80;
  font-size: var(--text-xs);
`;

const StyledDateSeparator = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 1rem;
`;

const StyledDateText = styled.div`
  background-color: ${({ theme }) => theme.background.thirdly};
  color: ${({ theme }) => theme.text.secondary};
  padding: 0.7rem 2rem;
  border-radius: 0.5rem;
  font-size: var(--text-sm);
  font-weight: 500;
`;

const StyledLoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const StyledLoadMoreButton = styled.button`
  background-color: ${({ theme }) => theme.background.thirdly};
  color: ${({ theme }) => theme.text.secondary};
  border: 1px solid ${({ theme }) => theme.border.secondary};
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  cursor: pointer;
  font-size: var(--text-sm);
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.background.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StyledEmptyState = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

const StyledEmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const StyledEmptyTitle = styled.h3`
  font-size: var(--text-lg);
  color: ${({ theme }) => theme.text.primary};
  font-weight: 500;
  text-align: center;
`;

const StyledEmptyText = styled.p`
  font-size: var(--text-md);
  color: ${({ theme }) => theme.text.secondary};
  text-align: center;
`;

const StyledLoadingState = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLoadingText = styled.div`
  font-size: var(--text-md);
  color: ${({ theme }) => theme.text.secondary};
`;
