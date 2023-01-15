const file = require('./largestString');
const normal_func = file.largestString;
const arrow_func = file.largestStringA;

test('test for finding the largest string', () => {
  expect(normal_func(['we', 'love', 'code', 'academy'])).toBe('academy');
});

test('test for finding the largest string', () => {
  expect(arrow_func(['apple', 'peach', 'orange'])).toBe('orange');
});
