'use strict';

const AAP = require('../../../lib/array_data_structures/array_adjacent_product.js');

describe('Array Adjacent Product', () => {

  it('largestProduct(arr) finds the largest product of adjacent values', () => {
    let test = AAP([
      [2,5,9],
      [4,1,1],
      [0,8,3],
      [5,5,1]]);
    expect( test ).toEqual(45);
  });

  it('largestProduct(arr) returns a number', () => {
    let test = AAP([
      [2,5,9],
      [4,1,1],
      [0,8,3],
      [5,5,1]]);
    expect( typeof(test) ).toEqual( 'number' );
  });

  it('largestProduct(arr) handles arrays of varying sizes', () => {
    let test = AAP([
      [2,5,9,4],
      [4,1,1,7,3,4],
      [0,8],
      [9,5,1]]);
    expect( test ).toEqual( 72 );
  });

});