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

  insertBefore(value, newVal) {

    let child = null;
    let parent = null;
    let current = this.head;

    while (current && current.value !== value) {
      parent = current;
      child = current.next;
      current = current.next;
    }

    if (current) {
      let newParent = new Node(newVal);
      newParent.next = child;
      parent.next = newParent;
    }

    return this;
  }

  insertAfter(value, newVal) {
    let parent = null;
    let current = this.head;

    while (current && current.value !== value) {
      parent = current;
      current = current.next;
    }

    if (current) {
      let child = new Node(newVal);
      child.next = current.next;
      current.next = child;
    }

    return this;
  }

}

module.exports = {Node, LinkedList};

// let test = new LinkedList();
// test.append(4);
// test.append(5);
// test.append(6);
// test.append(7);
// test.prepend(1);
// test.insertBefore(5, 3);

// console.log(test.head.next);