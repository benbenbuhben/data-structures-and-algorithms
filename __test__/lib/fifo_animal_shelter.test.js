'use strict';

const AnimalShelter = require('../../lib/fifo_animal_shelter.js');

class Animal {
  constructor(type) {
    this.type = type;
  }
}

describe('enqueue(animal)', () => {

  it('enqueue(animal) creates a new array object', () => {
    let test = new AnimalShelter();
      expect(typeof test.queue).toEqual('object');
  });

  it('enqueue(animal) puts the new animal at the back of the queue (end of array)', () => {
    let test = new AnimalShelter();
    test.enqueue('dog');
    test.enqueue('cat');
    expect(test.queue[1].type).toEqual('cat');
  });

  it(`dequeue(pref) returns the first animal in the queue indicated by pref `, () => {
    let test = new AnimalShelter();
    test.enqueue('dog');
    test.enqueue('cat');
    test.enqueue('dog');
    
    expect(test.dequeue('cat')).toEqual(JSON.parse(`{"type": "cat"}`));
  });

  it(`dequeue() returns the first animal in the queue if no pref is passed in`, () => {
    let test = new AnimalShelter();
    test.enqueue('dog');
    test.enqueue('cat');
    test.enqueue('dog');
    
    expect(test.dequeue()).toEqual(JSON.parse(`{"type": "dog"}`));
  });

  it('dequeue(pref) modifies shortens the queue after the animal is taken out', () => {
    let test = new AnimalShelter();
    test.enqueue('dog');
    test.enqueue('cat');
    test.enqueue('dog');
    test.dequeue();
    
    expect(test.queue.length).toEqual(2);
  });

  it(`enqueue(animal) doesn't allow animals other than cats or dogs`, () => {
    let test = new AnimalShelter();
    
    expect(test.enqueue('monkey')).toEqual('not allowed');
  });

  // it('enqueue(animal)() does...', () => {
  //   let test = //put test here
  //     expect(test).toEqual();
  // });

  // it('enqueue(animal)() does...', () => {
  //   let test = //put test here
  //     expect(test).toEqual();
  // });

});