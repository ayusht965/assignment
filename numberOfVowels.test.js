const file = require('./numberOfVowels');
const normal_func = file.numberOfVowels;
const arrow_func = file.numberOfVowelsA;

test('testing for number of vowels in a string', () => {
  expect(normal_func('Ayush tyagi')).toBe(4);
});
test('testing for number of vowels in a string', () => {
  expect(normal_func('codeacademy ')).toBe(5);
});
