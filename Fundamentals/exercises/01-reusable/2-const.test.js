'use strict';

const { year } = require('./2-const');

test('Year has to be a number!', () => {
  expect(typeof year).toBe('number');
});

test('Year has to be greater than 1916', () => {
  expect(year).toBeGreaterThan(1916);
});

test('Year has to be less than 2101', () => {
  expect(year).toBeLessThan(2101);
});
