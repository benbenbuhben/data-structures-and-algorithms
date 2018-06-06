'use strict';

export default function findMaxValue(tree) {

  let max = tree.root.value;

  let _walk = (node) => {
    max = node.value > max ? node.value : max;
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
  };
  _walk(tree.root);

  return max;
}