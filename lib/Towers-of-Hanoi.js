'use strict';

function towersOfHanoi(n) {
  if (typeof n !== 'number') {
    return undefined;
  }
  if (n < 1) {
    return undefined;
  }

  //Represent pattern for piece moves 
  //e.g, 121312141213121
  let arrOfPieces = [n];
  let valueToInsert = n - 1;
  //Decrement value to be inserted by one each time. 
  //Splice this value in at every other position
  while (valueToInsert) {
    for (let j = 0; j < (arrOfPieces.length + 1); j += 2) {
      arrOfPieces.splice(j, 0, valueToInsert);
    }
    valueToInsert = valueToInsert - 1;
  }

  //If n is odd, then increment odd pieces by 2 positions, even pieces by 1
  //If n is even, vise versa
  var incrementOdd, incrementEven;
  if (n % 2 === 1) {
    incrementOdd = 2;
    incrementEven = 1;
  }
  if (n % 2 === 0) {
    incrementOdd = 1;
    incrementEven = 2;
  }

  //Setup arrays to hold starting and ending positions for each piece move
  let start = [];
  let end = [];
  //For each time a piece is moved, loop back in the array prior to that position to determine how many times it has been moved before. Essentially use this to count which position it should be in (since they all start at one, their position corresponds to the number of times they've been moved (2 positions depending on even/odd n)). Could have looped backwards in the array and found last position and then added 1 or 2 to  that.

  for (let i = 0; i < arrOfPieces.length; i++) {
    let seen = 1;
    //Calculate position
    for (let j = 0; j < i; j++) {
      if (arrOfPieces[j] === arrOfPieces[i]) {
        if (arrOfPieces[i] % 2 === 1) {
          seen += incrementOdd;
        }
        if (arrOfPieces[i] % 2 === 0) {
          seen += incrementEven;
        }
      }
    }
    //push this counter result into the start array for each move
    start.push(seen);
    //end array value is simply this counter plus the pre-determined increment
    if (arrOfPieces[i] % 2 === 1) {
      end.push(seen += incrementOdd);
    }
    if (arrOfPieces[i] % 2 === 0) {
      end.push(seen += incrementEven);
    }
  }

  //Start to convert the positions back to letter notation. First, subtract 3 until back to 1,2,3 notation. 
  for (let i = 0; i < start.length; i++) {
    while (start[i] > 3) {
      start[i] = start[i] - 3;
    }
    while (end[i] > 3) {
      end[i] = end[i] - 3;
    }
  }

  //Next, correlate 1 w/ A, 2 w/B, 3 w/C
  for (let i = 0; i < start.length; i++) {
    if (start[i] === 1) {
      start[i] = 'A';
    }
    if (start[i] === 2) {
      start[i] = 'B';
    }
    if (start[i] === 3) {
      start[i] = 'C';
    }
    if (end[i] === 1) {
      end[i] = 'A';
    }
    if (end[i] === 2) {
      end[i] = 'B';
    }
    if (end[i] === 3) {
      end[i] = 'C';
    }
  }

  //Loop through the three arrays, insert values into answer string using template literal, push into array. 
  let arrOfAnswers = [];
  for (let i = 0; i < start.length; i++) {
    arrOfAnswers.push(`Disk ${arrOfPieces[i]} moved from ${start[i]} to ${end[i]}`);
  }

  return arrOfAnswers.join(`\n`);

}

module.exports = towersOfHanoi;