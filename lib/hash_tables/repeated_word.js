'use strict';

const HashTable = require('./hashTableClass.js');
//const util = require('util');

function repeatedWord(str) {
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  str = str.replace(/\s{2,}/g," "); 
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
      let currLetter = str[i].toLowerCase();
      currWord = currWord + currLetter;
    }
  }
  return 'No repeats';
}

console.log(repeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'));


module.exports = repeatedWord;