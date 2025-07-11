export type ThemeMode =
  | "dark"
  | "light"
  | "clean-light"
  | "minimal-white"
  | "modern-sky"
  | "soft-blush"
  | "clean-dark"
  | "modern-charcoal"
  | "neo-dark"
  | "glass-night";

export interface Theme {
  mode: ThemeMode;
  background: {
    primary: string;
    secondary: string;
    thirdly: string;
    message: string;
  };
  text: {
    primary: string;
    secondary: string;
    thirdly: string;
    placeholder: string;
  };
  border: {
    primary: string;
    secondary: string;
  };
  buttons: {
    primary: string;
    secondary: string;
    danger: string;
  };
  status: {
    success: string;
    info: string;
    danger: string;
  };
  shadow: {
    primary: string;
    secondary: string;
  };
}

export interface ThemeContextType {
  theme: Theme;
  themeMode: ThemeMode;
  switchTheme: (updatedTheme: ThemeMode) => void;
}
