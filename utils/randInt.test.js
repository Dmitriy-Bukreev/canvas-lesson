import { vi, describe, expect, test, beforeAll, afterAll } from 'vitest';

import randInt from './randInt';

describe('randInt', () => {
  const fakeRandom = vi.fn();
  const originalRandom = Math.random;

  beforeAll(() => {
    Math.random = fakeRandom;
  });

  afterAll(() => {
    Math.random = originalRandom;
  });

  test('should return correct minimum value', () => {
    fakeRandom.mockReturnValueOnce(0);
    expect(randInt(-5, 5)).toBe(-5);
  });

  test('should return correct maximum value', () => {
    fakeRandom.mockReturnValueOnce(0.99);
    expect(randInt(-5, 5)).toBe(5);
  });

  test('should return middle value', () => {
    fakeRandom.mockReturnValueOnce(0.5);
    expect(randInt(-5, 5)).toBe(0);
  });
});
