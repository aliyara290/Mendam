import React, { useState } from "react";
import styled from "styled-components";
import Logo from "@app/logo/Logo";
import WarddLogo from "@assets/images/wardd-logo.jpg";
import DxcLogo from "@assets/images/dxc-logo.jpg";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PlusCircleIcon,
  UserGroupIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";
import CreateWorkspace from "./modal/CreateWorkspace";

interface NavigationProps { }
interface StyledNavigationProps {
  selected?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ }) => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCloseModale = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <StyledNavigation>
        <StyledTopLinks>
          <StyledLogo>
            <Link to="/app/@me">
              <Logo />
            </Link>
          </StyledLogo>
          <StyledLine />
          <StyledPagesLinks>
            <Link to={"/app/@me"}>
              <StyledLink selected={location.pathname === "/app/@me"}>
                <StyledLinkIcon>
                  <ChatBubbleOvalLeftEllipsisIcon />
                </StyledLinkIcon>
              </StyledLink>
            </Link>
            <Link to={"/app/friends"}>
              <StyledLink selected={location.pathname === "/app/friends"}>
                <StyledLinkIcon>
                  <UserPlusIcon />
                </StyledLinkIcon>
              </StyledLink>
            </Link>
            <Link to={"/app/groups"}>
              <StyledLink selected={location.pathname === "/app/groups"}>
                <StyledLinkIcon>
                  <UserGroupIcon />
                </StyledLinkIcon>
              </StyledLink>
            </Link>
          </StyledPagesLinks>
          {/* <StyledLine />
          <StyledGroupsContainer>
            <StyledGroupsList>
              <Link to={"/app/channel/345678"}>
                <StyledGroup>
                  <StyledGroupImage>
                    <img src={WarddLogo} alt="wardd logo" />
                  </StyledGroupImage>
                </StyledGroup>
              </Link>

              <Link to={"/app/channel/345678"}>
                <StyledGroup>
                  <StyledGroupImage>
                    <img
                      src="https://docs.imperium.plus/files/media-GRGQG-GFRFXRXG-PQQLL-WGRWM-GFRFGQQPLL-LLPXR-GFRFGQPXQWWM-X-QMGGQFRMWG"
                      alt="wardd logo"
                    />
                  </StyledGroupImage>
                </StyledGroup>
              </Link>
              <Link to={"/app/channel/345678"}>
                <StyledGroup>
                  <StyledGroupImage>
                    <img src={DxcLogo} alt="dxc logo" />
                  </StyledGroupImage>
                </StyledGroup>
              </Link>
            </StyledGroupsList>
            <StyledAddBtn onClick={() => setIsModalOpen(true)}>
              <StyledLinkIcon>
                <PlusCircleIcon />
              </StyledLinkIcon>
            </StyledAddBtn>
          </StyledGroupsContainer> */}
        </StyledTopLinks>

        {/* <StyledBottomLinks>
          <StyledLine />
          
        </StyledBottomLinks> */}
        <CreateWorkspace
          title="Create new workspace"
          onClose={handleCloseModale}
          isOpen={isModalOpen}
        />
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
  /* overflow-y: auto;
  overflow-x: hidden; */
  @media (max-width: 1000px) {
    padding: 1.5rem 1rem 0;
  }
  @media (max-width: 700px) {
    padding: 2rem 1.5rem;
  }
  ::-webkit-scrollbar {
    width: 0px;
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

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.8rem;
  @media (max-width: 1000px) {
    gap: 1.5rem;
  }
`;

const StyledLogo = styled.div`
  width: max-content;
  svg {
    border-radius: 8px;
  }
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: ${({ theme }) => theme.border.primary};
  @media (max-width: 1000px) {
    height: 0.5px;
  }
`;

const StyledPagesLinks = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`;

const StyledLink = styled.div<StyledNavigationProps>`
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text.primary};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -1.5rem;
    width: 0.4rem;
    height: ${({ selected }) => (selected ? "100%" : "0.6rem")};
    background-color: ${({ selected }) => (selected ? ({ theme }) => theme.text.secondary : ({ theme }) => theme.background.thirdly)};
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    transition: all 0.3s ease;
      @media (max-width: 1000px) {
    left: -1.1rem;
  }
      @media (max-width: 700px) {
    left: -1.5rem;
  }
  }
  &:hover::after {
    height: 100%;
    background-color: ${({ theme }) => theme.text.secondary};
  }
  &:hover {
    /* background-color: var(--blue); */
    /* color: var(--light); */
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
    background-color: var(--blue);
    color: var(--light);
  }
`;
const StyledGroup = styled.div`
  width: 4.3rem;
  height: 4.3rem;
  cursor: pointer;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -1.5rem;
    width: 4px;
    height: 0.6rem;
    background-color: ${({ theme }) => theme.background.thirdly};
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    transition: all 0.3s ease;
     @media (max-width: 1000px) {
    left: -1.1rem;
  }
      @media (max-width: 700px) {
    left: -1.5rem;
  }
  }
  &:hover::after {
    height: 100%;
    background-color: ${({ theme }) => theme.text.secondary};
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
// const StyledBottomLinks = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   gap: 1.8rem;
// `;
// const StyledImage = styled.img``;
