import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react'
import styled from 'styled-components';

interface HeadingProps {
    title?: string;
    onClick?: () => void
}

const Heading: React.FC<HeadingProps> = ({ title, onClick }) => {
    return (
        <>
            <StyledHeading>
                <StyledChevronIcon onClick={onClick}>
                    <ChevronRightIcon />
                </StyledChevronIcon>
                <StyledHeadingTitle>
                    <h3>{title}</h3>
                </StyledHeadingTitle>
            </StyledHeading>
        </>
    )
}

export default Heading

const StyledHeading = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(8, 1fr);
  padding: 3rem;
   @media (max-width: 700px) {
    padding: 2rem 2rem 2rem 1rem;
  }
/* padding-bottom: 5rem; */

`
const StyledChevronIcon = styled.div`
width: 4rem;
height: 4rem;
border-radius: 100%;
grid-column: span 1 / span 1;
display: flex;
align-items: center;
justify-content: center;
&:active {
    background-color: ${({ theme }) => theme.background.thirdly};
}
svg {
    width: 2.5rem;
    color: ${({ theme }) => theme.text.secondary};
}
`
const StyledHeadingTitle = styled.div`
width: 100%;
grid-column: span 6 / span 6;
display: flex;
align-items: center;
justify-content: center;
  h3 {
    font-weight: 500;
    font-size: var(--text-xxl);
    line-height: 1;
    color: ${({ theme }) => theme.text.primary};
    @media (max-width: 600px) {
    font-size: var(--text-xl);
  }
  }
`