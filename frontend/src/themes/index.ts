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
    primary: "#f7f7f8",
    secondary: "#ffffff",
    thirdly: "#ececf1",
    message: "#e3e8ff",
  },
  text: {
    primary: "#1c1c1e",
    secondary: "#3c3c43",
    thirdly: "#5e5e65",
    placeholder: "#a1a1aa",
  },
  border: {
    primary: "#dcdce0",
    secondary: "#e5e5ea",
  },
  buttons: {
    primary: "#7515f5",
    secondary: "#f1f1f5",
    danger: "#e63c3c",
  },
  status: {
    success: "#30b170",
    info: "#f6c343",
    danger: "#e63c3c",
  },
  shadow: {
    primary: "#0000000d",
    secondary: "#0000001a",
  },
};
