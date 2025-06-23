import React from "react";
import styled from "styled-components";
import Button from "../../ui/button/Button";

const MyAccount: React.FC = ({}) => {
  return (
    <>
      <StyledMyAccount>
        <StyledHeading>
          <h3>My Account</h3>
        </StyledHeading>
        <StyledMyAccountContent>
          <StyledOptionItem>
            <StyledItemHeading>
              <h5>Password</h5>
            </StyledItemHeading>
            <StyledItemContent>
              <Button variant="primary" title="Change password" type="button" />
            </StyledItemContent>
          </StyledOptionItem>
          <StyledOptionItem>
            <StyledItemHeading>
              <h5>Account Removal</h5>
              <p>
                Disabling your account means you can recover it at any time
                after taking this action.
              </p>
            </StyledItemHeading>
            <StyledItemContent>
              <Button variant="danger" title="Disable Account" type="button" />
              <Button variant="danger" title="Delete Account" type="button" />
            </StyledItemContent>
          </StyledOptionItem>
        </StyledMyAccountContent>
      </StyledMyAccount>
    </>
  );
};

export default MyAccount;

const StyledMyAccount = styled.div`
  width: 100%;
`;

const StyledHeading = styled.div`
  width: 100%;
  padding-bottom: 3rem;
  h3 {
    font-weight: 500;
    font-size: var(--text-xxl);
    line-height: 1;
    color: ${({ theme }) => theme.text.primary};
  }
`;

const StyledMyAccountContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const StyledItemHeading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  h5 {
    font-weight: 500;
    font-size: var(--text-lg);
    line-height: 1;
    color: ${({ theme }) => theme.text.secondary};
  }
  p {
    font-weight: 500;
    font-size: var(--text-md);
    line-height: 1;
    color: ${({ theme }) => theme.text.placeholder};
    padding-top: 0.7rem;
  }
`;

const StyledOptionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledItemContent = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
`;
