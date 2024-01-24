import { getCanvasWithAxis } from '../chart';

describe(
  'Axis',
  {
    viewportHeight: 600,
    viewportWidth: 600,
  },
  () => {
    const tests = [
      {
        name: '0 is on the left',
        options: { from: 0, to: 5 },
      },
      {
        name: '0 is on the right',
        options: { from: -5, to: 0 },
      },
      {
        name: '0 is centered',
        options: { from: -5, to: 5 },
      },
      {
        name: 'negatives only',
        options: { from: -10, to: -3 },
      },
      {
        name: 'positives only',
        options: { from: 3, to: 10 },
      },
      {
        name: 'labels are mirrored',
        options: { from: -10, to: 10, mirroredLabelLocation: true },
      },
    ];

    ['X', 'Y'].forEach((axisType) => {
      tests.forEach((test) => {
        it(`Axis ${axisType}: ${test.name}`, () => {
          cy.mount(getCanvasWithAxis(axisType, test.options));
          cy.matchImageSnapshot();
        });
      });
    });
  },
);
