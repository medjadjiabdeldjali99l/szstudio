import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  plugins: [],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        portfolio: resolve(__dirname, 'projets.html'),
        blog: resolve(__dirname, 'mobilier.html'),
        'projet-1': resolve(__dirname, 'portfolio/projet-1.html'),
        'projet-2': resolve(__dirname, 'portfolio/projet-2.html'),
        'projet-3': resolve(__dirname, 'portfolio/projet-3.html'),
        'projet-4': resolve(__dirname, 'portfolio/projet-4.html'),
        'projet-5': resolve(__dirname, 'portfolio/projet-5.html'),
        'projet-6': resolve(__dirname, 'portfolio/projet-6.html'),
        'projet-7': resolve(__dirname, 'portfolio/projet-7.html'),
        'projet-8': resolve(__dirname, 'portfolio/projet-8.html'),
        'projet-9': resolve(__dirname, 'portfolio/projet-9.html'),
      },
    },
  },
});