'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  peek() {
    if (this.top === null) {
      return console.log('The stack is empty.');
    }
    return console.log(this.top.data);
  }

  display() {
    if (this.top === null) {
      return console.log('The stack is empty.');
    }
    let node = this.top;
    while (node.next !== null) {
      console.log(node.data);
      node = node.next;
    }
    console.log(node.data);
  }

  remove(data) {
    if (this.top === null) {
      return console.log('The stack is empty.');
    }
    while (this.top.data !== data) {
      this.pop();
    }
    this.pop();
    this.display();
  }
}

function main() {
  const starTrek = new Stack;
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  starTrek.display();
  starTrek.remove('McCoy');
}

main();