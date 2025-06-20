import P2PHeader from "@app/chat-area/header/P2PHeader";
import styled from "styled-components";
import MessageInput from "@app/chat-area/message-input/MessageInput";

const ChatArea = () => {
  return (
    <>
      <StyledChatArea>
        <P2PHeader />
        <MessageInput />
      </StyledChatArea>
    </>
  );
};

export default ChatArea;

const StyledChatArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
