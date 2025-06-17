import React from "react";
import styled from "styled-components";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <StyledHeader></StyledHeader>
    </>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 8rem;
`;
