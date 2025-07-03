import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { qrcode } from "vite-plugin-qrcode";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), qrcode()],
  base: "./",
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@app": path.resolve(__dirname, "./src/components/app"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
});
