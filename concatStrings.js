function concatStrings(arr) {
  const s1 = arr[0].substr(1, arr[0].length - 1);
  const s2 = arr[1].substr(1, arr[1].length - 1);
  return s1.concat(s2);
}

console.log(concatStrings(['code', 'academy']));

const concatStringsA = (arr) => {
  return arr[0]
    .substr(1, arr[0].length - 1)
    .concat(arr[1].substr(1, arr[1].length - 1));
};
console.log(concatStringsA(['ayush', 'tyagi']));

module.exports = {
  concatStrings,
  concatStringsA,
};
