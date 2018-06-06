'use strict';

function multiBracketValidation(input) {

  let arr = input.split('');
  let opening = ['(', '{', '['];
  let closing = [')', '}', ']'];
  let openingStack = [];
  for (let i = 0; i < arr.length; i++) {
    if (opening.includes(arr[i])) {
      openingStack.push(arr[i]);
    }
    if (closing.includes(arr[i])) {
      let index = closing.indexOf(arr[i]);
      if (openingStack[openingStack.length - 1] !== opening[index]) {
        return false;
      } else {
        openingStack.pop();
      }
    }
  }
  return true;
}

module.exports = multiBracketValidation;