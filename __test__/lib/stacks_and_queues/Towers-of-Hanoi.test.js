'use strict';

const towersOfHanoi = require('../../../lib/stacks_and_queues/Towers-of-Hanoi.js');

describe('towersOfHanoi(n)', () => {

  it('towersOfHanoi() returns the solutions for the puzzle', () => {
    let test = towersOfHanoi(4);
    expect(test).toEqual('Disk 1 moved from A to B\nDisk 2 moved from A to C\nDisk 1 moved from B to C\nDisk 3 moved from A to B\nDisk 1 moved from C to A\nDisk 2 moved from C to B\nDisk 1 moved from A to B\nDisk 4 moved from A to C\nDisk 1 moved from B to C\nDisk 2 moved from B to A\nDisk 1 moved from C to A\nDisk 3 moved from B to C\nDisk 1 moved from A to B\nDisk 2 moved from A to C\nDisk 1 moved from B to C');
  });

  it('towersOfHanoi() does...', () => {
    let test = towersOfHanoi('sdjhbvjhsd');
    expect( test ).toBeUndefined();
  });

  it('towersOfHanoi() does...', () => {
    let test = towersOfHanoi(-1);
    expect( test ).toBeUndefined();
  });

});