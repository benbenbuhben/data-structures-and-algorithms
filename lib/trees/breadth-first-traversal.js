'use strict';

function breadthFirstTraversal(tree) {

  let queue = [tree.root];
  let answers = [];

  function walk(node){
    if (node.left) queue[queue.length]=node.left;
    if (node.right) queue[queue.length]=node.right;
    answers.push(node.value);
    reindex(queue);
    if (queue.length) walk(queue[0]);
  }

  function reindex(array){
    for(let i = 1; i <= array.length; i++){
      array[i-1]=array[i];
    }
    delete array[array.length-1];
    array.length--;
    return array;
  }

  walk(tree.root);

  return answers;

}

module.exports = breadthFirstTraversal;