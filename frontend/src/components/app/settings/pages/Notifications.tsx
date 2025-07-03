import React from "react";
import styled from "styled-components";

const Notifications: React.FC = ({}) => {
  return (
    <>
      <StyledNotifications>
        <StyledHeading>
          <h3>Notifications</h3>
        </StyledHeading>
        <StyledNotificationsContent>
          
        </StyledNotificationsContent>
      </StyledNotifications>
    </>
  );
};

export default Notifications;

const StyledNotifications = styled.div`
  width: 100%;
`;

const StyledHeading = styled.div`
  width: 100%;
  padding-bottom: 5rem;
  h3 {
    font-weight: 500;
    font-size: var(--text-xxl);
    line-height: 1;
    color: ${({ theme }) => theme.text.primary};
  }
`;

const StyledNotificationsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
