function changeCase(str) {
  let ans = '';
  str.split('').forEach(function (i) {
    let ch = i.charCodeAt(0);
    ans =
      ch >= 65 && ch <= 90
        ? ans + i.toLowerCase()
        : ch >= 97 && ch <= 122
        ? ans + i.toUpperCase()
        : ans + i;
  });
  return ans;
}

console.log(changeCase('MeRRy hAD a LITTle lAMp'));

const changeCaseA = (str) => {
  let ans = '';
  str.split('').forEach((i) => {
    let ch = i.charCodeAt(0);
    ans =
      ch >= 65 && ch <= 90
        ? ans + i.toLowerCase()
        : ch >= 97 && ch <= 122
        ? ans + i.toUpperCase()
        : ans + i;
  });
  return ans;
};
console.log(changeCaseA('AyUsH'));

module.exports = {
  changeCase,
  changeCaseA,
};
