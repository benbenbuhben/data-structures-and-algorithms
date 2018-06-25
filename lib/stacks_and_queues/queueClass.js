'use strict';

class Queue {
  
  constructor() {
    this.queue = new Array();
    this.length = 0;
  }

  enqueue(value) {
    let i = this.queue.length;
    this.queue[i] = value;
    this.length++;
    return this;
  }

  dequeue() {
    if(!this.queue.length) {
      throw 'Queue is empty';
    }
    let returned = this.queue[0];
    this.queue.splice(0,1);
    this.length--;
    
    return returned;
  }
  serialize() {
    return JSON.stringify(this.queue);
  }

  deserialize(value) {
    let queue = JSON.parse(value);
    queue.forEach(el => {
      this.enqueue(el);
    });
    return this;
  }
}

module.exports = Queue;