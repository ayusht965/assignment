function sameDigits(num) {
  const nums_s = num.toString().split('');
  const n = (num % 10).toString();
  let flag = 0;
  nums_s.forEach(function (i) {
    if (i != n) flag = 1;
  });
  return flag == 0 ? 'true' : 'false';
}
let n = 100;
console.log(sameDigits(n));

//---------

const sameDigitsA = (num) => {
  const nums_s = num.toString().split('');
  const n = (num % 10).toString();
  let flag = 0;
  nums_s.forEach(function (i) {
    if (i != n) flag = 1;
  });
  return flag == 0 ? 'true' : 'false';
};
n = 111;
console.log(sameDigitsA(n));

module.exports = { sameDigits, sameDigitsA };
