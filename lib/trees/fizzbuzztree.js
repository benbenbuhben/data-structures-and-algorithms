'use strict';

export default function fizzBuzzTree(tree) {

  let _walk = (node) => {

    node.value = node.value % 15 === 0 ? 'fizzbuzz' : node.value % 3 === 0 ? 'fizz' : node.value % 5 === 0 ? 'buzz' : node.value;

    if (node.left) _walk(node.left);
    if (node.right) _walk(node.right);
  };

  _walk(tree.root);

  return tree;

}