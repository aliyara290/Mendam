import React from "react";
import styled from "styled-components";
import P2PHeader from "@app/chat-area/header/P2PHeader";
import MessageInput from "@app/chat-area/message-input/MessageInput";
import ChatMessages from "@app/chat-area/messages/ChatMessages";
import { useMessages } from "@/contexts/MessagesContext";
import { useFriends } from "@/contexts/FriendsContext";

const ChatArea = () => {
  const { currentConversation } = useMessages();
  const { friends } = useFriends();

  // Find the current recipient
  const recipient = currentConversation 
    ? friends.find(f => f.friendId._id === currentConversation)?.friendId
    : null;

  if (!currentConversation || !recipient) {
    return (
      <StyledChatArea>
        <StyledWelcomeScreen>
          <StyledWelcomeContent>
            <StyledWelcomeIcon>💬</StyledWelcomeIcon>
            <StyledWelcomeTitle>Welcome to Mendom</StyledWelcomeTitle>
            <StyledWelcomeText>
              Select a conversation from the sidebar to start chatting with your friends.
            </StyledWelcomeText>
          </StyledWelcomeContent>
        </StyledWelcomeScreen>
      </StyledChatArea>
    );
  }

  return (
    <StyledChatArea>
      <P2PHeader recipient={recipient} />
      <ChatMessages recipientId={currentConversation} />
      <MessageInput recipientId={currentConversation} />
    </StyledChatArea>
  );
};

export default ChatArea;

const StyledChatArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background.secondary};
`;

const StyledWelcomeScreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background.secondary};
`;

const StyledWelcomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 40rem;
  text-align: center;
  padding: 2rem;
`;

const StyledWelcomeIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const StyledWelcomeTitle = styled.h2`
  font-size: var(--text-xxl);
  color: ${({ theme }) => theme.text.primary};
  font-weight: 600;
  margin: 0;
`;

const StyledWelcomeText = styled.p`
  font-size: var(--text-md);
  color: ${({ theme }) => theme.text.secondary};
  line-height: 1.6;
  margin: 0;
`;