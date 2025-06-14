import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useCallback, type ReactNode } from "react";
import styled from "styled-components";

interface ModalProps {
  children?: ReactNode;
  title?: string;
  isOpen?: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({
  children,
  title,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose} aria-label="Close modal">
            <XMarkIcon className="size-6" />
          </CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default ModalComponent;

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: #1a1a1e75;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 60rem;
  max-height: 90vh;
  background-color: ${({ theme }) => theme.background.thirdly};
  border-radius: 1rem;
  border: 1px solid var(--b-c);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid var(--b-c);
  background-color: ${({ theme }) => theme.background.thirdly};
  flex-shrink: 0;
`;

const ModalTitle = styled.h2`
  font-size: var(--text-xl);
  color: ${({ theme }) => theme.text.secondary};
  font-weight: 500;
  margin: 0;
`;

const ModalBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
`;

const CloseButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 3rem;
  background: ${({ theme }) => theme.background.secondary};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #6b7280;
  transition: all 0.2s ease;
  flex-shrink: 0;

  outline: none;

  &:hover {
    background-color: rgba(74, 85, 101, 0.1);
    color: #9ca3af;
  }

  &:focus {
    outline: 2px solid var(--primary-color, #7515f5);
    outline-offset: 2px;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
