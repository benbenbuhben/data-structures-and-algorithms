'use strict';

const ABS = require('../../../lib/array_data_structures/array_binary_search.js');

describe('Array Binary Search', () => {

  it('binarySearch(arr,key) finds the index where the element at that index matches the search key', () => {
    let test = ABS([1, 2, 5, 8], 5);
    expect( test ).toEqual(2);
  });

  it('binarySearch(arr,key) finds the index where the element at that index matches the search key', () => {
    let test = ABS([1, 10, 11, 23, 500, 12345, 987654, 92387465, 45378613130, 348756938475613984756], 92387465);
    expect( test ).toEqual( 7 );
  });

  it('binarySearch(arr,key) returns -1 if the search key is not found', () => {
    let test = ABS([1, 10, 11, 23, 500, 12345, 987654, 92387465, 45378613130, 348756938475613984756], 2);
    expect( test ).toEqual( -1 );
  });

});