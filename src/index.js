module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const closeBrackets = {};
  const stack = [];
  bracketsConfig.forEach(el => {
    openBrackets.push(el[0]);
    closeBrackets[el[1]] = el[0];
  });
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
      if (currentSymbol === closeBrackets[currentSymbol] && closeBrackets[currentSymbol] === topElement) {
        stack.pop();
        stack.pop();
      }
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (closeBrackets[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
