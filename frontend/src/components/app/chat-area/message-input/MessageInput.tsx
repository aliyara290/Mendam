import { FaceSmileIcon, PaperClipIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import styled from "styled-components";
import Menu, { type MenuItemProps } from "@app/menu/Menu";
import { DocumentIcon, PhotoIcon } from "@heroicons/react/24/outline";

interface MessageInputProps {}

const MessageInput: React.FC<MessageInputProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const menuItems: MenuItemProps[] = [
    {
      label: "Photos & Videos",
      icon: <PhotoIcon />,
      onClick: () => {
        handleOpenMenu();
      },
    },
    {
      label: "Document",
      icon: <DocumentIcon />,
      onClick: () => alert("Reply"),
    },
  ];
  return (
    <>
      <StyledMessageProps>
        <StyledLeftSide>
          <StyledIconItem>
            <FaceSmileIcon />
          </StyledIconItem>
        </StyledLeftSide>
        <StyledMessageInput>
          <input type="text" placeholder="Type a message" />
        </StyledMessageInput>
        <StyledRightSide>
          <Menu
            onClose={() => setIsMenuOpen(false)}
            isOpen={isMenuOpen}
            right="1"
            top="-160"
            items={menuItems}
          />
          <StyledIconItem onClick={handleOpenMenu}>
            <PaperClipIcon />
          </StyledIconItem>
        </StyledRightSide>
      </StyledMessageProps>
    </>
  );
};

export default MessageInput;

const StyledMessageProps = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background.thirdly};
  position: relative;
  user-select: none;
`;
const StyledMessageInput = styled.div`
  width: 100%;
  height: 100%;
  input {
    width: 100%;
    height: 100%;
    padding: 0 2rem 0 0;
    font-size: var(--text-md);
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const StyledIconItem = styled.div`
  padding: 0 2rem;
  color: ${({ theme }) => theme.text.thirdly};
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }
  svg {
    width: 2.3rem;
  }
`;

const StyledLeftSide = styled.div`
  width: max-content;
`;
const StyledRightSide = styled.div`
  width: max-content;
`;
