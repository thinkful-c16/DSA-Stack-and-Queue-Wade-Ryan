'use strict';

const Stack = require('./stack.js');

function matchingParens(exp) {

  const stack = new Stack;

  const open = '(';
  const closed = ')';
  let openPositions = new Stack;
  let closedPosition;

  // check to see if expression is empty, if so return message

  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === open) {
      stack.push(exp[i]);
      // openPositions.push(i + 1);
    }
    else if (exp[i] === closed) {
      if (stack.pop() !== open) {
        // closedPosition = i + 1;
        // return console.log(`ERROR: Incorrect closed parenthesis at position ${closedPosition} in expression `);
        return false;
      }
      else {
        openPositions.pop();
      }
    }
  }
  if (stack.pop() === open) {
    return console.log(`ERROR: Open parenthesis at position ${openPosition} has no closing parenthesis in expression`);
  }

}

const correct = '(())';
// true

const incorrectClosed = '())';
// false

const incorrectOpen = '(()';
// false

const correctTwo = '()()';

function matchParens(exp) {

  const parensStack = new Stack();

  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '(') {
      parensStack.push(exp[i]);
      console.log('I found an open parenthesis:', JSON.stringify(parensStack, null, 2));
    }
    else if (exp[i] === ')') {
      if (parensStack.pop() !== '(') {
        console.log('I found a closed paren with no open paren to match');
        return false;
      }
      console.log('I popped a paren', JSON.stringify(parensStack, null, 2));
    }
  }
  if (parensStack.pop() === '(') {
    console.log('I found an open paren with no closed paren to match');
    return false;
  }

  console.log('success, no incorrect parens');
  return true;
}

console.log('this should be true:', matchParens(correct));

// console.log('this should be false:', matchParens(incorrectClosed));

// console.log('this should be false:', matchParens(incorrectOpen));

// console.log('this should be true:', matchParens(correctTwo));