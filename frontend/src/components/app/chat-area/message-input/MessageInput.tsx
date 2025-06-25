import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PaperClipIcon } from "@heroicons/react/24/solid";
import { DocumentIcon, FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";
import EmojiPicker, { type EmojiClickData } from "emoji-picker-react";
import Menu, { type MenuItemProps } from "@app/menu/Menu";
import { useTheme } from "@/contexts/ThemeContext";

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { themeMode } = useTheme();

  const emojiRef = useRef<HTMLDivElement>(null);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiRef.current &&
        !emojiRef.current.contains(event.target as Node)
      ) {
        setShowEmojiPicker(false);
      }
    };

    if (showEmojiPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmojiPicker]);

  const menuItems: MenuItemProps[] = [
    {
      label: "Photos & Videos",
      icon: <PhotoIcon />,
      onClick: () => setIsMenuOpen(false),
    },
    {
      label: "Document",
      icon: <DocumentIcon />,
      onClick: () => setIsMenuOpen(false),
    },
  ];

  const checkTheme = themeMode === "light" || themeMode === "clean-light" || themeMode === "minimal-white" || themeMode === "modern-sky" || themeMode === "soft-blush" ? "light" : "dark";

  return (
    <StyledMessageProps>
      <StyledLeftSide>
        <StyledIconItem onClick={() => setShowEmojiPicker((prev) => !prev)}>
          <FaceSmileIcon />
        </StyledIconItem>
      </StyledLeftSide>

      <StyledEmojiPicker ref={emojiRef} isOpen={showEmojiPicker}>
        <StyledEmojiPickerContent isOpen={showEmojiPicker}>
          <EmojiPicker
            autoFocusSearch={false}
            theme={checkTheme}
            lazyLoadEmojis
            onEmojiClick={handleEmojiClick}
          />
        </StyledEmojiPickerContent>
      </StyledEmojiPicker>

      <StyledMessageInput>
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </StyledMessageInput>

      <StyledRightSide>
        <Menu
          onClose={() => setIsMenuOpen(false)}
          isOpen={isMenuOpen}
          right="1"
          top="-160"
          items={menuItems}
        />
        <StyledIconItem onClick={() => setIsMenuOpen(true)}>
          <PaperClipIcon />
        </StyledIconItem>
      </StyledRightSide>
    </StyledMessageProps>
  );
};

export default MessageInput;

interface StyledItemsListProps {
  isOpen?: boolean;
}

const StyledMessageProps = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background.thirdly};
  position: relative;
  user-select: none;
  @media (max-width: 1000px) {
    height: 5.5rem;
  }
`;

const StyledMessageInput = styled.div`
  width: 100%;
  height: 100%;
  input {
    width: 100%;
    height: 100%;
    padding: 0;
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

  @media (max-width: 1000px) {
    padding: 0 1.5rem;
  }
`;

const StyledLeftSide = styled.div`
  width: max-content;
`;

const StyledRightSide = styled.div`
  width: max-content;
`;

const StyledEmojiPicker = styled.div<StyledItemsListProps>`
  position: absolute;
  bottom: 7rem;
  left: 1rem;
  z-index: 100;
  box-shadow: var(--shadow-sm);
  border-radius: 0.8rem;
  overflow: hidden;
  
  /* Control visibility and interaction */
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(10px)")};
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

const StyledEmojiPickerContent = styled.div<StyledItemsListProps>`
  width: 100%;
`;