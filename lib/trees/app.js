'use strict';

import BinaryTree from './binary-tree/index.js';
import Node from './node/index.js';
import fizzBuzzTree from './fizzbuzztree.js';
const util = require('util');
var tree1 = require('pretty-tree');

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

const tree = new BinaryTree(one);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;




//console.log(tree.root);
//console.log(str);

// console.log(util.inspect(tree, {
//   showHidden: true,
//   depth: null,
//   colors: true,
// }));
// console.log('preOrder: ', tree.preOrder());
// console.log('postOrder: ', tree.postOrder());
// console.log('inOrder: ', tree.inOrder());
console.log('fizzbuzz ', JSON.stringify(fizzBuzzTree(tree)));
let tree2 = fizzBuzzTree(tree);
console.log('fizzbuzz ', JSON.stringify(fizzBuzzTree(tree2)));
// console.log('fizzbuzz ', util.inspect(tree2, {
//   showHidden: true,
//   depth: null,
//   colors: true,
// }));