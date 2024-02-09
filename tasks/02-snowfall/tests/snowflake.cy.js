/// <reference types="Cypress" />
import Snowflake from '../snow-lib/snowflake';

function getCanvas(callback) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.backgroundColor = 'blue';
  canvas.height = 300;
  canvas.width = 300;
  callback(ctx);
  return canvas;
}

const testName = 'Snowflake';

describe(testName, () => {
  it('Render snowflake', () => {
    let snowflake = null;
    let ctx = null;
    cy.mount(
      getCanvas((context) => {
        ctx = context;
        snowflake = new Snowflake(ctx, 150, 150, 10);
        snowflake.render();
      }),
    );
    cy.matchImageSnapshot(`${testName} 01 -- Before movement`).then(() => {
      snowflake.moveBy(50, 50);
    });
    cy.matchImageSnapshot(`${testName} 02 -- After movement`).then(() => {
      ctx.clearRect(0, 0, 300, 300);
      snowflake.moveBy(50, 50);
    });
    cy.matchImageSnapshot(`${testName} 03 -- After clearing canvas`);
  });
});
