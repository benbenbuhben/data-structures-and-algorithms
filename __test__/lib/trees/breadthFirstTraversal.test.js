'use strict';

import breadthFirstTraversal from '../../../lib/trees/breadth-first-traversal.js';
import BinaryTree from '../../../lib/trees/binaryTreeClass.js';
import Node from '../../../lib/trees/nodeClass.js';

describe('breadthFirstTraversal', () => {

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

  it('breadthFirstTraversal() returns the node values read top to bottom, left to right.', () => {

    expect(breadthFirstTraversal(tree)).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });

  it('breadthFirstTraversal() returns an array', () => {
    let test = breadthFirstTraversal(tree);
    expect(Array.isArray(test)).toEqual(true);
  });



});