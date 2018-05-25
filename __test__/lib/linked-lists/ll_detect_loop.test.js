'use strict';


const LinkedList = require('../../../lib/ll_data_structures/ll_detect_loop.js');

describe('hasLoop', () => {

  it('hasLoop() works on the LinkedList class' , () => {
    let test = new LinkedList();
    test.append(1);
    test.append(3);
    test.append(2);
    expect(test).toBeInstanceOf(LinkedList);
  });

  it('hasLoop() returns true if the linked list has a loop.' , () => {
   
    let test = new LinkedList();
    test.append(1);
    test.append(7);
    test.append(2);
    test.append(3);
    test.append(5);
    test.loopTo(1);

    expect(test.hasLoop()).toEqual(true);
  });

  it('hasLoop() returns false if the linked list does not have a loop.' , () => {
    let test = new LinkedList();
    test.append(1);
    test.append(3);
    test.append(2);

    expect(test.hasLoop()).toEqual(false);
  });


});