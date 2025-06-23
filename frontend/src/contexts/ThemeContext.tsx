import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  useCallback,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import {
  type ThemeMode,
  type Theme,
  type ThemeContextType,
} from "@/types/Theme";
import { DarkTheme, LightTheme } from "@/themes";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeMode;
    if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const theme = themeMode === "light" ? LightTheme : DarkTheme;

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const switchTheme = (updatedTheme: ThemeMode) => {
    setThemeMode(updatedTheme);
  }

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
