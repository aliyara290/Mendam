// frontend/src/components/app/search-bar/SearchBar.tsx - Updated with controlled input
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";
import styled from "styled-components";

interface SearchBarProps {
  value?: string;
  placeholder?: string;
  onInputChange?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  placeholder = "Search for",
  onInputChange,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onInputChange) {
      onInputChange(e.target.value);
    }
  };

  return (
    <>
      <StyledSearchBar>
        <StyledSearchInput>
          <input 
            type="text" 
            placeholder={placeholder}
            value={value || ""}
            onChange={handleInputChange}
          />
        </StyledSearchInput>
        <StyledSearchIcon>
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
  border: 1px solid ${({ theme }) => theme.border.primary};
  display: flex;
  align-items: center;
`;

const StyledSearchInput = styled.div`
  width: 100%;
  height: 100%;
  input {
    padding: 0 0 0 1.5rem;
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
  
  svg {
    width: 2.1rem;
    margin-left: 1.5rem;
  }
`;