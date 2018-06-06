'use strict';

const AP = function largestProduct(arr) {
  let largest = 0;

  let radius = 1; //in case you want to hit a wider area;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      for (var k = i - radius; k <= i + radius; k++) {
        if (arr[k]) {
          for (var l = j - radius; l <= j + radius; l++) {
            if (arr[k][l] && !(i === k && j === l)) {
              let product = arr[i][j] * arr[k][l];
              if (product > largest) {
                largest = product;
              }
            }
          }
        }
      }
    }
  }

  return largest;
};

module.exports = AP;