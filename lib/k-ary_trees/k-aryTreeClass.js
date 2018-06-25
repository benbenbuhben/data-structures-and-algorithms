'use strict';

const Queue = require('../stacks_and_queues/queueClass.js');
const Stack = require('../stacks_and_queues/stackClass.js');

class KAryTree {

  constructor(root = null) {
    this.root = root;
  }

  breadthFirstTraversal() {
    if(!this.root){
      return null;
    }
    return this.breadthFirstTraversalHelper(this.root);
  }

  breadthFirstTraversalHelper(root){
    let queue = new Queue();
    let answers = [];
    queue.enqueue(root);
    while(queue.length){
      queue.dequeue();
      for(let i = 0; i < root.children.length; i++){
        queue.enqueue(root.children[i]);
      }
      answers.push(root.value);
      root=queue.queue[0];
    }

    return answers;
  }

  depthFirstTraversal() {
    if(!this.root){
      return null;
    }
    return this.depthFirstTraversalHelper(this.root);
  }

  depthFirstTraversalHelper(root){
    let stack = new Stack();
    let answers = [];
    stack.push(root);
    while(stack.length){
      stack.pop();
      for(let i = 0; i < root.children.length; i++){
        stack.push(root.children[i]);
      }
      answers.push(root.value);
      root=stack.stack[0];
    }

    return answers;
  }

}

module.exports = KAryTree;