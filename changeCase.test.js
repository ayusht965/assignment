const file = require('./changeCase');
const normal_func = file.changeCase;
const arrow_func = file.changeCaseA;

test('testing for change of character from lower to upper case and vise versa', () => {
  expect(normal_func('MeRRy hAD a LITTle lAMp')).toBe(
    'mErrY Had A littLE LamP'
  );
});

test('testing for change of character from lower to upper case and vise versa', () => {
  expect(arrow_func('AyUsH')).toBe('aYuSh');
});
