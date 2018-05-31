'use strict';

function towersOfHanoi(n) {
  if(typeof n !=='number'){
    return undefined;
  }
  if(n < 1){
    return undefined;
  }
  let arrOfPieces = [n];
  let valueToInsert = n - 1;
  while (valueToInsert) {
    for (let j = 0; j < (arrOfPieces.length + 1); j += 2) {
      arrOfPieces.splice(j, 0, valueToInsert);
    }
    valueToInsert = valueToInsert - 1;
  }

  var incrementOdd, incrementEven;
  if (n % 2 === 1) {
    incrementOdd = 2;
    incrementEven = 1;
  }
  if (n % 2 === 0) {
    incrementOdd = 1;
    incrementEven = 2;
  }

  let start = [];
  let end = [];
  for (let i = 0; i < arrOfPieces.length; i++) {
    let seen = 1;
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
    start.push(seen);
    if (arrOfPieces[i] % 2 === 1) {
      end.push(seen += incrementOdd);
    }
    if (arrOfPieces[i] % 2 === 0) {
      end.push(seen += incrementEven);
    }
  }

  for (let i = 0; i < start.length; i++) {
    while (start[i] > 3) {
      start[i] = start[i] - 3;
    }
    while (end[i] > 3) {
      end[i] = end[i] - 3;
    }
  }

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

  let arrOfAnswers = [];
  for (let i = 0; i < start.length; i++) {
    arrOfAnswers.push(`Disk ${arrOfPieces[i]} moved from ${start[i]} to ${end[i]}`);
  }
  return arrOfAnswers.join(`\n`);

}

module.exports = towersOfHanoi;