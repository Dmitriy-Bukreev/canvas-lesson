import { defineConfig } from 'cypress';
import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin.js';

export default defineConfig({
  component: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--window-size=1280,720');
        }
        return launchOptions;
      });
      addMatchImageSnapshotPlugin(on);
    },
    devServer: {
      bundler: 'vite',
      framework: '',
    },
  },
});
