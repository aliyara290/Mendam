import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PaperClipIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { DocumentIcon, FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";
import EmojiPicker, { type EmojiClickData } from "emoji-picker-react";
import Menu, { type MenuItemProps } from "@app/menu/Menu";
import { useTheme } from "@/contexts/ThemeContext";
import { useGroups } from "@/contexts/ChatGroupsContext";
import { useSocket } from "@/contexts/SocketContext";

interface GroupMessageInputProps {
  groupId: string;
}

const GroupMessageInput: React.FC<GroupMessageInputProps> = ({ groupId }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);
  
  const { themeMode } = useTheme();
  const { sendGroupMessage } = useGroups();
  const { socket } = useSocket();
  
  const emojiRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle typing indicators
  useEffect(() => {
    if (!socket || !groupId) return;

    if (message.trim() && !isTyping) {
      setIsTyping(true);
      socket.emit('typing_start_group', { groupId });
    }

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Set new timeout to stop typing indicator
    typingTimeoutRef.current = setTimeout(() => {
      if (isTyping) {
        setIsTyping(false);
        socket.emit('typing_stop_group', { groupId });
      }
    }, 2000);

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [message, socket, groupId, isTyping]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      if (isTyping && socket && groupId) {
        socket.emit('typing_stop_group', { groupId });
      }
    };
  }, [isTyping, socket, groupId]);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setMessage((prev) => prev + emojiData.emoji);
    inputRef.current?.focus();
  };

  const handleSendMessage = async () => {
    if (!message.trim() || !groupId || isSending) return;

    const messageContent = message.trim();
    setMessage("");
    setIsSending(true);

    // Stop typing indicator
    if (isTyping) {
      setIsTyping(false);
      if (socket) {
        socket.emit('typing_stop_group', { groupId });
      }
    }

    try {
      await sendGroupMessage(groupId, messageContent);
    } catch (error) {
      console.error('Failed to send group message:', error);
      // Restore message on error
      setMessage(messageContent);
    } finally {
      setIsSending(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  // Handle clicking outside emoji picker
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
      onClick: () => {
        setIsMenuOpen(false);
        // TODO: Implement file upload
        alert("File upload not implemented yet");
      },
    },
    {
      label: "Document",
      icon: <DocumentIcon />,
      onClick: () => {
        setIsMenuOpen(false);
        // TODO: Implement document upload
        alert("Document upload not implemented yet");
      },
    },
  ];

  const checkTheme = themeMode === "light" || themeMode === "clean-light" || themeMode === "minimal-white" || themeMode === "modern-sky" || themeMode === "soft-blush" ? "light" : "dark";

  if (!groupId) {
    return (
      <StyledGroupMessageInput>
        <StyledDisabledMessage>
          Select a group to start messaging
        </StyledDisabledMessage>
      </StyledGroupMessageInput>
    );
  }

  return (
    <StyledGroupMessageInput>
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

      <StyledInputContainer>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={isSending}
        />
      </StyledInputContainer>

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
        
        {message.trim() && (
          <StyledSendButton 
            onClick={handleSendMessage}
            disabled={isSending}
          >
            <PaperAirplaneIcon />
          </StyledSendButton>
        )}
      </StyledRightSide>
    </StyledGroupMessageInput>
  );
};

export default GroupMessageInput;

// Styled Components (similar to DirectMessages but for groups)
interface StyledItemsListProps {
  isOpen?: boolean;
}

const StyledGroupMessageInput = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background.thirdly};
  position: relative;
  user-select: none;
  border-top: 1px solid ${({ theme }) => theme.border.secondary};
  
  @media (max-width: 1000px) {
    height: 5.5rem;
  }
`;

const StyledDisabledMessage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text.placeholder};
  font-size: var(--text-md);
`;

const StyledInputContainer = styled.div`
  width: 100%;
  height: 100%;
  
  input {
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    font-size: var(--text-md);
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.text.secondary};
    
    &::placeholder {
      color: ${({ theme }) => theme.text.placeholder};
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;

const StyledIconItem = styled.div`
  padding: 0 2rem;
  color: ${({ theme }) => theme.text.thirdly};
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.2s ease;
  
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

const StyledSendButton = styled.button`
  padding: 0 1rem;
  color: var(--blue);
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    color: var(--dark-blue);
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
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