import React from "react";
import styled from "styled-components";
import SearchBar from "@app/search-bar/SearchBar";
import Heading from "@app/heading/Heading";
import Avatar from "@app/avatar/Avatar";

interface DirectMessagesProps {}

const DirectMessages: React.FC<DirectMessagesProps> = ({}) => {
  return (
    <>
      <StyledDirectMess>
        <StyledTopHeader>
          <Heading title="Chat" heading="h3" />
          <SearchBar placeholder="Search or start a new conversation" />
        </StyledTopHeader>
        <StyledChatsList>
          {[...Array(12)].map((_, index) => (
            <StyledChatItem key={index}>
              <StyledChatItemContainer href="/app/@me/34567U8I">
                <Avatar
                  // image="https://res.cloudinary.com/decjm9mmr/image/upload/q_10/linkedin_qeixe5.jpg"
                  gender="male"
                  status="offline"
                  userName="Ali Yara"
                />
                <StyledLastMessageTime>
                  <span>23:35</span>
                </StyledLastMessageTime>
              </StyledChatItemContainer>
            </StyledChatItem>
          ))}
        </StyledChatsList>
      </StyledDirectMess>
    </>
  );
};

export default DirectMessages;

const StyledDirectMess = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 1.5rem; */
  overflow: auto;
  padding-bottom: 1rem;
  

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
`;

const StyledChatsList = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
`;

const StyledChatItem = styled.div`
  width: 100%;
`;
const StyledChatItemContainer = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color .1s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.background.secondary};
  }
`;

const StyledLastMessageTime = styled.div`
  span {
    font-size: var(--text-sm);
    color: ${({ theme }) => theme.text.placeholder};
  }
`;
