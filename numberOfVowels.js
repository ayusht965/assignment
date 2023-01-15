function numberOfVowels(st) {
  let count = 0;
  let i = st.length;
  st = st.toLowerCase();
  const vow = 'aeiou';
  while (i--) {
    if (vow.includes(st.charAt(i))) count += 1;
  }

  return count;
}

console.log(numberOfVowels('codeacademy'));

const numberOfVowelsA = (st) => {
  let count = 0;
  let i = st.length;
  st = st.toLowerCase();
  const vow = 'aeiou';
  while (i--) {
    if (vow.includes(st.charAt(i))) count += 1;
  }

  return count;
};

console.log(numberOfVowelsA('Ayush tyagi'));

module.exports = { numberOfVowels, numberOfVowelsA };
