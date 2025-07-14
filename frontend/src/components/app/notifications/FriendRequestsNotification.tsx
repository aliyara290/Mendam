import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { BellIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useFriends } from "@/contexts/FriendsContext";
import { useMessages } from "@/contexts/MessagesContext";
import Avatar from "@app/avatar/Avatar";
import { useNavigate } from "react-router-dom";

interface FriendRequestsNotificationProps {
  isNotificationsOpen: boolean;
  onClose?: () => void;
}

const FriendRequestsNotification: React.FC<FriendRequestsNotificationProps> = ({
  isNotificationsOpen = false,
  onClose
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {
    friendRequests,
    acceptFriendRequest,
    declineFriendRequest,
    loadFriendRequests
  } = useFriends();
  const { setCurrentConversation } = useMessages();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (friendRequests.length === 0) {
        loadFriendRequests();
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [friendRequests.length, loadFriendRequests]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    };

    if (isNotificationsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNotificationsOpen, onClose]);

  const handleAccept = async (requestId: string) => {
    try {
      await acceptFriendRequest(requestId);
      console.log('✅ Friend request accepted!');
    } catch (error) {
      console.error('Failed to accept friend request:', error);
    }
  };

  const handleAcceptAndChat = async (requestId: string, friendId: string) => {
    try {
      await acceptFriendRequest(requestId);

      onClose?.();

      setCurrentConversation(friendId);

      navigate('/app/@me');

      console.log('✅ Friend added and chat started!');
    } catch (error) {
      console.error('Failed to accept friend request:', error);
    }
  };

  const handleDecline = async (requestId: string) => {
    try {
      await declineFriendRequest(requestId);
      console.log('❌ Friend request declined');
    } catch (error) {
      console.error('Failed to decline friend request:', error);
    }
  };

  return (
    <StyledNotificationContainer ref={dropdownRef}>
      {isNotificationsOpen && (
        <StyledNotificationDropdown>
          <StyledNotificationHeader>
            <h4>Friend Requests</h4>
            <StyledCloseButton onClick={onClose}>
              <XMarkIcon />
            </StyledCloseButton>
          </StyledNotificationHeader>

          {friendRequests.length === 0 ? (
            <StyledEmptyState>
              <StyledEmptyText>No pending friend requests</StyledEmptyText>
            </StyledEmptyState>
          ) : (
            <StyledNotificationList>
              {friendRequests.map((request) => (
                <StyledNotificationItem key={request._id}>
                  <StyledRequestInfo>
                    <Avatar
                      image={request.friendId.avatar}
                      userName={request.friendId.fullName}
                      size={35}
                    />
                    <StyledRequestText>
                      <StyledRequestName>{request.friendId.fullName}</StyledRequestName>
                      <StyledRequestUsername>@{request.friendId.username}</StyledRequestUsername>
                      {/* <StyledRequestTime>
                        {new Date(request.addedAt).toLocaleDateString()}
                      </StyledRequestTime> */}
                    </StyledRequestText>
                  </StyledRequestInfo>

                  <StyledRequestActions>
                    <StyledActionButton
                      accept
                      onClick={() => handleAccept(request._id)}
                      title="Accept"
                    >
                      <CheckIcon />
                    </StyledActionButton>
                    <StyledActionButton
                      onClick={() => handleDecline(request._id)}
                      title="Decline"
                    >
                      <XMarkIcon />
                    </StyledActionButton>
                  </StyledRequestActions>
                </StyledNotificationItem>
              ))}
            </StyledNotificationList>
          )}

          {friendRequests.length > 0 && (
            <StyledNotificationFooter>
              <StyledFooterText>
                {friendRequests.length} pending request{friendRequests.length !== 1 ? 's' : ''}
              </StyledFooterText>
            </StyledNotificationFooter>
          )}
        </StyledNotificationDropdown>
      )}
    </StyledNotificationContainer>
  );
};

export default FriendRequestsNotification;

const StyledNotificationContainer = styled.div`
  position: relative;
  width: 94%;
`;

const RingBallAnim = keyframes`
0% {
  transform: rotate(-10deg);
}
50% {
  transform: rotate(10deg);
}
100% {
  transform: rotate(0);
}
`



const StyledNotificationBadge = styled.div`
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  background-color: #ef4444;
  color: white;
  font-size: var(--text-xs);
  font-weight: 600;
  min-width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.background.secondary};
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const StyledNotificationDropdown = styled.div`
  position: absolute;
  bottom: 11rem;
  left: 3%;
  width: 100%;
  max-height: 50rem;
  background-color: ${({ theme }) => theme.background.secondary};
  border: 1px solid ${({ theme }) => theme.border.primary};
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  z-index: 10000;

  @media (max-width: 700px) {
    bottom: 8rem;
  }
`;

const StyledNotificationHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h4 {
    font-size: var(--text-lg);
    color: ${({ theme }) => theme.text.primary};
    font-weight: 500;
    margin: 0;
  }
`;

const StyledCloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text.placeholder};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: ${({ theme }) => theme.background.secondary};
    color: ${({ theme }) => theme.text.primary};
  }
  
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const StyledEmptyState = styled.div`
  padding: 3rem 1.5rem;
  text-align: center;
`;

const StyledEmptyText = styled.div`
  color: ${({ theme }) => theme.text.placeholder};
  font-size: var(--text-md);
`;

const StyledNotificationList = styled.div`
  max-height: 40rem;
  overflow-y: auto;
`;

const StyledNotificationItem = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.background.secondary};
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const StyledRequestInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
`;

const StyledRequestText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 0;
`;

const StyledRequestName = styled.div`
  font-size: var(--text-md);
  color: ${({ theme }) => theme.text.primary};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledRequestUsername = styled.div`
  font-size: var(--text-sm);
  color: ${({ theme }) => theme.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledRequestTime = styled.div`
  font-size: var(--text-xs);
  color: ${({ theme }) => theme.text.placeholder};
`;

const StyledRequestActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledActionButton = styled.button<{ accept?: boolean }>`
  width: 2.9rem;
  height: 2.9rem;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  background-color: ${({ accept }) =>
    accept ? 'var(--blue)' : "#554955"};
  color: ${({ accept, theme }) =>
    accept ? 'white' : "#ff99a4"};
  &:hover {
    background-color: ${({ accept }) =>
    accept ? 'var(--dark-blue)' : '#ff99a4'};
    color: white;
    transform: scale(1.05);
  }
  
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const StyledNotificationFooter = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.border.secondary};
  text-align: center;
`;

const StyledFooterText = styled.div`
  font-size: var(--text-sm);
  color: ${({ theme }) => theme.text.placeholder};
`;