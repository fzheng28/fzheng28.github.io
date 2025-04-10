import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
  ],
  base: '/',  // Correct setting for a GitHub user page (username.github.io)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
    host: '::',
  },
  build: {
    outDir: 'docs', // Change build output directory to 'docs' for GitHub Pages
  }
}))
