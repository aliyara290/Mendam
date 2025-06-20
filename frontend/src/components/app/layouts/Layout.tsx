import React, { type ReactNode } from "react";
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
  min-width: 47rem;
  max-width: 47rem;
  height: 100lvh;
  position: sticky;
  left: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background.primary};
`;

const StyledTopPart = styled.div`
  min-height: calc(100% - 100px);
  max-height: calc(100% - 100px);
  display: flex;
`;

const StyledFr = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background.primary};
  border-left: 1.4px solid ${({ theme }) => theme.border.primary};
  border-bottom: 1.4px solid ${({ theme }) => theme.border.primary};
  border-bottom-left-radius: 8px;
`;

const StyledChatPart = styled.div`
  width: 100%;
  height: 100lvh;
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
`;
