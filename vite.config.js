import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: process.env.PORT || 3000
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  base: '/' // Importante para assets
});