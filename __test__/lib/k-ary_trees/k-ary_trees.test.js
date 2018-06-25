'use strict';

const KAryTree = require('../../../lib/k-ary_trees/k-aryTreeClass.js');
const Node = require('../../../lib/k-ary_trees/k-aryNodeClass.js');

describe('k-ary tree class', () => {

  let tree1 = new KAryTree();
  it('breadthFirstTraversal() null if the tree is empty', () => {

    expect(tree1.breadthFirstTraversal()).toEqual(null);
  });

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

  it('breadthFirstTraversal() returns the node values read top to bottom, left to right.', () => {

    expect(tree.breadthFirstTraversal()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('breadthFirstTraversal() returns an array', () => {
    let test = tree.breadthFirstTraversal();
    expect(Array.isArray(test)).toEqual(true);
  });

  it('depthFirstTraversal() and goes as far down before backtracking', () => {

    expect(tree.depthFirstTraversal()).toEqual([1, 3, 6, 9, 2, 5, 8, 7, 4]);
  });



});