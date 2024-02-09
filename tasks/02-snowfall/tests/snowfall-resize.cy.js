/// <reference types="Cypress" />
import Snowfall from '../snow-lib/snowfall';

function getElement() {
  const div = document.createElement('div');
  div.className = 'testContainer';
  const canvas = new Snowfall(div);
  return div;
}

function assertDimensions(el, width, height) {
  cy.get(el).invoke('attr', 'width').should('eq', width);
  cy.get(el).invoke('attr', 'height').should('eq', height);
}

describe('Snowfall component resizing capability', () => {
  it('Window resize test', () => {
    cy.mount(getElement());
    assertDimensions('canvas', '250', '250');
    cy.viewport(600, 200);
    assertDimensions('canvas', '300', '100');
  });

  it('Container resize test', () => {
    cy.mount(getElement());
    cy.get('.testContainer')
      .invoke('css', 'width', '100px')
      .invoke('css', 'height', '100px');
    assertDimensions('canvas', '100', '100');
  });
});
