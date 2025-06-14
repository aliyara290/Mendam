import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";
import styled from "styled-components";

interface SearchBarProps {
  value?: string;
  placeholder?: string;
  onInputChange?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  placeholder = "Search for",
  onInputChange,
}) => {
  return (
    <>
      <StyledSearchBar>
        <StyledSearchInput>
          <input type="text" placeholder={placeholder} />
        </StyledSearchInput>
        <StyledSearchIcon>
          <span>ctrl</span>
          <span>k</span>
          <MagnifyingGlassIcon />
        </StyledSearchIcon>
      </StyledSearchBar>
    </>
  );
};

export default SearchBar;

const StyledSearchBar = styled.div`
  width: 100%;
  height: 4.5rem;
  overflow: hidden;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.background.secondary};
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
`;

const StyledSearchInput = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
  input {
    width: 100%;
    height: 100%;
    background: transparent;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.text.primary};
    &::placeholder {
      color: ${({ theme }) => theme.text.placeholder};
    }
  }
`;
const StyledSearchIcon = styled.div`
  color: ${({ theme }) => theme.text.placeholder};
  padding: 1.5rem;
  display: flex;
  align-items: center;
  span {
    &:first-child {
      margin-right: 0.3rem;
    }
    line-height: 1;
    font-size: var(--text-sm);
    padding: 0.2rem 0.5rem;
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.text.placeholder};
  }
  svg {
    width: 2.1rem;
    margin-left: 1rem;
  }
`;
