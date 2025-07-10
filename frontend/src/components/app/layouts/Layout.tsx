import React from "react";
import Navigation from "@app/navigation/Navigation";
import styled from "styled-components";
import StatusBar from "@app/status-bar/StatusBar";
import { Outlet } from "react-router-dom";
import ChatArea from "@app/chat-area";

// interface LayoutProps {
//   children: ReactNode;
// }

const Layout: React.FC = () => {
  return (
    <StyledLayout>
      <StyledNavPart>
        <StyledTopPart>
          <Navigation />
          <StyledFr>
            <Outlet />
          </StyledFr>
        </StyledTopPart>
        <StatusBar />
      </StyledNavPart>
      <StyledChatPart>
        <ChatArea />
      </StyledChatPart>
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div`
  width: 100%;
  display: flex;
`;

const StyledNavPart = styled.div`
width: 100%;
    max-width: 47rem;
  height: 100svh;
  /* position: sticky; */
  /* left: 0; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background.primary};

  @media (max-width: 1200px) {
    max-width: 40rem;
  }
  @media (max-width: 1000px) {
    max-width: 35rem;
  }
  @media (max-width: 850px) {
    max-width: 32rem;
  }
  @media (max-width: 700px) {
    max-width: unset;
  }
`;

const StyledTopPart = styled.div`
  min-height: calc(100% - 100px);
  max-height: calc(100% - 100px);

   @media (max-width: 1000px) {
    min-height: calc(100% - 81.6px);
    max-height: calc(100% -  81.6px);
  }
   @media (max-width: 700px) {
    min-height: calc(100% - 67.4px);
    max-height: calc(100% -  67.4px);
  }
  display: flex;
`;

const StyledFr = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background.primary};
  border-left: 1px solid ${({ theme }) => theme.border.primary};
  border-bottom: 1px solid ${({ theme }) => theme.border.primary};
  border-bottom-left-radius: 8px;
`;

const StyledChatPart = styled.div`
  width: 100%;
  height: 100svh;
  background-color: ${({ theme }) => theme.background.secondary};
  border-left: 1px solid ${({ theme }) => theme.border.primary};
  /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  svg {
    fill: ${({ theme }) => theme.background.thirdly};
  }
  span {
    color: ${({ theme }) => theme.text.placeholder};
    font-size: var(--text-md);
  } */
   @media (max-width: 700px) {
    display: none;
  }
`;
