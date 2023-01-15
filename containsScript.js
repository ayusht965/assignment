function containsScript(str) {
  if (str.length < 6) return 'false';
  let check = str.substr(-6, 6);
  return check == 'Script' ? 'true' : 'false';
}

console.log(containsScript('javaScript'));

const containsScriptA = (str) => {
  if (str.length < 6) return 'false';
  let check = str.substr(-6, 6);
  return check == 'Script' ? 'true' : 'false';
};

console.log(containsScript('java'));

module.exports = { containsScript, containsScriptA };
