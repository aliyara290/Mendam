import React from "react";
import styled from "styled-components";
import { CheckIcon } from "@heroicons/react/16/solid";
import { useTheme } from "@/contexts/ThemeContext";

const Appearance: React.FC = ({ }) => {
  const { theme, themeMode, switchTheme } = useTheme();
  return (
    <>
      <StyledAppearance>
        <StyledHeading>
          <h3>Appearance </h3>
        </StyledHeading>
        <StyledAppearanceContent>
          <StyledOptionItem>
            <StyledItemHeading>
              <h5>Theme</h5>
              <p>Adjust the color of the interface for better visibility.</p>
            </StyledItemHeading>
            <StyledItemContent>
              <StyledThemesList>
                <StyledThemeItem
                  onClick={() => switchTheme("light")}
                  selected={themeMode === "light"}
                  mode={"var(--light)"}
                >
                  {themeMode === "light" && (

                    <StyledSelected>
                      <CheckIcon />
                    </StyledSelected>
                  )}
                </StyledThemeItem>
                <StyledThemeItem
                  onClick={() => switchTheme("dark")}
                  selected={themeMode === "dark"}
                  mode={"var(--primary)"}
                >
                  {themeMode === "dark" && (
                    <StyledSelected>
                      <CheckIcon />
                    </StyledSelected>
                  )}
                </StyledThemeItem>
              </StyledThemesList>
            </StyledItemContent>
          </StyledOptionItem>
        </StyledAppearanceContent>
      </StyledAppearance>
    </>
  );
};

export default Appearance;

const StyledAppearance = styled.div`
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

const StyledAppearanceContent = styled.div`
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
  gap: 1.5rem;
`;

const StyledItemContent = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
`;
const StyledThemesList = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1rem;
`;

interface StyledThemeItemProps {
  mode: string;
  selected: boolean;
}

const StyledThemeItem = styled.div<StyledThemeItemProps>`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 100%;
  background-color: ${({ mode }) => mode};
  border: 3px solid
    ${({ selected }) => (selected ? "var(--blue)" : "transparent")};
  position: relative;
  cursor: pointer;
  &:hover {
    border-color: var(--blue);
  }
`;
const StyledSelected = styled.div`
  position: absolute;
  top: -4px;
  right: -8px;
  width: 2rem;
  height: 2rem;
  background-color: var(--blue);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 1.4rem;
    color: var(--light);
  }
`;
