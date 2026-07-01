import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    open: true,
    proxy: {
      // All /api requests are proxied to the live backend
      // This avoids CORS issues in development
      '/api': {
        target: 'http://106.51.20.225:28100',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist',
  },
})
