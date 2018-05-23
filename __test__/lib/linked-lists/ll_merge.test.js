'use strict';

let LinkedList = require('../../../lib/ll_data_structures/ll_class.js');
const mergeList = require('../../../lib/ll_data_structures/ll_merge.js');

describe('Merge Lists', () => {

  it('mergeList() returns a linked list, which is in the form of a Javascript object.' , () => {
    let input1 = new LinkedList();
    input1.append(1);
    input1.append(3);
    input1.append(5);
    input1.append(7);

    let input2 = new LinkedList();
    input2.append(2);
    input2.append(4);
    input2.append(6);
    input2.append(8);

    expect(typeof mergeList(input1, input2)).toEqual('object');
  });

  it('mergeList() returns a list with nodes corresponding to the 2 input lists\' nodes interleaved' , () => {
    let input1 = new LinkedList();
    input1.append(1);
    input1.append(3);
    input1.append(5);
    input1.append(7);

    let input2 = new LinkedList();
    input2.append(2);
    input2.append(4);
    input2.append(6);
    input2.append(8);

    expect(mergeList(input1, input2).head.value).toEqual(1);
    expect(mergeList(input1, input2).head.next.value).toEqual(2);
    expect(mergeList(input1, input2).head.next.next.value).toEqual(3);
    expect(mergeList(input1, input2).head.next.next.next.value).toEqual(4);
    expect(mergeList(input1, input2).head.next.next.next.next.value).toEqual(5);
    expect(mergeList(input1, input2).head.next.next.next.next.next.value).toEqual(6);
    expect(mergeList(input1, input2).head.next.next.next.next.next.next.value).toEqual(7);
    expect(mergeList(input1, input2).head.next.next.next.next.next.next.next.value).toEqual(8);
    expect(mergeList(input1, input2).head.next.next.next.next.next.next.next.next).toEqual(null);
  });

  it('mergeList() works with lists of differing lengths' , () => {
    let input1 = new LinkedList();
    input1.append(1);
    input1.append(3);
    
    
    let input2 = new LinkedList();
    input2.append(5);
    input2.append(9);
    input2.append(4);

    expect(mergeList(input1, input2).head.value).toEqual(1);
    expect(mergeList(input1, input2).head.next.value).toEqual(5);
    expect(mergeList(input1, input2).head.next.next.value).toEqual(3);
    expect(mergeList(input1, input2).head.next.next.next.value).toEqual(9);
    expect(mergeList(input1, input2).head.next.next.next.next.value).toEqual(4);
    expect(mergeList(input1, input2).head.next.next.next.next.next).toEqual(null);
  });


});