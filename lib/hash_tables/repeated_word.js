'use strict';

const HashTable = require('./hashTableClass.js');
//const util = require('util');

function repeatedWord(str) {
  let myHash = new HashTable(str.length);
  let currWord = '';
  for (let i = 0; i <= str.length; i++) {
    
   
    if (str.charCodeAt(i) === 32 || i === str.length) {
     
      let currHash = myHash.hash(currWord);
      
      if (myHash.map[currHash] !== undefined) {
        return currWord;
      }
      else {
        myHash.set(currWord);
        currWord = '';
      }
    }
    else{
      let currLetter = str[i];
      currWord = currWord + currLetter;
    }
  }
  return 'No repeats';
}


module.exports = repeatedWord;