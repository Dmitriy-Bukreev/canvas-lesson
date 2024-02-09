import { resolve } from 'path';
import { defineConfig } from 'vite';
import defaultConfig from './vite.config';

export default defineConfig({
  ...defaultConfig,
  build: {
    outDir: 'lib-dist',
    lib: {
      entry: resolve(__dirname, 'tasks/01-line-chart/chart/index.js'),
      name: 'ChartLib',
      fileName: 'chart-lib',
    },
  },
});
