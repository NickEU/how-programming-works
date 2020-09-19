'use strict';

const { hello } = require('./3-hello');

test('hello function has to use console.log!', () => {
  expect(hello.toString()).toMatch(/.*console.log.*/);
});
