import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // SEO Performance Optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
      },
    },
    // Critical for SEO - smaller chunks
    chunkSizeWarningLimit: 1000,
    // Enable source maps for debugging
    sourcemap: false,
    // Optimize assets
    assetsInlineLimit: 4096,
  },
  // SEO-critical server config
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  // Preload critical resources
  experimental: {
    renderBuiltUrl(filename) {
      return `/${filename}`;
    },
  },
});
