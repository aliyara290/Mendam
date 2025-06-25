import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import Navigation from "@app/navigation/Navigation";
import SettingNavigation from "../Navigation";
import { Outlet } from "react-router-dom";
import StatusBar from "../../status-bar/StatusBar";
import { useSettings } from "@/contexts/openSettingContext";

interface LayoutProps { }


const Layout: React.FC<LayoutProps> = ({ }) => {
  const { openSettings } = useSettings();
  return (
    <>
      <StyledLayout>
        <StyledLayoutLeft>
          <StyledTopPart>
            <Navigation />
            <SettingNavigation />
          </StyledTopPart>
          {window.innerWidth <= 700 && (
            <StatusBar />
          )}
        </StyledLayoutLeft>
        <StyledMainContent isOpen={openSettings} >
          <Outlet />
        </StyledMainContent>
      </StyledLayout>
    </>
  );
};
export default Layout;

const StyledLayout = styled.div`
  width: 100%;
  height: 100svh;
  display: flex;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background.primary};
`;
const StyledLayoutLeft = styled.div`
  width: 100%;
  max-width: 47rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
height: 100%;
   @media (max-width: 700px) {
    min-height: calc(100% - 67.4px);
    max-height: calc(100% -  67.4px);
  }
  display: flex;
  overflow: hidden;

`;

interface StyledMainContent {
  isOpen?: boolean;
}

const StyledMainContent = styled.div<StyledMainContent>`
  width: 100%;
  height: 98%;
  background-color: ${({ theme }) => theme.background.secondary};
  border-left: 1px solid ${({ theme }) => theme.border.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.border.secondary};
  border-bottom-left-radius: 0.8rem;
  overflow: auto;
   @media (max-width: 700px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 100%;
    height: 100%;
    z-index: 1234567890987654321234567890;
    border: none;
    transition: right .3s ease;
  }
  /* overflow: hidden; */
`;