import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id || !id.includes('node_modules')) return undefined;
            // Match specific heavy packages to dedicated chunks to avoid circular grouping
            if (id.match(/node_modules[\\/]react($|[\\/])/ ) || id.match(/node_modules[\\/]react-dom($|[\\/])/)) return 'vendor_react';
            if (id.match(/node_modules[\\/](recharts|d3)($|[\\/])/)) return 'vendor_charts';
            if (id.match(/node_modules[\\/](lucide-react|motion|@google)($|[\\/])/)) return 'vendor_ui';
            // Let Rollup handle the rest; avoid a catch-all 'vendor' chunk to prevent circular chunking
            return undefined;
          }
        }
      }
    }
  };
});
