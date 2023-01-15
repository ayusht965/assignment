const file = require('./sameDigits');
const normal_func = file.sameDigits;
const arrow_func = file.sameDigitsA;

test('testing if digits are same', () => {
  expect(normal_func(121)).toBe('false');
});

test('testing if digits are same', () => {
  expect(arrow_func(111)).toBe('true');
});
