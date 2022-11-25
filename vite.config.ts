import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths/dist";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/variables";`
      }
    }
  }
})
