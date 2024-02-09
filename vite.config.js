import { defineConfig } from 'vite';
import { resolve } from 'path';
import eslint from 'vite-plugin-eslint';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

import includeFiles from './utils/include-files';

export default defineConfig({
  publicDir: 'public',
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        root: resolve(__dirname, 'index.html'),
        ...includeFiles(__dirname, 'tasks/01-line-chart/*.html'),
      },
    },
  },
  plugins: [
    eslint({
      cache: false,
      fix: true,
    }),
    ViteMinifyPlugin({}),
  ],
  resolve: {
    alias: {
      '@utils': resolve(__dirname, 'utils'),
    },
  },
});
