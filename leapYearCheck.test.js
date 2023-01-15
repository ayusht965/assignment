const file = require('./leapYearCheck');
const normal_func = file.leapYearCheck;
const arrow_func = file.leapYearCheckA;

test('testing for if a year is a leap year or not', () => {
  expect(normal_func(2000)).toBe('true');
});

test('testing for if a year is a leap year or not', () => {
  expect(arrow_func(1898)).toBe('false');
});
