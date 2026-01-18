import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Change base to your repository name for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/dpglobals/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 5173,
    open: true,
  },
})
