import React from "react";
import styled from "styled-components";
import manAvatar from "@assets/images/avatars/man-avatar.png";
import womanAvatar from "@assets/images/avatars/woman-avatar.png";

interface AvatarProps {
  link?: string;
  image?: string;
  userName?: string;
  status?: string;
  gender?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  userName,
  image,
  link = false,
  status = "offline",
  gender,
}) => {
  return (
    <>
      {link ? (
        <StyledAvatar>
          <StyledAvatarImage>
            <img
              src={image || (gender === "female" ? womanAvatar : manAvatar)}
              alt={image ? userName : "avatar"}
              loading="lazy"
              width={40}
              height={40}
            />
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
        <StyledAvatar>
          <StyledAvatarImage>
            <img
              src={image || (gender === "female" ? womanAvatar : manAvatar)}
              alt={image ? userName : "avatar"}
              loading="lazy"
              width={40}
              height={40}
            />
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
      )}
    </>
  );
};

export default Avatar;

const StyledAvatar = styled.div`
  overflow: hidden;
  position: relative;
  width: max-content;
`;

const StyledAvatarImage = styled.div`
  overflow: hidden;
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
  background-color: var(--purple);
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
  bottom: 0;
  width: 1.4rem;
  height: 1.4rem;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 100%;
`;

const StyledStatus = styled.div<AvatarProps>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-45%, -46%);
  width: 0.8rem;
  height: 0.8rem;
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
  left: -5%;
  width: 0.6rem;
  height: 0.6rem;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 100%;
`;
const StyledOfflineStatus = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0.4rem;
  height: 0.4rem;
  background-color: var(--gray);
  border-radius: 100%;
`;