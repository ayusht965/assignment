const file = require('./containsScript');
const normal_func = file.containsScript;
const arrow_func = file.containsScriptA;

test('checking if string conatains "Script" at the end', () => {
  expect(normal_func('javaScript')).toBe('true');
});

test('checking if string conatains "Script" at the end', () => {
  expect(arrow_func('java')).toBe('false');
});
