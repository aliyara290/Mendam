import React from "react";
import styled from "styled-components";

interface StyledButtonProps {
  bg?: string;
  outline?: boolean;
  fz?: string;
  color?: string;
  hoverBg?: string;
  hoverColor?: string;
}

interface ButtonProps {
  fz?: string;
  bg?: string;
  outline?: boolean;
  color?: string;
  hoverColor?: string;
  hoverBg?: string;
  title: string;
  isLink?: boolean;
  href?: string;
  isBlank?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  fz,
  bg,
  outline,
  color,
  hoverColor,
  hoverBg,
  title,
  isLink,
  href,
  isBlank,
}) => {
  return isLink ? (
    <a href={href} target={isBlank ? "_blank" : undefined}>
      <StyledButton
        color={color}
        outline={outline}
        bg={bg}
        fz={fz}
        hoverColor={hoverColor}
        hoverBg={hoverBg}
      >
        {title}
      </StyledButton>
    </a>
  ) : (
    <StyledButton
      color={color}
      outline={outline}
      bg={bg}
      fz={fz}
      hoverColor={hoverColor}
      hoverBg={hoverBg}
    >
      {title}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<StyledButtonProps>`
  width: max-content;
  padding: 1.4rem 4rem;
  border-radius: 30px;
  background-color: ${({ bg, outline }) =>
    bg ? `var(--${bg})` : outline ? "transparent" : "var(--purple)"};
  font-size: ${({ fz }) => (fz ? `var(--text-${fz})` : "var(--text-lg)")};
  border: 2px solid
    ${({ outline }) => (outline ? `var(--purple)` : "transparent")};
  color: ${({ color, outline }) =>
    color ? `var(--${color})` : outline ? "var(--purple)" : "var(--light)"};
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ hoverBg, outline }) =>
      hoverBg
        ? `var(--${hoverBg})`
        : outline
        ? "var(--purple)"
        : "var(--light)"};
    color: ${({ hoverColor, outline }) =>
      hoverColor
        ? `var(--${hoverColor})`
        : outline
        ? "var(--light)"
        : "var(--purple)"};
    border: 2px solid
      ${({ outline }) => (outline ? `var(--purple)` : "var(--purple)")};
  }
  text-decoration: none;
  font-weight: 600;
`;