import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useMessages } from "@/contexts/MessagesContext";
import { useAuth } from "@/contexts/AuthContext";
import { useFriends } from "@/contexts/FriendsContext";
import Avatar from "@app/avatar/Avatar";

interface ChatMessagesProps {
  recipientId: string;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ recipientId }) => {
  const { conversations, loadMessages, markAsRead } = useMessages();
  const { user } = useAuth();
  const { friends } = useFriends();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const conversation = conversations[recipientId];
  const recipient = friends.find(f => f.friendId._id === recipientId)?.friendId;

  // Load messages when recipient changes
  useEffect(() => {
    if (recipientId && (!conversation || conversation.messages.length === 0)) {
      loadMessages(recipientId);
    }
  }, [recipientId, conversation, loadMessages]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [conversation?.messages]);

  // Mark messages as read when conversation is viewed
  useEffect(() => {
    if (conversation?.messages && user) {
      const unreadMessages = conversation.messages.filter(msg => 
        msg.senderId._id !== user.id && 
        !msg.readBy.some(read => read.userId === user.id)
      );
      
      unreadMessages.forEach(msg => {
        markAsRead(msg.senderId._id, msg._id);
      });
    }
  }, [conversation?.messages, user, markAsRead]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const loadMoreMessages = async () => {
    if (!conversation?.hasMore || isLoadingMore) return;
    
    setIsLoadingMore(true);
    try {
      const currentLength = conversation.messages.length;
      const page = Math.floor(currentLength / 50) + 1;
      await loadMessages(recipientId, page);
    } finally {
      setIsLoadingMore(false);
    }
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
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

  if (!recipient) {
    return (
      <StyledChatMessages>
        <StyledEmptyState>
          <StyledEmptyText>User not found</StyledEmptyText>
        </StyledEmptyState>
      </StyledChatMessages>
    );
  }

  if (!conversation || conversation.loading) {
    return (
      <StyledChatMessages>
        <StyledLoadingState>
          <StyledLoadingText>Loading messages...</StyledLoadingText>
        </StyledLoadingState>
      </StyledChatMessages>
    );
  }

  if (conversation.messages.length === 0) {
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

  let lastMessageDate = "";

  return (
    <StyledChatMessages>
      {conversation.hasMore && (
        <StyledLoadMoreContainer>
          <StyledLoadMoreButton 
            onClick={loadMoreMessages}
            disabled={isLoadingMore}
          >
            {isLoadingMore ? "Loading..." : "Load older messages"}
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
                        size={32}
                      />
                    </StyledMessageAvatar>
                  )}
                  
                  <StyledMessageBubble isOwn={isOwn} hasAvatar={!isOwn && showAvatar}>
                    <StyledMessageText>{message.content}</StyledMessageText>
                    <StyledMessageTime isOwn={isOwn}>
                      {formatTime(message.createdAt)}
                      {isOwn && message.readBy.length > 1 && (
                        <StyledReadIndicator>✓✓</StyledReadIndicator>
                      )}
                    </StyledMessageTime>
                  </StyledMessageBubble>
                </StyledMessageContent>
              </StyledMessageItem>
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
  padding: 1rem;
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
  margin-bottom: 0.5rem;
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
  background-color: ${({ isOwn, theme }) => 
    isOwn ? 'var(--blue)' : theme.background.thirdly};
  color: ${({ isOwn, theme }) => 
    isOwn ? 'white' : theme.text.primary};
  padding: 0.8rem 1rem;
  border-radius: 1.2rem;
  border-bottom-left-radius: ${({ isOwn, hasAvatar }) => 
    !isOwn && hasAvatar ? '0.3rem' : '1.2rem'};
  border-bottom-right-radius: ${({ isOwn }) => 
    isOwn ? '0.3rem' : '1.2rem'};
  word-wrap: break-word;
  position: relative;
`;

const StyledMessageText = styled.div`
  font-size: var(--text-md);
  line-height: 1.4;
  margin-bottom: 0.3rem;
`;

const StyledMessageTime = styled.div<{ isOwn: boolean }>`
  font-size: var(--text-xs);
  opacity: 0.7;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: ${({ isOwn }) => isOwn ? 'flex-end' : 'flex-start'};
`;

const StyledReadIndicator = styled.span`
  color: #4ade80;
  font-size: var(--text-xs);
`;

const StyledDateSeparator = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const StyledDateText = styled.div`
  background-color: ${({ theme }) => theme.background.thirdly};
  color: ${({ theme }) => theme.text.secondary};
  padding: 0.3rem 1rem;
  border-radius: 1rem;
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