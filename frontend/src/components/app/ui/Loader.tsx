import React from "react";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid ${({ theme }) => theme.text.placeholder};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

const Loader: React.FC = () => {
  return <StyledSpinner />;
};

export default Loader;