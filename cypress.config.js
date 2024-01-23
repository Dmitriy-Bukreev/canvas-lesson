import { defineConfig } from 'cypress';
import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin.js';

export default defineConfig({
  component: {
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on);
    },
    devServer: {
      bundler: 'vite',
      framework: '',
    },
  },
});
