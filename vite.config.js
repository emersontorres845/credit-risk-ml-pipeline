// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: process.env.PORT || 3000,
    host: true // necessário para --host funcionar no Railway
  },
  preview: {
    port: parseInt(process.env.PORT) || 8080,
    host: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
