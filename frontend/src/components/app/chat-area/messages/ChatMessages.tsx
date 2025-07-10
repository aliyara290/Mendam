import React, { useEffect, useRef, useState, useCallback } from "react";
import styled from "styled-components";
import { useMessages } from "@/contexts/MessagesContext";
import { useAuth } from "@/contexts/AuthContext";
import { useFriends } from "@/contexts/FriendsContext";
import Avatar from "@app/avatar/Avatar";
import Loader from "../../ui/Loader";

interface ChatMessagesProps {
  recipientId: string;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ recipientId }) => {
  const { conversations, loadMessages, markAsRead } = useMessages();
  const { user } = useAuth();
  const { friends } = useFriends();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasLoadedInitial, setHasLoadedInitial] = useState<Set<string>>(new Set());

  const conversation = conversations[recipientId];
  const recipient = friends.find(f => f.friendId._id === recipientId)?.friendId;

  useEffect(() => {
    if (recipientId && !hasLoadedInitial.has(recipientId)) {
      console.log(`🔄 Loading initial messages for ${recipientId}`);
      loadMessages(recipientId, 1);
      setHasLoadedInitial(prev => new Set([...prev, recipientId]));
    }
  }, [recipientId, loadMessages, hasLoadedInitial]);

  useEffect(() => {
    if (conversation?.messages?.length > 0) {
      scrollToBottom();
    }
  }, [conversation?.messages?.length]);

  useEffect(() => {
    if (!conversation?.messages || !user || !recipientId) return;

    const unreadMessages = conversation.messages.filter(msg =>
      msg.senderId._id !== user.id &&
      !msg.readBy.some(read => read.userId === user.id)
    );

    if (unreadMessages.length > 0) {
      const latestUnread = unreadMessages[unreadMessages.length - 1];
      markAsRead(latestUnread.senderId._id, latestUnread._id);
    }
    
  }, [conversation?.messages, user, recipientId, markAsRead]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const loadMoreMessages = useCallback(async () => {
    if (!conversation?.hasMore || isLoadingMore) return;

    setIsLoadingMore(true);
    try {
      const currentLength = conversation.messages.length;
      const page = Math.floor(currentLength / 50) + 1;
      await loadMessages(recipientId, page);
    } finally {
      setIsLoadingMore(false);
    }
  }, [conversation?.hasMore, conversation?.messages?.length, isLoadingMore, loadMessages, recipientId]);

  const formatTime = useCallback((date: Date) => {
    return new Date(date).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  }, []);

  const formatDate = useCallback((date: Date) => {
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
  }, []);

  if (!recipient) {
    return (
      <StyledChatMessages>
        <StyledEmptyState>
          <StyledEmptyText>User not found</StyledEmptyText>
        </StyledEmptyState>
      </StyledChatMessages>
    );
  }

  if (!conversation && hasLoadedInitial.has(recipientId)) {
    return (
      <StyledChatMessages>
        <StyledEmptyState>
          <Avatar
            image={recipient.avatar}
            userName={recipient.fullName}
            size={60}
          />
          <StyledEmptyTitle>Start a conversation with {recipient.fullName}</StyledEmptyTitle>
          <StyledEmptyText>Send a message to get the conversation started!</StyledEmptyText>
        </StyledEmptyState>
      </StyledChatMessages>
    );
  }

  if (conversation?.loading && conversation.messages.length === 0) {
    return (
      <StyledChatMessages>
        <StyledLoadingState>
          <StyledLoadingText>
            <Loader />
          </StyledLoadingText>
        </StyledLoadingState>
      </StyledChatMessages>
    );
  }

  if (!conversation?.messages || conversation.messages.length === 0) {
    return (
      <StyledChatMessages>
        <StyledEmptyState>
          <Avatar
            image={recipient.avatar}
            userName={recipient.fullName}
            size={70}
          />
          <StyledEmptyTitle>Start a conversation with {recipient.fullName}</StyledEmptyTitle>
          <StyledEmptyText>Send a message to get the conversation started!</StyledEmptyText>
        </StyledEmptyState>
      </StyledChatMessages>
    );
  }


  let lastMessageDate = "";

  return (
    <StyledChatMessages>
      {conversation.hasMore && (
        <StyledLoadMoreContainer>
          <StyledLoadMoreButton
            onClick={loadMoreMessages}
            disabled={isLoadingMore}
          >
            {isLoadingMore ?? (<Loader />)}
          </StyledLoadMoreButton>
        </StyledLoadMoreContainer>
      )}

      <StyledMessagesList>
        {conversation.messages.map((message, index) => {
          const isOwn = message.senderId._id === user?.id;
          const messageDate = formatDate(message.createdAt);
          const showDateSeparator = messageDate !== lastMessageDate;
          lastMessageDate = messageDate;
          const prevMessage = index > 0 ? conversation.messages[index - 1] : null;
          const showAvatar = !prevMessage || prevMessage.senderId._id !== message.senderId._id;
          const isSameSenderAsPrevious =
            prevMessage && prevMessage.senderId._id === message.senderId._id;

          return (
            <React.Fragment key={message._id}>
              {showDateSeparator && (
                <StyledDateSeparator>
                  <StyledDateText>{messageDate}</StyledDateText>
                </StyledDateSeparator>
              )}

              {!isSameSenderAsPrevious && (
                <StyledMessageItem isOwn={isOwn}>
                  <StyledMessageContent isOwn={isOwn}>
                    {!isOwn && showAvatar && (
                      <StyledMessageAvatar>
                        <Avatar user={message.senderId} />
                      </StyledMessageAvatar>
                    )}
                    <StyledMessageGroup>
                      <StyledMessageBubble isOwn={isOwn} hasAvatar={showAvatar}>
                        <StyledMessageText>{message.content}</StyledMessageText>
                        <StyledMessageTime isOwn={isOwn}>
                          {formatTime(message.createdAt)}
                          {isOwn && message.readBy.length > 1 && (
                            <StyledReadIndicator>✓✓</StyledReadIndicator>
                          )}
                        </StyledMessageTime>
                      </StyledMessageBubble>
                    </StyledMessageGroup>
                  </StyledMessageContent>
                </StyledMessageItem>
              )}

              {isSameSenderAsPrevious && (
                <StyledMessageInline isOwn={isOwn}>
                  <StyledMessageBubble isOwn={isOwn} hasAvatar={false}>
                    <StyledMessageText>{message.content}</StyledMessageText>
                    <StyledMessageTime isOwn={isOwn}>
                      {formatTime(message.createdAt)}
                      {isOwn && message.readBy.length > 1 && (
                        <StyledReadIndicator>✓✓</StyledReadIndicator>
                      )}
                    </StyledMessageTime>
                  </StyledMessageBubble>
                </StyledMessageInline>
              )}
            </React.Fragment>
          );
        })}

      </StyledMessagesList>

      <div ref={messagesEndRef} />
    </StyledChatMessages>
  );
};

export default ChatMessages;


const StyledChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background.secondary};
`;

const StyledMessagesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledMessageItem = styled.div<{ isOwn: boolean }>`
  display: flex;
  justify-content: ${({ isOwn }) => isOwn ? 'flex-end' : 'flex-start'};
  /* margin-bottom: 0.5rem; */
`;

const StyledMessageContent = styled.div<{ isOwn: boolean }>`

  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  max-width: 70%;
  flex-direction: ${({ isOwn }) => isOwn ? 'row-reverse' : 'row'};
`;

const StyledMessageAvatar = styled.div`
  flex-shrink: 0;
`;

const StyledMessageBubble = styled.div<{ isOwn: boolean; hasAvatar: boolean }>`
max-width: 50rem;

display: flex;
flex-direction: column;
align-items: end;
/* gap: 1rem; */
  background-color: ${({ isOwn, theme }) =>
    isOwn ? theme.background.primary : theme.background.thirdly};
  color: ${({ isOwn, theme }) =>
    isOwn ? theme.text.primary : theme.text.primary};
  padding: 0.8rem 1rem;
  border-radius: 0.8rem;
  /* border-bottom-left-radius: ${({ isOwn, hasAvatar }) =>
    !isOwn && hasAvatar ? '0.3rem' : '1.2rem'};
  border-bottom-right-radius: ${({ isOwn }) =>
    isOwn ? '0.3rem' : '1.2rem'}; */
  word-wrap: break-word;
  position: relative;
`;

const StyledMessageText = styled.div`
  font-size: var(--text-md);
  line-height: 1.4;
`;

const StyledMessageTime = styled.div<{ isOwn: boolean }>`
  font-size: var(--text-xs);
  opacity: 0.7;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: ${({ isOwn }) => isOwn ? 'flex-end' : 'flex-start'};
  /* margin-left: 2rem; */

`;

const StyledReadIndicator = styled.span`
  color: ${({ theme }) => theme.text.primary};
  font-size: var(--text-xs);
`;

const StyledDateSeparator = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const StyledDateText = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.text.secondary};
  padding: 0.6rem 1.2rem;
  border-radius: 3px;
  font-size: var(--text-sm);
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

const StyledMessageGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const StyledMessageInline = styled.div<{ isOwn: boolean }>`
  display: flex;
  justify-content: ${({ isOwn }) => (isOwn ? 'flex-end' : 'flex-start')};
  margin-top: 0.2rem;

  & > div {
    margin-left: ${({ isOwn }) => (isOwn ? '0' : '4.5rem')};
  }
`;
