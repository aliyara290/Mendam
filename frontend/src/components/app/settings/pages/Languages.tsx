import React from "react";
import styled from "styled-components";
import Button from "../../ui/button/Button";

const Languages: React.FC = ({}) => {
  return (
    <>
      <StyledLanguages>
        <StyledHeading>
          <h3>Languages</h3>
        </StyledHeading>
        <StyledLanguagesContent>
          
        </StyledLanguagesContent>
      </StyledLanguages>
    </>
  );
};

export default Languages;

const StyledLanguages = styled.div`
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

const StyledLanguagesContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
