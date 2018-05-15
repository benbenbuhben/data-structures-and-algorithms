'use strict';

const shift = function insertShiftArray(arr, val) {
  let middle=(arr.length/2);

  if(arr.length%2){
    middle=(arr.length+1)/2;
  }

  for(let i = arr.length-1; i >= middle; i--){
    arr[i+1]=arr[i];
  }

  arr[middle]=val;

  return arr;
}

module.exports = shift;