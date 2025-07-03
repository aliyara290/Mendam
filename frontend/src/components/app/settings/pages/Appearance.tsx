import React from "react";
import styled from "styled-components";
import { CheckIcon } from "@heroicons/react/16/solid";
import { useTheme } from "@/contexts/ThemeContext";
import {
  DarkTheme,
  LightTheme,
  CleanLightTheme,
  MinimalWhiteTheme,
  ModernSkyTheme,
  SoftBlushTheme,
  CleanDarkTheme,
  ModernCharcoalTheme,
  NeoDarkTheme,
  GlassNightTheme,
} from "@/themes";
import Heading from "../heading/Heading";
import { useSettings } from "@/contexts/openSettingContext";

const themeOptions = {
  "minimal-white": MinimalWhiteTheme,
  "glass-night": GlassNightTheme,
  "light": LightTheme,
  "clean-light": CleanLightTheme,
  "modern-sky": ModernSkyTheme,
  "soft-blush": SoftBlushTheme,
  "dark": DarkTheme,
  "clean-dark": CleanDarkTheme,
  "modern-charcoal": ModernCharcoalTheme,
  "neo-dark": NeoDarkTheme,
};

const Appearance: React.FC = () => {
  const { themeMode, switchTheme } = useTheme();
  const { setOpenSettings } = useSettings();

  const handleOpenContent = () => {
    if (setOpenSettings) {
      setOpenSettings(true);
    }
  };

  return (
    <StyledAppearance>
      <Heading onClick={handleOpenContent} title="Appearance" />
      <StyledAppearanceContent>
        <StyledOptionItem>
          <StyledItemHeading>
            <h5>Theme</h5>
            <p>Adjust the color of the interface for better visibility.</p>
          </StyledItemHeading>

          <StyledItemContent>
            <StyledThemesList>
              {Object.entries(themeOptions).map(([key, value]) => (
                <StyledThemeItem
                  key={key}
                  onClick={() => switchTheme(key as keyof typeof themeOptions)}
                  selected={themeMode === key}
                  mode={value.background.primary}
                  title={key}
                >
                  {themeMode === key && (
                    <StyledSelected>
                      <CheckIcon />
                    </StyledSelected>
                  )}
                </StyledThemeItem>
              ))}
            </StyledThemesList>
          </StyledItemContent>
        </StyledOptionItem>
      </StyledAppearanceContent>
    </StyledAppearance>
  );
};

export default Appearance;


const StyledAppearance = styled.div`
  width: 100%;
`;

// const StyledHeading = styled.div`
//   width: 100%;
//   padding-bottom: 5rem;
//   h3 {
//     font-weight: 500;
//     font-size: var(--text-xxl);
//     line-height: 1;
//     color: ${({ theme }) => theme.text.primary};
//   }
// `;

const StyledAppearanceContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem;
   @media (max-width: 700px) {
    padding: 2rem;
  }
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
  width: 40rem;
  display: flex;
  gap: 1.5rem;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const StyledThemesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1rem;
  @media (max-width: 700px) {
      justify-content: center;
  gap: 1rem;

    }
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
  border: ${({ selected }) => (selected ? "3px" : "1px")} solid
    ${({ selected }) => (selected ? "var(--blue)" : ({ theme }) => theme.border.primary)};
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
