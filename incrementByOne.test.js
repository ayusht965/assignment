const file = require('./incrementByOne');
const normal_func = file.incrementByOne;
const arrow_func = file.incrementByOneA;

test('testing if each char of string is incremented by one', () => {
  expect(normal_func('codeacademy')).toBe('dpefbdbefnz');
});
test('testing if each char of string is incremented by one', () => {
  expect(arrow_func('lazyinterns')).toBe('mbazjoufsot');
});
