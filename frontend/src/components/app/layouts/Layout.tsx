import React from "react";
import Navigation from "@app/navigation/Navigation";
import styled from "styled-components";
import StatusBar from "@app/status-bar/StatusBar";
import { Outlet } from "react-router-dom";
import ChatArea from "@app/chat-area";
import { useMobileChat } from "@/contexts/MobileChatContext";

const Layout: React.FC = () => {
  const { isChatOpen } = useMobileChat();

  return (
    <StyledLayout>
      <StyledNavPart isChatOpen={isChatOpen}>
        <StyledTopPart>
          <Navigation />
          <StyledFr>
            <Outlet />
          </StyledFr>
        </StyledTopPart>
        <StatusBar />
      </StyledNavPart>
      <StyledChatPart isChatOpen={isChatOpen}>
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

interface StyledNavPartProps {
  isChatOpen?: boolean;
}

const StyledNavPart = styled.div<StyledNavPartProps>`
  width: 100%;
  max-width: 47rem;
  height: 100svh;
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
    position: ${({ isChatOpen }) => isChatOpen ? 'fixed' : 'relative'};
    left: ${({ isChatOpen }) => isChatOpen ? '-100%' : '0'};
    transition: left 0.3s ease;
    z-index: ${({ isChatOpen }) => isChatOpen ? 1 : 10};
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

interface StyledChatPartProps {
  isChatOpen?: boolean;
}

const StyledChatPart = styled.div<StyledChatPartProps>`
  width: 100%;
  height: 100svh;
  background-color: ${({ theme }) => theme.background.secondary};
  border-left: 1px solid ${({ theme }) => theme.border.primary};
  
  @media (max-width: 700px) {
    position: fixed;
    top: 0;
    right: ${({ isChatOpen }) => isChatOpen ? '0' : '-100%'};
    width: 100%;
    height: 100%;
    z-index: 1000;
    transition: right 0.3s ease;
  }
`;