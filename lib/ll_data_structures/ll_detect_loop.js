'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  append(value) {

    let node = new Node(value);

    // This happens if the list is empty
    if (!this.head) {
      this.head = node;
      return this;
    }

    // If we have stuff, need add to end
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    //
    return this;

  }

  //This will take the last node and make it's next be the nth node in the list.
  loopTo(n) {
    //First, find the node where it loops back to
    let currentNode = this.head;
    let index = 0;
    while (index !== n) {
      currentNode = currentNode.next;
      index++;
    }
    //Store this node
    let nodeToLoopTo = currentNode;

    //Now, reset current node and then find the end of the list.
    currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    //Current node's next should now be null. Assign it to the nodeToLoopTo.
    currentNode.next = nodeToLoopTo;
    return this;
  }

  hasLoop() {
    let current = this.head;
    current.index = 0;

    while (current.next) {
      let thisIndex = current.index;
      if (current.next.index) {
        return true;
      }
      current = current.next;
      current.index = thisIndex + 1;
    }
    return false;
  }

}

module.exports = LinkedList;