import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'public', // Corrected root to point to the 'public' directory
  build: {
    outDir: 'dist',
  },
});
