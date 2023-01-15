const file = require('./concatStrings');
const normal_func = file.concatStrings;
const arrow_func = file.concatStringsA;

test('test for concatinating two stings without the first char of both', () => {
  expect(normal_func(['ayush', 'tyagi'])).toBe('yushyagi');
});

test('test for concatinating two stings without the first char of both', () => {
  expect(normal_func(['code', 'academy'])).toBe('odecademy');
});
