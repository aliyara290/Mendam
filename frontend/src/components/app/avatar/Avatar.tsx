import React from "react";
import styled from "styled-components";
import { UserIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

type UserStatus = "online" | "offline" | "idle";

interface AvatarProps {
  link?: boolean;
  image?: string;
  userName?: string;
  status?: UserStatus;
  showStatus?: boolean;
  showStatusCircle?: boolean;
  showUserName?: boolean;
  size?: number;
  isGroup?: boolean;
  bg?: boolean
}

const Avatar: React.FC<AvatarProps> = ({
  userName = "Ali Yara",
  image,
  link = false,
  status = "offline",
  showStatus = false,
  showStatusCircle = false,
  showUserName = false,
  size = 40,
  isGroup = false,
  bg = false
}) => {
  const avatarContent = (
    <StyledAvatar>
      <StyledAvatarImage bg={bg} size={size}>
        {image ? (
          <img
            src={image}
            alt={`${userName} avatar`}
            loading="lazy"
            width={size}
            height={size}
          />
        ) : isGroup ? (
          <UserGroupIcon />
        ) : (
          <UserIcon />
        )}
      </StyledAvatarImage>
      {showStatusCircle && (
        <StyledUserStatus>
          <StyledStatus status={status}>
            {status === "idle" && <StyledIdleIndicator />}
            {status === "offline" && <StyledOfflineIndicator />}
          </StyledStatus>
        </StyledUserStatus>
      )}
    </StyledAvatar>
  );

  if (link) {
    return (
      <StyledUserAvatar>
        <Link to="#">{avatarContent}</Link>
        {showUserName && (
          <StyledUserName>
            <h5>{userName}</h5>
            {showStatus && <span>{status}</span>}
          </StyledUserName>
        )}
      </StyledUserAvatar>
    );
  }

  return (
    <StyledUserAvatar>
      {avatarContent}
      {showUserName && (
        <StyledUserName>
          <h5>{userName}</h5>
          {showStatus && <span>{status}</span>}
        </StyledUserName>
      )}
    </StyledUserAvatar>
  );
};

export default Avatar;

// Styled Components
const StyledUserAvatar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  /* z-index: 1; */
  user-select: none;
  width: max-content;
`;

const StyledAvatar = styled.div`
  position: relative;
  width: max-content;
`;

const StyledAvatarImage = styled.div<{ size: number, bg: boolean }>`
  overflow: hidden;
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({bg}) => (bg ? ({ theme }) => theme.background.secondary : ({ theme }) => theme.background.thirdly)};
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: var(--shadow-sm); */

  svg {
    width: ${({ size }) => size * 0.5}px;
    color: ${({ theme }) => theme.text.placeholder};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 10%;
  }
`;

const StyledUserStatus = styled.div`
  position: absolute;
  right: 0;
  bottom: -3px;
  width: 1.6rem;
  height: 1.6rem;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 50%;
`;

const getStatusColor = (status: UserStatus): string => {
  const statusColors = {
    idle: "var(--info-500)",
    online: "var(--success-500)",
    offline: "var(--primary)",
  };
  return statusColors[status];
};

const StyledStatus = styled.div<{ status: UserStatus }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-45%, -46%);
  width: 1rem;
  height: 1rem;
  background-color: ${({ status }) => getStatusColor(status)};
  border-radius: 50%;
`;

const StyledIdleIndicator = styled.div`
  position: absolute;
  top: -5%;
  left: -3%;
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 50%;
`;

const StyledOfflineIndicator = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.text.thirdly};
  border-radius: 50%;
`;

const StyledUserName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  h5 {
    font-size: var(--text-md);
    color: ${({ theme }) => theme.text.primary};
    font-weight: 500;
    margin: 0;
    line-height: 1;
  }

  span {
    font-size: var(--text-sm);
    color: ${({ theme }) => theme.text.secondary};
    line-height: 1;

  }
`;
