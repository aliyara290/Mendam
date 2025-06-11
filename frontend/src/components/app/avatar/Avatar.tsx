import React from "react";
import styled from "styled-components";
import manAvatar from "@assets/images/avatars/man-avatar.png";
import womanAvatar from "@assets/images/avatars/woman-avatar.png";
import { UserIcon } from "@heroicons/react/24/solid";

interface AvatarProps {
  link?: string;
  image?: string;
  userName?: string;
  status?: string;
  gender?: string;
  showStatus?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  userName = "Ali Yara",
  image,
  link = false,
  status = "offline",
  gender,
  showStatus = false,
}) => {
  return (
    <>
      {link ? (
        <StyledAvatar>
          <StyledAvatarImage>
            {image ? (
              <img
                src={image}
                alt={image ? userName : "avatar"}
                loading="lazy"
                width={40}
                height={40}
              />
            ) : (
              <UserIcon />
            )}
          </StyledAvatarImage>
          <StyledUserStatus>
            <StyledStatus status={status}>
              {status === "idle" && <StyledInfoStatus></StyledInfoStatus>}
              {status === "offline" && (
                <StyledOfflineStatus></StyledOfflineStatus>
              )}
            </StyledStatus>
          </StyledUserStatus>
        </StyledAvatar>
      ) : (
        <StyledUserAvatar>
          <StyledAvatar>
            <StyledAvatarImage>
              {image ? (
              <img
                src={image}
                alt={image ? userName : "avatar"}
                loading="lazy"
                width={40}
                height={40}
              />
            ) : (
              <UserIcon />
            )}
            </StyledAvatarImage>
            <StyledUserStatus>
              <StyledStatus status={status}>
                {status === "idle" && <StyledInfoStatus></StyledInfoStatus>}
                {status === "offline" && (
                  <StyledOfflineStatus></StyledOfflineStatus>
                )}
              </StyledStatus>
            </StyledUserStatus>
          </StyledAvatar>
          <StyledUserName>
            <h5>{userName}</h5>
            {showStatus && <span>{status}</span>}
          </StyledUserName>
        </StyledUserAvatar>
      )}
    </>
  );
};

export default Avatar;

const StyledUserAvatar = styled.div`
position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 1;
`;
const StyledAvatar = styled.div`
  /* overflow: hidden; */
  position: relative;
  width: max-content;
`;

const StyledAvatarImage = styled.div`
  overflow: hidden;
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  svg {
    width: 2rem;
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
  border-radius: 100%;
`;

const StyledStatus = styled.div<AvatarProps>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-45%, -46%);
  width: 1rem;
  height: 1rem;
  background-color: ${({ status }) =>
    status === "idle"
      ? "var(--info-500)"
      : status === "online"
      ? "var(--success-500)"
      : "var(--primary)"};
  border-radius: 100%;
`;
const StyledInfoStatus = styled.div`
  position: absolute;
  top: -5%;
  left: -3%;
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 100%;
`;
const StyledOfflineStatus = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--gray);
  border-radius: 100%;
`;

const StyledUserName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  h5 {
    font-size: var(--text-md);
    color: ${({ theme }) => theme.text.primary};
    font-weight: 500;
  }
  span {
    font-size: var(--text-sm);
    color: ${({ theme }) => theme.text.secondary};
  }
`;
