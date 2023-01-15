function largestString(arr) {
  let len = Number.MIN_SAFE_INTEGER;
  ans = '';
  arr.forEach(function (i) {
    len = Math.max(len, i.length);
    ans = len == i.length ? i : ans;
  });
  return ans;
}

arr = ['we', 'love', 'code', 'academy'];
console.log(largestString(arr));

const largestStringA = (arr) => {
  let len = Number.MIN_SAFE_INTEGER;
  ans = '';
  arr.forEach((i) => {
    len = Math.max(len, i.length);
    ans = len == i.length ? i : ans;
  });
  return ans;
};
arr = ['apple', 'peach', 'orange'];
console.log(largestStringA(arr));

module.exports = { largestString, largestStringA };
