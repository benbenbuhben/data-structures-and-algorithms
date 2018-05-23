'use strict';

let LinkedList = require('./ll_class.js');


let input1 = new LinkedList();
input1.append(1);
input1.append(3);
input1.append(5);
input1.append(7);

let input2 = new LinkedList();
input2.append(2);
input2.append(4);
input2.append(6);
input2.append(8);

function mergeList(listOne, listTwo) {
  let current1 = listOne.head;
  let current2 = listTwo.head;
  let answer = new LinkedList();

  while (current1) {
    answer.append(current1.value);
    answer.append(current2.value);
    current1 = current1.next;
    current2 = current2.next;
  }
  return answer;
}

let check = mergeList(input1, input2);

console.log(check);