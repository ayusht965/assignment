function largestEven(Arr) {
  Arr.sort(function (a, b) {
    return a - b;
  });
  let ans = Number.MIN_SAFE_INTEGER;
  Arr.forEach((i) => {
    if (i % 2 == 0) ans = i;
  });
  return ans == Number.MIN_SAFE_INTEGER ? -1 : ans;
}

let arr = [10, 2, 5, 6, 7, 1, 3, 4];
console.log(largestEven(arr));

const largestEvenA = (Arr_a) => {
  let ans = Number.MIN_SAFE_INTEGER;
  Arr_a.sort((a, b) => {
    return a - b;
  });
  Arr_a.forEach((i) => {
    if (i % 2 == 0) ans = i;
  });
  return ans == Number.MIN_SAFE_INTEGER ? -1 : ans;
};
console.log(largestEvenA(arr));

module.exports = { largestEven, largestEvenA };
