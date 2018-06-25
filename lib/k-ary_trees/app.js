'use strict';

const KAryTree = require('./k-aryTreeClass');
const Node = require('./k-aryNodeClass.js');

const util = require('util');


const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

const tree = new KAryTree(one);

one.appendChild(two);
one.appendChild(three);
two.appendChild(four);
two.appendChild(five);
three.appendChild(six);
five.appendChild(seven);
five.appendChild(eight);
six.appendChild(nine);

// console.log(util.inspect(tree, {
//   showHidden: true,
//   depth: null,
//   colors: true,
//   maxArrayLength: null,
// }));

console.log('breadthFirst',tree.breadthFirstTraversal());
console.log('depthFirst',tree.depthFirstTraversal());
