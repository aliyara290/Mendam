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
} from "@heroicons/react/24/solid";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <>
      <StyledNavigation>
        <StyledTopLinks>
          <StyledLogo>
            <a href="/app">
              <Logo />
            </a>
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
            <StyledLink>
              <StyledLinkIcon>
                <UserGroupIcon />
              </StyledLinkIcon>
            </StyledLink>
          </StyledPagesLinks>
          <StyledLine />
          <StyledGroupsContainer>
            <StyledGroupsList>
              <StyledGroup>
                <StyledGroupImage>
                  <img src={WarddLogo} alt="wardd logo" />
                </StyledGroupImage>
              </StyledGroup>
              <StyledGroup>
                <StyledGroupImage>
                  <img src={DxcLogo} alt="dxc logo" />
                </StyledGroupImage>
              </StyledGroup>
            </StyledGroupsList>
            <StyledAddBtn>
              <StyledLinkIcon>
                <PlusCircleIcon />
              </StyledLinkIcon>
            </StyledAddBtn>
          </StyledGroupsContainer>
        </StyledTopLinks>

        {/* <StyledBottomLinks>
          <StyledLine />
          
        </StyledBottomLinks> */}
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
  padding: 2.5rem 1.5rem 0;
  width: max-content;

  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background.primary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.background.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.background.primary};
  }
`;
const StyledTopLinks = styled.aside`
  height: 100%;
  overflow: auto;
  overflow-x: visible;
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
  cursor: pointer;
  color: ${({ theme }) => theme.text.primary};

  &:hover {
    background-color: var(--purple);
    color: var(--dark-purple);
  }
`;

const StyledLinkIcon = styled.a`
  width: 2rem;
  height: 2rem;
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
  color: ${({ theme }) => theme.text.primary};
  cursor: pointer;
  &:hover {
    background-color: var(--purple);
    color: var(--dark-purple);
  }
`;
const StyledGroup = styled.div`
  width: 4.3rem;
  height: 4.3rem;
  cursor: pointer;
  position: relative;
  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -2rem;
      width: 4px;
      height: 100%;
      background-color: ${({ theme }) => theme.text.secondary};
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
`;
const StyledGroupImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.8rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const StyledBottomLinks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.8rem;
`;
// const StyledImage = styled.img``;
