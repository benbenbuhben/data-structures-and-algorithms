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
    let selectedAnimal = this.queue[0];
    let index = 0;
    if (pref) {
      for(let i = 0; i < this.queue.length; i++){
        if(this.queue[index].type === pref){
          selectedAnimal = this.queue[index];
          break;
        }
      }
      // while (this.queue[index].type !== pref && index < this.queue.length) {
      //   index++;
      //   selectedAnimal = this.queue[index];
      // }
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
    return selectedAnimal;
  }
}

// let test = new AnimalShelter();
// let test2 = test.enqueue('monkey')
// console.log(test2);





module.exports = AnimalShelter;