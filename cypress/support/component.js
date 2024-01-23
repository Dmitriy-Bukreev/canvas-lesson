import { addMatchImageSnapshotCommand } from '@simonsmith/cypress-image-snapshot/command';
import { mount } from '../../utils/mount';

Cypress.Commands.add('mount', mount);
Cypress.Screenshot.defaults({
  capture: 'viewport',
});

addMatchImageSnapshotCommand({
  comparisonMethod: 'pixelmatch',
  failureThreshold: 0.5,
});
