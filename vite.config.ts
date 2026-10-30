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
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          dentalImplants: path.resolve(__dirname, 'dental-implants.html'),
          invisibleOrthodontics: path.resolve(__dirname, 'invisible-orthodontics.html'),
          teethWhitening: path.resolve(__dirname, 'teeth-whitening.html'),
          restorativeDentistry: path.resolve(__dirname, 'restorative-dentistry.html'),
          periodontics: path.resolve(__dirname, 'periodontics.html'),
          hygienePrevention: path.resolve(__dirname, 'hygiene-prevention.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
