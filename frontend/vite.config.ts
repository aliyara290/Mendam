import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {qrcode} from 'vite-plugin-qrcode'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), qrcode()],
  server: {
    port: 3000
  },
   resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
})
