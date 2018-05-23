'use strict';

let Node = require('./node_class.js');

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

  kth_from_end(k){

    let current = this.head;
    let length = 0;

    while(current){
      length++;
      current=current.next;
    }

    let index = 1;
    current=this.head;

    while(current && index !== length-k){
      index++;
      current=current.next;
    } 
    
    return current? current: 'exception';
  }

}

module.exports = LinkedList;