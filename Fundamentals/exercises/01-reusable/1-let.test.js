'use strict';

const { name } = require('./1-let');

test('Name has to be a string', () => {
  expect(typeof name).toBe('string');
});

test('Name has to be between 3 and 40 chars', () => {
  expect(name.length).toBeGreaterThanOrEqual(3) &&
  expect(name.length).toBeLessThanOrEqual(40);
});
