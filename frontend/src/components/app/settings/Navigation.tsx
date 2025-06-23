import {
  ArrowLeftStartOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
  BellIcon,
  Cog6ToothIcon,
  LanguageIcon,
  SunIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

interface SettingNavigationProps {}

const SettingNavigation: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <StyledNavigation>
        <StyledNavigationContent>
          <StyledNavigationLinksList>
            <StyledNavigationHeader>
              <h4>Settings</h4>
            </StyledNavigationHeader>
            <StyledTopPart>
              <StyledNavigationLinkItem
                isActive={location.pathname === "/app/settings/profile"}
              >
                <Link to={"profile"}>
                  <StyledNavLinkIcon>
                    <UserIcon />
                  </StyledNavLinkIcon>
                  <StyledNavLinkLabel>
                    <span>Profile</span>
                  </StyledNavLinkLabel>
                </Link>
              </StyledNavigationLinkItem>
              <StyledNavigationLinkItem
                isActive={location.pathname === "/app/settings/account"}
              >
                <Link to={"account"}>
                  <StyledNavLinkIcon>
                    <Cog6ToothIcon />
                  </StyledNavLinkIcon>
                  <StyledNavLinkLabel>
                    <span>Account</span>
                  </StyledNavLinkLabel>
                </Link>
              </StyledNavigationLinkItem>

              {/* <StyledNavigationLinkItem
                isActive={location.pathname === "/app/settings/languages"}
              >
                <Link to={"languages"}>
                  <StyledNavLinkIcon>
                    <LanguageIcon />
                  </StyledNavLinkIcon>
                  <StyledNavLinkLabel>
                    <span>Languages</span>
                  </StyledNavLinkLabel>
                </Link>
              </StyledNavigationLinkItem> */}
              <StyledNavigationLinkItem
                isActive={location.pathname === "/app/settings/appearance"}
              >
                <Link to={"appearance"}>
                  <StyledNavLinkIcon>
                    <SunIcon />
                  </StyledNavLinkIcon>
                  <StyledNavLinkLabel>
                    <span>Appearance</span>
                  </StyledNavLinkLabel>
                </Link>
              </StyledNavigationLinkItem>
              {/* <StyledNavigationLinkItem
                isActive={location.pathname === "/app/settings/notifications"}
              >
                <Link to={"notifications"}>
                  <StyledNavLinkIcon>
                    <BellIcon />
                  </StyledNavLinkIcon>
                  <StyledNavLinkLabel>
                    <span>Notifications</span>
                  </StyledNavLinkLabel>
                </Link>
              </StyledNavigationLinkItem> */}
            </StyledTopPart>
          </StyledNavigationLinksList>
          <StyledLogout>
            <StyledNavLinkIcon>
              <ArrowRightStartOnRectangleIcon />
            </StyledNavLinkIcon>
            <StyledNavLinkLabel>
              <span>Sign out</span>
            </StyledNavLinkLabel>
          </StyledLogout>
        </StyledNavigationContent>
      </StyledNavigation>
    </>
  );
};

export default SettingNavigation;

const StyledNavigation = styled.div`
  width: 100%;
  height: 100%;
  max-width: 40rem;
  background-color: ${({ theme }) => theme.background.primary};
  border-left: 1.4px solid ${({ theme }) => theme.border.primary};
  padding: 2rem 1.5rem;
`;

const StyledNavigationContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledNavigationHeader = styled.div`
  padding-bottom: 3rem;
  h4 {
    color: ${({ theme }) => theme.text.primary};
    font-size: var(--text-xl);
    font-weight: 400;
  }
`;

const StyledNavigationLinksList = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledTopPart = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLinkIcon = styled.div`
  color: ${({ theme }) => theme.text.secondary};
  display: flex;
  align-items: center;
  svg {
    width: 2rem;
  }
`;

const StyledNavLinkLabel = styled.div`
  color: ${({ theme }) => theme.text.secondary};
  span {
    font-size: var(--text-md);
  }
`;

interface StyledNavigationLinkItemProps {
  isActive?: boolean;
}
const StyledNavigationLinkItem = styled.div<StyledNavigationLinkItemProps>`
  width: 100%;

  a {
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    border-radius: 0.8rem;

    ${({ isActive, theme }) =>
      isActive &&
      `
        ${StyledNavLinkIcon} {
          color: var(--blue);
        }
        ${StyledNavLinkLabel} {
          color: var(--blue);
        }
        background-color: ${theme.background.secondary};
      `}

    &:hover {
      background-color: ${({ theme }) => theme.background.secondary};
    }
  }
`;

const StyledLogout = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
  border-radius: 0.8rem;
  &:hover {
    background-color: ${({ theme }) => theme.background.secondary};
  }
  ${StyledNavLinkLabel} {
    span {
      color: #e04b44;
    }
  }
  ${StyledNavLinkIcon} {
    svg {
      color: #e04b44;
    }
  }
`;
