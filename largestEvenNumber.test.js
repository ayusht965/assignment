const file = require('./largestEvenNumber');
const normal_func = file.largestEven;
const arrow_func = file.largestEvenA;

test('testing normal function for find the largest even number', () => {
  expect(normal_func([1, -4, 3, -9, -6])).toBe(-4);
});

test('testing arrow function for find the largest even number', () => {
  expect(arrow_func([1, -4, 3, -9, -6])).toBe(-4);
});
