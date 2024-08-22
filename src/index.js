module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (let char of str) {
    let config = bracketsConfig.find(pair => pair.includes(char));
    if (!config) {
      continue;
    }

    let [open, close] = config;

    if (char === open) {
      if (open === close && stack[stack.length - 1] === open) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      if (stack.length === 0 || stack.pop() !== open) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
