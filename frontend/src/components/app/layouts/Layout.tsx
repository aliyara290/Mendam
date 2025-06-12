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
      <StyledChatPart>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 69.85 65.69"
          width={130}
        >
          <path
            className="cls-1"
            d="M42.59,82.84a17.76,17.76,0,0,1-1.82-.37c-12.57-4-21.06-12.15-24.54-25A34.7,34.7,0,0,1,35.07,17.34a1.74,1.74,0,0,1,.91-.17c.49.09.57.69.17,1.22a15.42,15.42,0,0,0-2.64,5.26,11.3,11.3,0,0,0,.74,8,45.6,45.6,0,0,0,8.21,11.56,39.26,39.26,0,0,1,5.94,7.47c.58,1,1.05,2.16,1.55,3.19.72-1.33,1.41-2.71,2.19-4a43.15,43.15,0,0,1,5.5-6.78c3.06-3.43,6-6.95,8-11.18a11.69,11.69,0,0,0-.41-11.47A2.48,2.48,0,0,1,65,20a1.44,1.44,0,0,1,.31-1.71A1.27,1.27,0,0,1,67,18.25a63.72,63.72,0,0,1,5.64,3.93A33.31,33.31,0,0,1,84.22,41.82c2.12,11.24-.52,21.32-8,30A33.8,33.8,0,0,1,60,82.15a1.84,1.84,0,0,1-.64.17c-.18,0-.47-.09-.53-.23s.05-.4.17-.55a1.88,1.88,0,0,1,.48-.34A41.12,41.12,0,0,0,72.25,68.34,26.46,26.46,0,0,0,75.83,52c-.36-4.17-1.8-8-3.25-11.88l-.35-.91c-.9,1.59-1.71,3.15-2.64,4.63A64.74,64.74,0,0,1,61.26,54c-2.91,3-5.92,6-8,9.72-1,1.77-1.72,3.65-2.6,5.47a1.17,1.17,0,0,1-.68.62c-.18,0-.55-.31-.63-.56-1.7-4.9-4.74-8.92-8.24-12.63-3.1-3.3-6.37-6.45-8.91-10.22-1.44-2.15-2.73-4.41-4.08-6.61l-.31-.47c-.19.35-.34.61-.46.89A37.56,37.56,0,0,0,24.05,53.9a27,27,0,0,0,5.53,17.23A44.24,44.24,0,0,0,41.72,82l1,.63Z"
            transform="translate(-15.07 -17.16)"
          />
        </svg>

        <span>Select a chat to view it!</span>
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
`;

const StyledChatPart = styled.div`
  width: 100%;
  height: 100lvh;
  background-color: ${({ theme }) => theme.background.secondary};
  display: flex;
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
  }
`;
