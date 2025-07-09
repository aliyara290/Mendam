import styled from "styled-components";
import Logo from "@components/logo/Logo";
import Button from "@components/button/Button";

const StyledHeader = styled.header`
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid #e3e3e3; */
`;

const StyledLogo = styled.div`
  user-select: none;
`;
const StyledButtons = styled.div`
  user-select: none;
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledLogo>
          <Logo />
        </StyledLogo>
        <StyledButtons>
          <Button isLink href="/auth/login" title={"Log in"} />
        </StyledButtons>
      </StyledHeader>
    </>
  );
};

export default Header;
