'use strict';

class KAryNode {
  constructor(value = null) {
    this.value = value;
    this.children = [];
  }

  appendChild(val) {
    // let nodeToAppend = new KAryNode(val);
    this.children.push(val);
  }
}

module.exports = KAryNode; 