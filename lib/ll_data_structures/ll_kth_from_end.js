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

// let test = new LinkedList();
// test.append(1);
// test.append(3);
// test.append(8);
// test.append(2);


// console.log(test.kth_from_end(0));

