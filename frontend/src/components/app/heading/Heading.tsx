import React from "react";
import styled from "styled-components";

interface HeadignProps {
  title: string;
  fontSize?: string;
  heading?: string;
}
interface StyledHeadignProps {
  fontSize?: string;
}

const Heading: React.FC<HeadignProps> = ({ title, heading }) => {
  return (
    <>
      <StyledHeading>
        <StyledHeadingTitle as={heading}>{title}</StyledHeadingTitle>
      </StyledHeading>
    </>
  );
};

export default Heading;

const StyledHeading = styled.div`
  width: max-content;
`;

const StyledHeadingTitle = styled.h1<StyledHeadignProps>`
  color: ${({ theme }) => theme.text.primary};
  line-height: 1;
  font-weight: 500;
  font-size: ${({ fontSize }) =>
    fontSize ? `var(--text-${fontSize})` : "var(--text-xl)"};
`;