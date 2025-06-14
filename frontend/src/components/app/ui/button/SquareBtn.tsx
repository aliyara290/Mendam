import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import styled from "styled-components";

interface SquareBtnProps {}

const SquareBtn: React.FC<SquareBtnProps> = ({}) => {
  return (
    <>
      <StyledSquareBtn>
        <PlusIcon />
      </StyledSquareBtn>
    </>
  );
};

export default SquareBtn;

const StyledSquareBtn = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 0.8rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--purple);
  color: var(--light);
  cursor: pointer;
  &:hover {
    background-color: var(--dark-purple);
    transform: scale(1.03);
    svg {
        rotate: 90deg;
    }
  }
  svg {
    width: 2.5rem;
    transition: all .2s ease-in-out;
  }
  z-index: 345;
`;
