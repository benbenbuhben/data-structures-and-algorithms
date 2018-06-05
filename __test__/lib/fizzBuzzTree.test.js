'use strict';

require('babel-register');
import fizzBuzzTree from '../../lib/trees/fizzbuzztree';
import BinaryTree from '../../lib/trees/binary-tree/index.js';
import Node from '../../lib/trees/node/index.js';


describe('fizzBuzzTree()', () => {

  it('fizzBuzzTree() switches out values divisible by 3 & 5 with fizz and buzz, respectively', () => {
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

    //let test = //put test here
    expect(fizzBuzzTree(tree)).toEqual({"root": {"left": {"left": {"left": null, "right": {"left": {"left": null, "right": null, "value": 8}, "right": {"left": null, "right": null, "value": "fizz"}, "value": 7}, "value": "fizz"}, "right": null, "value": 2}, "right": {"left": {"left": null, "right": null, "value": 4}, "right": {"left": null, "right": null, "value": "buzz"}, "value": "fizz"}, "value": 1}});
  });

  it('fizzBuzzTree() switches out values divisible by both 3 & 5 with fizzbuzz', () => {
    const one = new Node(3);
    const two = new Node(5);
    const three = new Node(9);
    const four = new Node(10);
    const five = new Node(12);
    const six = new Node(15);
    const seven = new Node(18);
    const eight = new Node(20);
    const nine = new Node(30);

    const tree = new BinaryTree(one);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;

    //let test = //put test here
    expect(fizzBuzzTree(tree)).toEqual({"root": {"left": {"left": {"left": null, "right": {"left": {"left": null, "right": null, "value": "buzz"}, "right": {"left": null, "right": null, "value": "fizzbuzz"}, "value": "fizz"}, "value": "fizzbuzz"}, "right": null, "value": "buzz"}, "right": {"left": {"left": null, "right": null, "value": "buzz"}, "right": {"left": null, "right": null, "value": "fizz"}, "value": "fizz"}, "value": "fizz"}});
  });

  it('fizzBuzzTree() returns an object', () => {
    const one = new Node(3);
    const two = new Node(5);
    const three = new Node(9);
    const four = new Node(10);
    const five = new Node(12);
    const six = new Node(15);
    const seven = new Node(18);
    const eight = new Node(20);
    const nine = new Node(30);

    const tree = new BinaryTree(one);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;

    //let test = //put test here
    expect(typeof fizzBuzzTree(tree)).toEqual('object');
  });

});