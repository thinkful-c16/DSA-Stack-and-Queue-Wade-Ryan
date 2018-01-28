'use strict';

const Stack = require('./stack.js');

function parenMatch(exp) {

  const open = '(';
  const closed = ')';
  const openPositions = new Stack();
  const parens = new Stack();
  let closedPosition;

  // check to see if expression is empty, if so return message

  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === open) {
      parens.push(exp[i]);
      openPositions.push(i + 1);
    }
    else if (exp[i] === closed) {
      if (parens.pop() !== open) {
        closedPosition = i + 1;
        return new Error(`ERROR: Incorrect closed parenthesis at position ${closedPosition} in expression `);
      }
      else {
        openPositions.pop();
      }
    }
  }
  if (parens.pop() === open) {
    return new Error(`ERROR: Open parenthesis at position ${openPositions.pop()} has no closing parenthesis in expression`);
  }

  console.log('Success! No incorrect parens found in expression');
  return true;
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

console.log('this should be true:', parenMatch(correct));

console.log('this should be false:', parenMatch(incorrectClosed));

console.log('this should be false:', parenMatch(incorrectOpen));

console.log('this should be true:', parenMatch(correctTwo));