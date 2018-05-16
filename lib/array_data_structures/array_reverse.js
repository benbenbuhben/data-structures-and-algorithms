function reverseArray(arr){ //eslint-disable-line
  let reversedArr = [];
  for (var i = arr.length-1; i >= 0; i--){
    reversedArr[arr.length-i-1]=arr[i];
  }
  return reversedArr;
}