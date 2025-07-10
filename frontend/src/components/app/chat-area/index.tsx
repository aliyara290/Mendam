import React from "react";
import styled from "styled-components";
import P2PHeader from "@app/chat-area/header/P2PHeader";
import MessageInput from "@app/chat-area/message-input/MessageInput";
import ChatMessages from "@app/chat-area/messages/ChatMessages";
import { useMessages } from "@/contexts/MessagesContext";
import { useFriends } from "@/contexts/FriendsContext";
import Logo from "../logo/Logo";

const ChatArea = () => {
  const { currentConversation } = useMessages();
  const { friends } = useFriends();

  const recipient = currentConversation
    ? friends.find(f => f.friendId._id === currentConversation)?.friendId
    : null;

  if (!currentConversation || !recipient) {
    return (
      <StyledChatArea>
        <StyledWelcomeScreen>
          <StyledWelcomeContent>
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 66.59 63.66"
              width={70}
              height={70}
            >
              
              <StyledLogoPath
                d="M50,70.82c-.13-.51-.28-1.13-.47-1.74A29,29,0,0,0,45,60.79a70.83,70.83,0,0,0-5.71-6.41,59.7,59.7,0,0,1-9.34-12.16c-.37-.67-.69-1.37-1.06-2.1-.06.12-.12.21-.17.31a39.53,39.53,0,0,0-3.13,10A25.62,25.62,0,0,0,27.66,66a32.27,32.27,0,0,0,7.45,9.79A52.47,52.47,0,0,0,43,81.64l.21.14c-1.85.11-8.38-2.61-11.73-4.86a33.27,33.27,0,0,1-9-9,32.14,32.14,0,0,1-5-11.7,33.2,33.2,0,0,1,21-38c-.55.66-1.1,1.29-1.61,1.95a14.4,14.4,0,0,0-2.76,5.58A11.27,11.27,0,0,0,34.93,33a39,39,0,0,0,6.27,9.26C42.88,44.15,44.63,46,46.26,48a20.22,20.22,0,0,1,3.67,6.42s0,.05.07.09c.29-.67.54-1.34.85-2a30.15,30.15,0,0,1,5-7A79.35,79.35,0,0,0,62,38.22a28.19,28.19,0,0,0,3.49-6.28,10.94,10.94,0,0,0-1-9.84c-.82-1.38-1.86-2.63-2.7-3.81C72.49,21.9,83.66,33.71,83.28,50.08a33.12,33.12,0,0,1-26.5,31.75l1.84-1.2a42.78,42.78,0,0,0,11-10.08,25.92,25.92,0,0,0,4.94-11.64A28.44,28.44,0,0,0,73.38,46c-.62-2-1.4-3.93-2.11-5.89l-.2-.06a1,1,0,0,1,0,.18A40.08,40.08,0,0,1,65.43,49c-2.17,2.71-4.57,5.21-7,7.71a35.26,35.26,0,0,0-7,10.05C50.83,68.11,50.42,69.52,50,70.82Z"
                transform="translate(-16.71 -18.17)"
              />
            </svg>
            <StyledWelcomeTitle>Welcome to Mendam</StyledWelcomeTitle>
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
  color: ${({ theme }) => theme.text.placeholder};
  font-weight: 600;
  margin: 0;
`;

const StyledWelcomeText = styled.p`
  font-size: var(--text-md);
  color: ${({ theme }) => theme.text.placeholder};
  line-height: 1.6;
  margin: 0;
`;
const StyledLogoPath = styled.path`
  fill: ${({ theme }) => theme.text.placeholder};
`;