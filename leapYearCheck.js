function leapYearCheck(year) {
  let ans =
    (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 'true' : 'false';
  return ans;
}

console.log(leapYearCheck(2000));

const leapYearCheckA = (year) => {
  return (ans =
    (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 'true' : 'false');
};
console.log(leapYearCheckA(1800));

module.exports = { leapYearCheck, leapYearCheckA };
