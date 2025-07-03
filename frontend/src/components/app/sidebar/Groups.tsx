import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "@app/search-bar/SearchBar";
import Heading from "@app/heading/Heading";
import Avatar from "@app/avatar/Avatar";
import SquareBtn from "@app/ui/button/SquareBtn";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import CreateGroupModal from "./modals/CreateGroupModal";

interface FriendsProps {}

const Groups: React.FC<FriendsProps> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCloseModale = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledGroup>
      <StyledTopHeader>
        <Heading title="Groups" heading="h3" />
        <StyledSBarRow>
          <SearchBar placeholder="Search for group" />
          <SquareBtn onClick={() => setIsModalOpen(true)} />
        </StyledSBarRow>
      </StyledTopHeader>
      <StyledChatsList>
        {[...Array(6)].map((_, index) => (
          <StyledChatItem key={index}>
            <StyledChatItemContainer href="/app/@me/34567U8I">
              <Avatar
                // image="https://res.cloudinary.com/decjm9mmr/image/upload/q_10/linkedin_qeixe5.jpg"
                userName="DXC Tecknology"
                showUserName
                isGroup
                size={35}
              />
              <StyledOptions>
                <StyledOptionsItem>
                  <EllipsisHorizontalIcon />
                </StyledOptionsItem>
              </StyledOptions>
            </StyledChatItemContainer>
          </StyledChatItem>
        ))}
      </StyledChatsList>
      <CreateGroupModal
        title="Create new group"
        onClose={handleCloseModale}
        isOpen={isModalOpen}
      />
    </StyledGroup>
  );
};

export default Groups;

const StyledGroup = styled.div`
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
    @media (max-width: 1000px) {
    padding: 1.5rem 1rem;
  }
  @media (max-width: 700px) {
    padding: 2rem 1.5rem;
  }
`;

const StyledSBarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
   @media (max-width: 1000px) {
   gap: 1rem;
  }
   @media (max-width: 700px) {
   gap: 1.5rem;
  }
`;
const StyledChatsList = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
   padding: 0;
  }
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
  @media (max-width: 1000px) {
    padding: 1rem;
    border-radius: 0;
  }
@media (max-width: 700px) {
    padding: 1rem 1.5rem;
  }
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
