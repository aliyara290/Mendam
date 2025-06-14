import React from "react";
import styled from "styled-components";
import SearchBar from "@app/search-bar/SearchBar";
import Heading from "@app/heading/Heading";
import Avatar from "@app/avatar/Avatar";
import SquareBtn from "../ui/button/SquareBtn";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

interface FriendsProps {}

const Friends: React.FC<FriendsProps> = ({}) => {
  return (
    <StyledFrineds>
      <StyledTopHeader>
        <Heading title="Friends" heading="h3" />
        <SearchBar placeholder="Search for people" />
      </StyledTopHeader>
      <StyledChatsList>
        {[...Array(12)].map((_, index) => (
          <StyledChatItem key={index}>
            <StyledChatItemContainer href="/app/@me/34567U8I">
              <Avatar
                image="https://res.cloudinary.com/decjm9mmr/image/upload/q_10/linkedin_qeixe5.jpg"
                status="offline"
                userName="Ali Yara"
                showStatusCircle
                showUserName
              />
              <StyledOptions>
                <StyledOptionsItem>
                  <ChatBubbleOvalLeftEllipsisIcon />
                </StyledOptionsItem>
                <StyledOptionsItem>
                  <EllipsisHorizontalIcon />
                </StyledOptionsItem>
              </StyledOptions>
            </StyledChatItemContainer>
          </StyledChatItem>
        ))}
      </StyledChatsList>
      <SquareBtn />
    </StyledFrineds>
  );
};

export default Friends;

const StyledFrineds = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 1.5rem; */
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
  transition: background-color 0.1s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.background.secondary};
  }
`;
const StyledOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const StyledOptionsItem = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text.placeholder};
  &:hover {
    background-color: ${({ theme }) => theme.background.thirdly};
    color: ${({ theme }) => theme.text.secondary};
  }
  svg {
    width: 2rem;
    color: inherit;
  }
`;
