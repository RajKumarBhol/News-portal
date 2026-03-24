import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/news': {
        target: 'https://newsapi.org',
        changeOrigin: true,
        rewrite: (path) => {
          const url = new URL(path, 'http://localhost:5173');
          const category = url.searchParams.get('category') || 'general';
          const apiKey = process.env.VITE_API_KEY;
          return `/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        }
      }
    }
  }
})
