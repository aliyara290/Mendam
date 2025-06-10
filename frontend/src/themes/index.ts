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
  },
  border: {
    primary: "#1a1a1e",
    secondary: "#414141",
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
    primary: "#f3f3f4",
    secondary: "#fbfbfb",
    thirdly: "#ffffff",
    message: "#4e3e63",
  },
  text: {
    primary: "#36373c",
    secondary: "#94959c",
  },
  border: {
    primary: "#d3d4d7",
    secondary: "#dfdfe1",
  },
  buttons: {
    primary: "#7515f5",
    secondary: "#161619",
    danger: "#e06363",
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
