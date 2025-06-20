import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export interface MenuItemProps {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

interface StyledMenuProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export interface MenuProps extends StyledMenuProps {
  isOpen: boolean;
  items: MenuItemProps[];
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({
  items = [],
  top,
  left,
  right,
  bottom,
  isOpen = false,
  onClose,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <StyledMenu
      ref={menuRef}
      bottom={bottom}
      left={left}
      right={right}
      top={top}
    >
      <StyledMenuContainer>
        <StyledItemsList>
          {items.map((item, index) => (
            <StyledItem key={index} onClick={item.onClick}>
              {item.icon && <StyledIcon>{item.icon}</StyledIcon>}
              <StyledLabel>
                <span>{item.label}</span>
              </StyledLabel>
            </StyledItem>
          ))}
        </StyledItemsList>
      </StyledMenuContainer>
    </StyledMenu>
  );
};

export default Menu;

// Styled components
const StyledMenu = styled.div<StyledMenuProps>`
  min-width: 20rem;
  background-color: ${({ theme }) => theme.background.thirdly};
  border-radius: 8px;
  padding: 0.5rem;
  overflow: hidden;
  position: absolute;
  top: ${({ top }) => (top ? `${top}%` : "unset")};
  left: ${({ left }) => (left ? `${left}%` : "unset")};
  right: ${({ right }) => (right ? `${right}%` : "unset")};
  bottom: ${({ bottom }) => (bottom ? `${bottom}%` : "unset")};
  z-index: 233546578;
  border: 1px solid ${({ theme }) => theme.border.primary};
`;

const StyledMenuContainer = styled.div`
  width: 100%;
  height: max-content;
`;

const StyledItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

const StyledItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 1rem 3rem 1rem 0.6rem;
  cursor: pointer;
  border-radius: 0.6rem;
  &:hover {
    background-color: ${({ theme }) => theme.background.secondary};
  }
`;

const StyledIcon = styled.div`
  color: ${({ theme }) => theme.text.thirdly};
  display: flex;
  align-items: center;
  svg {
    width: 1.6rem;
  }
`;

const StyledLabel = styled.div`
  span {
    font-size: var(--text-md);
    color: ${({ theme }) => theme.text.thirdly};
  }
`;
