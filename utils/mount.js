/* eslint-disable import/prefer-default-export */
import { getContainerEl, setupHooks } from '@cypress/mount-utils';

let dispose;

function cleanup() {
  dispose?.remove();
}

export function mount(component) {
  // Retrieve root DOM element that Cypress has prepared for this test
  const root = getContainerEl();
  root.append(component);
  dispose = component;
  Cypress.log({
    name: 'mount',
    message: 'Mounted component',
  });
}

// Cleanup between each test
setupHooks(cleanup);
