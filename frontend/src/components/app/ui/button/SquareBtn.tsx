import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import styled from "styled-components";

interface SquareBtnProps {
  onClick?: () => void
}

const SquareBtn: React.FC<SquareBtnProps> = ({ onClick }) => {
  return (
    <>
      <StyledSquareBtn onClick={onClick}>
        <PlusIcon />
      </StyledSquareBtn>
    </>
  );
};

export default SquareBtn;

const StyledSquareBtn = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 0.8rem;
  /* box-shadow: var(--shadow-sm); */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue);
  color: var(--light);
  cursor: pointer;
  padding: 0 1rem;
  &:hover {
    background-color: var(--dark-blue);
    svg {
      rotate: 90deg;
    }
  }
  svg {
    width: 2.5rem;
    transition: all 0.2s ease-in-out;
  }
`;
