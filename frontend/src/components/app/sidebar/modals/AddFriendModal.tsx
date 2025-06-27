import React from "react";
import styled from "styled-components";
import ModalComponent from "@app/modal/Modal";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Avatar from "@app/avatar/Avatar";

interface AddFriendModalProps {
  title: string;
  onClose: () => void;
  isOpen: boolean;
}

const AddFriendModal: React.FC<AddFriendModalProps> = ({
  title,
  onClose,
  isOpen,
}) => {
  return (
    <>
      <ModalComponent title={title} onClose={onClose} isOpen={isOpen}>
        <StyledAddFreindContent>
          <StyledSearchBar>
            <StyledSearchBarContent>
              <StyledSearchInput>
                <input
                  type="text"
                  placeholder="Search for friend by it's Mendam username"
                />
              </StyledSearchInput>
              <StyledSearchIcon>
                <MagnifyingGlassIcon />
              </StyledSearchIcon>
            </StyledSearchBarContent>
          </StyledSearchBar>
          <StyledSearchResult>
            <StyledResultHeading>
              <h6>Result:</h6>
            </StyledResultHeading>
            <StyledUsersList>
              {[...Array(12)].map((_, index) => (
                <StyledUserItem key={index}>
                  <StyledChatItemContainer>
                    <Avatar
                      image="https://res.cloudinary.com/decjm9mmr/image/upload/q_10/linkedin_qeixe5.jpg"
                      status="offline"
                      userName="Ali Yara"
                      showUserName
                      size={35}
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
                </StyledUserItem>
              ))}
            </StyledUsersList>
          </StyledSearchResult>
        </StyledAddFreindContent>
      </ModalComponent>
    </>
  );
};

export default AddFriendModal;

const StyledAddFreindContent = styled.div`
  width: 100%;
  position: relative;
`;

const StyledSearchBar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3456;
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.background.thirdly};
`;
const StyledSearchBarContent = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledSearchInput = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.border.secondary};
  input {
    padding: 0 1.5rem 0 1.5rem;
    width: 100%;
    height: 100%;
    background: transparent;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.text.primary};
    &::placeholder {
      color: ${({ theme }) => theme.text.placeholder};
    }
  }
`;
const StyledSearchIcon = styled.div`
  color: var(--light);
  /* padding: 1.5rem; */
  width: 7rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue);
  border: 1px solid transparent;
  border-radius: 0.8rem;
  cursor: pointer;
  &:hover {
    background-color: var(--dark-blue);
  }
  svg {
    width: 2.1rem;
  }
`;

const StyledSearchResult = styled.div`
width: 100%;
  /* border-top: 1px solid ${({ theme }) => theme.border.secondary}; */
`;
// const StyledSearchResult = styled.div``
// const StyledSearchResult = styled.div``
// const StyledSearchResult = styled.div``
const StyledResultHeading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  h6 {
    line-height: 1;
    font-weight: 500;
    color: ${({ theme }) => theme.text.placeholder};
    font-size: var(--text-md);
  }
`;

const StyledUsersList = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledUserItem = styled.div`
  width: 100%;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.border.secondary};
  }
`;
const StyledChatItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  /* &:hover {
    background-color: ${({ theme }) => theme.background.secondary};
  } */
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
    background-color: ${({ theme }) => theme.background.secondary};
    color: ${({ theme }) => theme.text.secondary};
  }
  svg {
    width: 2rem;
    color: inherit;
  }
`;
