import { getCanvasWithChart } from '../chart';

describe(
  'Plot',
  {
    viewportHeight: 700,
    viewportWidth: 700,
  },

  () => {
    const tests = [
      {
        name: 'Simple line',
        options: {
          axisXSettings: { from: -20, to: 10, step: 5 },
          axisYSettings: { from: -6, to: 10, step: 2 },
        },
        plotOptions: [
          {
            data: [
              { x: -6, y: -6 },
              { x: 10, y: 10 },
            ],
          },
        ],
      },
      {
        name: 'Trigonometry',
        options: {
          axisXSettings: { from: -7, to: 7 },
          axisYSettings: { from: -1.5, to: 1.5, step: 0.5 },
        },
        plotOptions: [
          {
            data: Array.from({ length: 127 }, (_, i) => ({
              x: (i - 62.8) * 0.1,
              y: Math.cos((i - 62.8) * 0.1),
            })),
            lineSettings: { color: 'red', width: 3 },
          },
          {
            data: Array.from({ length: 127 }, (_, i) => ({
              x: (i - 62.8) * 0.1,
              y: Math.sin((i - 62.8) * 0.1),
            })),
            lineSettings: { color: '#00ff00', width: 2 },
          },
        ],
      },
      {
        name: 'Line styles',
        options: {
          axisXSettings: { from: -2, to: 2 },
          axisYSettings: { from: -2, to: 2 },
        },
        plotOptions: [
          {
            data: [
              { x: -2, y: 0 },
              { x: -1, y: 1 },
              { x: 1, y: -1 },
              { x: 2, y: 0 },
            ],
            lineSettings: {
              width: 10,
              join: 'round',
              cap: 'round',
              color: 'rgba(100, 100, 255, 0.5)',
            },
          },
        ],
      },
      {
        name: 'Different size and plot params',
        options: {
          axisXSettings: { from: 0, to: 5, dashLength: 30, labelOffset: 15 },
          axisYSettings: { from: 0, to: 25, dashLength: 20, labelOffset: 10 },
        },
        plotOptions: [
          {
            data: Array.from({ length: 51 }, (_, i) => ({
              x: i * 0.1,
              y: (i * 0.1) ** 2,
            })),
          },
        ],
        size: [550, 300],
      },
    ];

    tests.forEach(({ name, options, plotOptions, size }) => {
      it(`${name}`, () => {
        cy.mount(getCanvasWithChart(options, plotOptions, size));
        cy.matchImageSnapshot();
      });
    });
  },
);
