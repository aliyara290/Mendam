import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export interface MenuItemProps {
  label: string;
  icon?: React.ReactNode;
  danger?: boolean;
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

  return (
    <StyledMenu
      ref={menuRef}
      bottom={bottom}
      left={left}
      right={right}
      top={top}
      isOpen={isOpen} // Pass isOpen to StyledMenu for visibility control
    >
      <StyledMenuContainer>
        <StyledItemsList isOpen={isOpen}>
          {items.map((item, index) => (
            <StyledItem isDanger={item.danger} key={index} onClick={item.onClick}>
              {item.icon && <StyledIcon isDanger={item.danger}>{item.icon}</StyledIcon>}
              <StyledLabel isDanger={item.danger}>
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

interface StyledItemsListProps {
  isOpen?: boolean;
}

interface StyledIconProps {
  isDanger?: boolean;
}

interface StyledMenuPropsWithOpen extends StyledMenuProps {
  isOpen?: boolean;
}

// Styled components
const StyledMenu = styled.div<StyledMenuPropsWithOpen>`
  min-width: 20rem;
  overflow: hidden;
  position: absolute;
  top: ${({ top }) => (top ? `${top}%` : "unset")};
  left: ${({ left }) => (left ? `${left}%` : "unset")};
  right: ${({ right }) => (right ? `${right}%` : "unset")};
  bottom: ${({ bottom }) => (bottom ? `${bottom}%` : "unset")};
  z-index: 233546578;
  
  /* Control visibility and pointer events */
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: opacity 0.2s ease;
`;

const StyledMenuContainer = styled.div`
  width: 100%;
  height: max-content;
`;

const StyledItemsList = styled.div<StyledItemsListProps>`
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  background-color: ${({ theme }) => theme.background.thirdly};
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  transition: transform 0.2s ease;
`;

const StyledItem = styled.div<StyledIconProps>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 1rem 3rem 1rem 0.6rem;
  cursor: pointer;
  border-radius: 0.6rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ isDanger }) => (isDanger ? "#ff99a333" : ({ theme }) => theme.background.secondary)};
  }
`;

const StyledIcon = styled.div<StyledIconProps>`
  color: ${({ isDanger }) => (isDanger ? "#ff99a4" : ({ theme }) => theme.text.primary)};
  display: flex;
  align-items: center;
  
  svg {
    width: 1.6rem;
  }
`;

const StyledLabel = styled.div<StyledIconProps>`
  span {
    font-size: var(--text-md);
    color: ${({ isDanger }) => (isDanger ? "#ff99a4" : ({ theme }) => theme.text.primary)};
  }
`;