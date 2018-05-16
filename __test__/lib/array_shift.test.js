const arrayShift = require('../../array_shift.js');

describe('Shifted Array', () => {

  it('insertShiftedArray() puts the value in the middle index', () => {
    let testArray = arrayShift([1, 3, 2, 4], 7);
    expect( testArray ).toEqual([1, 3, 7, 2, 4]);
  });

  it('insertShiftedArray() puts the value in the middle index', () => {
    let testArray = arrayShift(['one', 'two', 'four', 'five'], 'three');
    expect( testArray ).toEqual(['one', 'two', 'three', 'four', 'five']);
  });

  it('insertShiftedArray() puts the value in the middle index', () => {
    let testArray = arrayShift([4, 'string', {}, []], true);

    expect( testArray ).toEqual([4, 'string', true, {}, []]);
  });

});