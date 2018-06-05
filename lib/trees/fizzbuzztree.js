'use strict';

export default function fizzBuzzTree(tree) {

  let _walk = (node) => {

    let nv=node.value;

    if (nv % 3 === 0) {
      node.value = 'fizz';
      if (nv % 5 === 0) {
        node.value = 'fizzbuzz';
      }
    }

    if (nv % 5 === 0) {
      node.value = 'buzz';
      if (nv % 3 === 0) {
        node.value = 'fizzbuzz';
      }
    }

    if (node.left) _walk(node.left);
    if (node.right) _walk(node.right);
  };

  _walk(tree.root);

  return tree;

}