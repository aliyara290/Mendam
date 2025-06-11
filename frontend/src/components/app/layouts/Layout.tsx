import React, { type ReactNode } from "react";
import Navigation from "@app/navigation/Navigation";
import styled from "styled-components";
import StatusBar from "@app/status-bar/StatusBar";
import { Outlet } from "react-router-dom";

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
      <StyledChatPart></StyledChatPart>
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div`
  width: 100%;
  display: flex;
`;
const StyledNavPart = styled.div`
  min-width: 50rem;
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
  border-left: 2px solid ${({ theme }) => theme.border.primary};
  border-bottom: 2px solid ${({ theme }) => theme.border.primary};
  border-bottom-left-radius: 8px;
  padding: 2rem 1.5rem 0;
`;
const StyledChatPart = styled.div`
  width: 100%;
  height: 100lvh;
  background-color: ${({ theme }) => theme.background.secondary};
`;
