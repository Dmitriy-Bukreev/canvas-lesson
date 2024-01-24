import { getCanvasWithChart } from '../chart';

describe(
  'Chart',
  {
    viewportHeight: 600,
    viewportWidth: 600,
  },
  () => {
    const tests = [
      {
        name: 'Axis X is on top',
        options: {
          axisXSettings: { from: -10, to: 10, mirroredLabelLocation: true },
          axisYSettings: { from: -10, to: 0 },
        },
      },
      {
        name: 'Axis X is not on the edge',
        options: {
          axisXSettings: { from: -10, to: 10, mirroredLabelLocation: true },
          axisYSettings: { from: -10, to: 5 },
        },
      },
      {
        name: 'Axis X is on the bottom',
        options: {
          axisXSettings: { from: -10, to: 10 },
          axisYSettings: { from: 0, to: 10 },
        },
      },
      {
        name: 'Axis Y is on the left',
        options: {
          axisXSettings: { from: 5, to: 10, step: 2 },
          axisYSettings: { from: -10, to: 10 },
        },
      },
      {
        name: 'Axis Y is not on the edge',
        options: {
          axisXSettings: { from: -5, to: 8, mirroredLabelLocation: true },
          axisYSettings: { from: -10, to: 10 },
        },
      },
      {
        name: 'Axis Y is on the right',
        options: {
          axisXSettings: { from: -10, to: -4, step: 2 },
          axisYSettings: { from: -10, to: 10, mirroredLabelLocation: true },
        },
      },
      {
        name: "Axis' are in top right corner",
        options: {
          axisXSettings: { from: -15, to: -7, mirroredLabelLocation: true },
          axisYSettings: { from: -15, to: -3, mirroredLabelLocation: true },
        },
      },
    ];

    tests.forEach((test) => {
      it(`${test.name}`, () => {
        cy.mount(getCanvasWithChart(test.options));
        cy.matchImageSnapshot();
      });
    });
  },
);
