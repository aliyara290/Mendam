import React from "react";
import styled from "styled-components";
import Loader from "@app/ui/Loader";

interface ButtonProps {
  variant?: "primary" | "danger" | "cancel";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  title: string;
  link?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
  title,
  link,
  target = "self",
}) => {
  const buttonContent = disabled ? <Loader /> : title;

  const buttonElement = (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      type={type}
      variant={variant}
    >
      {buttonContent}
    </StyledButton>
  );

  return link ? (
    <a target={`_${target}`} href={link}>
      {buttonElement}
    </a>
  ) : (
    buttonElement
  );
};

export default Button;

const BUTTON_COLORS = {
  primary: { default: "#7515f5", hover: "#601fb5" },
  danger: { default: "#E06363", hover: "#c74c4c" },
  cancel: { default: "#2d2d31", hover: "#3c3c41" },
} as const;

const StyledButton = styled.button<Pick<ButtonProps, "variant" | "disabled">>`
  min-height: 4.5rem;
  max-height: 4.5rem;
  border-radius: 0.8rem;
  border: none;
  padding: 0 2.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: opacity 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ variant = "primary" }) =>
    BUTTON_COLORS[variant].default};
  color: #efeff0;

  &:hover:not(:disabled) {
    background-color: ${({ variant = "primary" }) =>
      BUTTON_COLORS[variant].hover};
  }
`;
