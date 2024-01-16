import { addMatchImageSnapshotCommand } from '@simonsmith/cypress-image-snapshot/command';

Cypress.Screenshot.defaults({
  capture: 'viewport',
});

// can also add any default options to be used
// by all instances of `matchImageSnapshot`
addMatchImageSnapshotCommand({
  comparisonMethod: 'ssim',
  failureThreshold: 0.5,
});
