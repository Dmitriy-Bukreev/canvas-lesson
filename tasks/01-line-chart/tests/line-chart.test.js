import { describe, expect, test } from 'vitest';
import Axis from '../chart/axis';

const canvasMock = { getContext: () => {} };

describe('Axis class', () => {
  test('should generate with positive only', () => {
    const axis = new Axis(canvasMock, { from: 0, to: 5, step: 1 });
    expect(axis.labels).toStrictEqual([0, 1, 2, 3, 4, 5]);
    expect(axis.axisStart).toBe(0);
  });

  test('should generate with negatives only', () => {
    const axis = new Axis(canvasMock, { from: -5, to: 0 });
    expect(axis.labels).toStrictEqual([-5, -4, -3, -2, -1, 0]);
    expect(axis.axisStart).toBe(0);
  });

  test('should generate both negatives and positives', () => {
    const axis = new Axis(canvasMock, { from: -2, to: 2, step: 1 });
    expect(axis.labels).toStrictEqual([-2, -1, 0, 1, 2]);
    expect(axis.axisStart).toBe(0);
  });

  test('should be centered around 0', () => {
    const axis = new Axis(canvasMock, { from: -5, to: 2, step: 2 });
    expect(axis.labels).toStrictEqual([-6, -4, -2, 0, 2]);
    expect(axis.axisStart).toBe(0);
  });

  test('should generate positives correctly', () => {
    const axis = new Axis(canvasMock, { from: 3, to: 6 });
    expect(axis.labels).toStrictEqual([3, 4, 5, 6]);
    expect(axis.axisStart).toBe(3);
  });

  test('should generate negatives correctly', () => {
    const axis = new Axis(canvasMock, { from: -5, to: -2 });
    expect(axis.labels).toStrictEqual([-5, -4, -3, -2]);
    expect(axis.axisStart).toBe(-2);
  });

  test('should keep Raul in check', () => {
    const axis = new Axis(canvasMock, { from: -1, to: 0.5, step: 0.5 });
    expect(axis.labels).toStrictEqual([-1, -0.5, 0, 0.5]);
    expect(axis.axisStart).toBe(0);
  });
});
