import React from "react";
import styled from "styled-components";
import Navigation from "@app/navigation/Navigation";
import SettingNavigation from "../Navigation";
import { Outlet } from "react-router-dom";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <>
      <StyledLayout>
        <Navigation />
        <SettingNavigation />
        <StyledMainContent>
          <Outlet />
        </StyledMainContent>
      </StyledLayout>
    </>
  );
};

export default Layout;

const StyledLayout = styled.div`
  width: 100%;
  height: 100lvh;
  display: flex;
  background-color: ${({ theme }) => theme.background.primary};
`;

const StyledMainContent = styled.div`
  width: 100%;
  height: 98%;
  background-color: ${({ theme }) => theme.background.secondary};
  border-left: 1px solid ${({ theme }) => theme.border.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.border.secondary};
  border-bottom-left-radius: 0.8rem;
  padding: 3rem;
  overflow: auto;
`;
