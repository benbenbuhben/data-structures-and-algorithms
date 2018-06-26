'use strict';
//const util = require('util');
// const LinkedList = require('../ll_data_structures/ll_class.js');
const stringHash = require('string-hash');

class HashTable {
  constructor(size){
    this.size = size;
    this.map = new Array(size);
  }

  hash(key){
    // return key.split('').reduce((p,n) => p + n.charCodeAt(0), 0) % this.size;
    return stringHash(key);

  }

  set(key,value=null) {
    // let hash = this.hash(key);
    let hash = this.hash(key);
    

    //use linked list instead of array
    if(!this.map[hash]){this.map[hash]=[];}
    this.map[hash].push({[key]:value});
  }

  get(key) {

  }

  delete(key) {

  }

  update(key, newValue){

  }

  serialize(){

  }

  deserialize(){

  }

}

module.exports = HashTable;