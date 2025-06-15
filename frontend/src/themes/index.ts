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
    primary: "#ffffff",
    secondary: "#f8f9fa",
    thirdly: "#f1f3f4",
    message: "#e8f0fe",
  },
  text: {
    primary: "#1f2937",
    secondary: "#374151",
    thirdly: "#6b7280",
    placeholder: "#9ca3af",
  },
  border: {
    primary: "#e5e7eb",
    secondary: "#d1d5db",
  },
  buttons: {
    primary: "#7515f5",
    secondary: "#f3f4f6",
    danger: "#dc2626",
  },
  status: {
    success: "#16a34a",
    info: "#eab308",
    danger: "#dc2626",
  },
  shadow: {
    primary: "#0000000a",
    secondary: "#0000001a",
  },
};
