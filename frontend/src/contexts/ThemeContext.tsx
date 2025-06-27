import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import {
  type ThemeMode,
  type Theme,
  type ThemeContextType,
} from "@/types/Theme";
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

const themes: Record<ThemeMode, Theme> = {
  "dark": DarkTheme,
  "light": LightTheme,
  "clean-light": CleanLightTheme,
  "minimal-white": MinimalWhiteTheme,
  "modern-sky": ModernSkyTheme,
  "soft-blush": SoftBlushTheme,
  "clean-dark": CleanDarkTheme,
  "modern-charcoal": ModernCharcoalTheme,
  "neo-dark": NeoDarkTheme,
  "glass-night": GlassNightTheme,
};


const validThemeModes = Object.keys(themes) as ThemeMode[];

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeMode;
    if (savedTheme && validThemeModes.includes(savedTheme)) {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "glass-night"
      : "minimal-white";
  });

  const theme = themes[themeMode] || DarkTheme;

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const switchTheme = (updatedTheme: ThemeMode) => {
    if (validThemeModes.includes(updatedTheme)) {
      setThemeMode(updatedTheme);
    } else {
      console.warn(`Invalid theme: ${updatedTheme}`);
    }
  };

  const themeContextValue: ThemeContextType = {
    theme,
    themeMode,
    switchTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
