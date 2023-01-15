function incrementByOne(str) {
  let ans = '';
  for (let i of str) {
    ans +=
      i == 'Z'
        ? i == 'A'
        : i == 'z'
        ? 'a'
        : String.fromCharCode(i.charCodeAt(0) + 1);
  }
  return ans;
}

console.log(incrementByOne('lazyinterns'));

const incrementByOneA = (str) => {
  let ans = '';
  for (let i of str) {
    ans +=
      i == 'Z'
        ? i == 'A'
        : i == 'z'
        ? 'a'
        : String.fromCharCode(i.charCodeAt(0) + 1);
  }
  return ans;
};
console.log(incrementByOne('codeacademy'));

module.exports = {
  incrementByOne,
  incrementByOneA,
};
