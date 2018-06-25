'use strict';

const BinaryTree = require('./binaryTreeClass.js');
const Node = require('./nodeClass.js');
//const fizzBuzzTree = require('./fizzbuzztree.js');
const findMaxValue = require('./find-maximum-value-binary-tree.js');
const util = require('util');
//var tree1 = require('pretty-tree');

const one = new Node(2);
const two = new Node(7);
const three = new Node(5);
const four = new Node(2);
const five = new Node(6);
const six = new Node(9);
const seven = new Node(5);
const eight = new Node(11);
const nine = new Node(4);

const tree = new BinaryTree(one);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;
five.left = seven;
five.right = eight;
six.left = nine;





//console.log(tree.root);
//console.log(str);

console.log(util.inspect(tree, {
  showHidden: true,
  depth: null,
  colors: true,
}));
// console.log('preOrder: ', tree.preOrder());
// console.log('postOrder: ', tree.postOrder());
console.log('inOrder: ', tree.inOrder());
// console.log('fizzbuzz ', JSON.stringify(fizzBuzzTree(tree)));
// let tree2 = fizzBuzzTree(tree);
// console.log('fizzbuzz ', JSON.stringify(fizzBuzzTree(tree2)));
console.log(findMaxValue(tree));
// console.log('fizzbuzz ', util.inspect(tree2, {
//   showHidden: true,
//   depth: null,
//   colors: true,
// }));