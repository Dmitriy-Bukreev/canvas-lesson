import { describe, expect, test } from 'vitest';
import generateArray from '@utils';

describe('generateLabels', () => {
  test('should work with single argument', () => {
    expect(generateArray(5)).toStrictEqual([0, 1, 2, 3, 4]);
  });

  test('should work with two arguments', () => {
    expect(generateArray(-2, 2)).toStrictEqual([-2, -1, 0, 1]);
  });

  test('should work with three arguments', () => {
    expect(generateArray(0, 10, 2)).toStrictEqual([0, 2, 4, 6, 8]);
  });

  test('should work with float numbers', () => {
    expect(generateArray(0, 1, 0.25)).toStrictEqual([0, 0.25, 0.5, 0.75]);
  });

  test('should work with negative numbers', () => {
    expect(generateArray(-5, 0)).toStrictEqual([-5, -4, -3, -2, -1]);
  });

  test('should return empty array', () => {
    expect(generateArray(0, -5)).toStrictEqual([]);
  });
});
