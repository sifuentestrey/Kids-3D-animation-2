import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Relative base so the built assets resolve whether the app is served from
  // a domain root (Vercel) or a project subpath (GitHub Pages).
  base: './',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
