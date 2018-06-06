'use strict';

const findMaxValue = require('../../../lib/trees/find-maximum-value-binary-tree.js')
const BinaryTree = require('../../../lib/trees/binaryTreeClass.js');
const Node = require('../../../lib/trees/nodeClass.js');

describe('findMaxValue', () => {

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

  it('findMaxValue() returns the maximum value stored in the tree', () => {
    expect(findMaxValue(tree)).toEqual(11);
  });

  it('findMaxValue() returns a number', () => {
    expect(typeof findMaxValue(tree)).toEqual('number');
  });

  it('findMaxValue() works with negative values', () => {
    const one = new Node(-2);
    const two = new Node(-7);
    const three = new Node(-5);
    const four = new Node(-2);
    const five = new Node(-6);
    const six = new Node(-9);
    const seven = new Node(-5);
    const eight = new Node(-11);
    const nine = new Node(-4);
    const tree2 = new BinaryTree(one);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.right = six;
    five.left = seven;
    five.right = eight;
    six.left = nine;
    expect(findMaxValue(tree2)).toEqual(-2);
  });

});