'use strict';

class Animal {
  constructor(type) {
    this.type = type;
  }
}

class AnimalShelter {
  constructor() {
    this.queue = new Array();
  }

  enqueue(animal) {
    if (!(animal === 'dog' || animal === 'cat')) {
      return 'not allowed';
    } else {
      let length = this.queue.length;
      this.queue[length] = new Animal(animal);
    }
  }


  dequeue(pref) {
    let first = this.queue[0];
    let index = 0;
    if (pref) {
      while (this.queue[index].type !== pref && index < this.queue.length) {
        index++;
        first = this.queue[index];
      }
    }

    //The following block re-writes splice for removing a single value from an array
    let newArr = [];
    let newArrIndex = 0;
    for (let i = 0; i < this.queue.length; i++) {
      if (i !== index) {
        newArr[newArrIndex] = this.queue[i];
        newArrIndex++;
      }
    }

    this.queue = newArr;
    return first;
  }
}

// let test = new AnimalShelter();
// let test2 = test.enqueue('monkey')
// console.log(test2);





module.exports = AnimalShelter;