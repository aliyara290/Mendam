import React from "react";
import styled from "styled-components";
import Logo from "@app/logo/Logo";
import WarddLogo from "@assets/images/wardd-logo.jpg";
import DxcLogo from "@assets/images/dxc-logo.jpg";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PlusCircleIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <>
      <StyledNavigation>
        <StyledTopLinks>
          <StyledLogo>
            <Logo />
          </StyledLogo>
          <StyledLine />
          <StyledPagesLinks>
            <StyledLink>
              <StyledLinkIcon>
                <ChatBubbleOvalLeftEllipsisIcon />
              </StyledLinkIcon>
            </StyledLink>
            <StyledLink>
              <StyledLinkIcon>
                <UsersIcon />
              </StyledLinkIcon>
            </StyledLink>
          </StyledPagesLinks>
          <StyledLine />
          <StyledGroupsContainer>
            <StyledGroupsList>
              <StyledGroup>
                <StyledGroupImage src={WarddLogo} alt="wardd logo" />
              </StyledGroup>
              <StyledGroup>
                <StyledGroupImage src={DxcLogo} alt="dxc logo" />
              </StyledGroup>
            </StyledGroupsList>
            <StyledAddBtn>
              <StyledLinkIcon>
                <PlusCircleIcon />
              </StyledLinkIcon>
            </StyledAddBtn>
          </StyledGroupsContainer>
        </StyledTopLinks>

        <StyledBottomLinks>
          <StyledLine />
          <StyledLink>
            <StyledLinkIcon>
              <UserGroupIcon />
            </StyledLinkIcon>
          </StyledLink>
        </StyledBottomLinks>
      </StyledNavigation>
    </>
  );
};

export default Navigation;

const StyledNavigation = styled.aside`
  height: 100%;
  background-color: ${({ theme }) => theme.background.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 2.5rem 2rem 0;
  width: max-content;
`;
const StyledTopLinks = styled.aside`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.8rem;
`;

const StyledLogo = styled.div`
  width: max-content;
  svg {
    border-radius: 8px;
  }
`;

const StyledLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.border.primary};
`;

const StyledPagesLinks = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`;

const StyledLink = styled.div`
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLinkIcon = styled.div`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.text.primary};
`;

const StyledGroupsList = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`;
const StyledGroupsContainer = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`;
const StyledAddBtn = styled.div`
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledGroup = styled.div`
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 0.8rem;
  overflow: hidden;
`;
const StyledGroupImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StyledBottomLinks = styled.div`
   display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.8rem;
`;
// const StyledImage = styled.img``;
