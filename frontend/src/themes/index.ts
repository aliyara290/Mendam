import { type Theme } from "@/types/Theme";

export const DarkTheme: Theme = {
  mode: "dark",
  background: {
    primary: "#121214",
    secondary: "#1a1a1e",
    thirdly: "#222327",
    message: "#4e3e63",
  },
  text: {
    primary: "#efeff0",
    secondary: "#d4d4d9",
    thirdly: "#b6b6b6",
    placeholder: "#6b6b6b",
  },
  border: {
    primary: "#1a1a1e",
    secondary: "#2f3035",
  },
  buttons: {
    primary: "#7515f5",
    secondary: "#161619",
    danger: "#E06363",
  },
  status: {
    success: "#43a25a",
    info: "#f2c100",
    danger: "#e06363",
  },
  shadow: {
    primary: "#00000016",
    secondary: "#00000032",
  },
};
export const LightTheme: Theme = {
  mode: "light",
  background: {
    primary: "#ffffff",       // main background
    secondary: "#f7f7f8",     // sidebar / cards
    thirdly: "#ececf1",       // sub-panels / dividers
    message: "#e3e8ff",       // incoming message background
  },
  text: {
    primary: "#1c1c1e",       // main text
    secondary: "#3c3c43",     // less emphasized text
    thirdly: "#5e5e65",       // captions / metadata
    placeholder: "#a1a1aa",   // input placeholders
  },
  border: {
    primary: "#dcdce0",       // input / card borders
    secondary: "#e5e5ea",     // subtle separators
  },
  buttons: {
    primary: "#7515f5",       // consistent with dark theme
    secondary: "#f1f1f5",     // soft neutral
    danger: "#e63c3c",        // strong red
  },
  status: {
    success: "#30b170",       // green success
    info: "#f6c343",          // yellow info
    danger: "#e63c3c",        // error red
  },
  shadow: {
    primary: "#0000000d",     // light shadow (6%)
    secondary: "#0000001a",   // slightly deeper (10%)
  },
};
