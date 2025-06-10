import React from "react";
import styled from "styled-components";
import Avatar from "@app/avatar/Avatar";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";

interface StatusBarProps {}

const StatusBar: React.FC<StatusBarProps> = ({}) => {
  return (
    <>
      <StyledStatusBar>
        <StyledStatusBarContainer>
          <StyledUserAvatar>
            <Avatar status="idle" />
          </StyledUserAvatar>
          <StyledSettingIcon>
            <Cog8ToothIcon />
          </StyledSettingIcon>
        </StyledStatusBarContainer>
      </StyledStatusBar>
    </>
  );
};

export default StatusBar;

const StyledStatusBar = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background.primary};
  padding: 2rem;
`;

const StyledStatusBarContainer = styled.div`
  width: 100%;
  /* height: 7rem; */
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 0.8rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledUserAvatar = styled.div`
  width: max-content;
`;

const StyledSettingIcon = styled.div`
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 2.7rem;
    transition: .6s ease;
  }
  &:hover svg {
    transform: rotate(90deg);
  }
`;
