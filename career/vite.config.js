import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Splits third-party dependencies into a separate file
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000000, // Increase limit to suppress warnings
  },
});
