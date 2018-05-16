const BS = function binarySearch(arr,key){
  let lower = 0;
  let upper = arr.length-1;
  let middle = Math.floor((upper+lower)/2);

  // let ticker=0;

  while(arr[middle] !== key){
    
    if(lower > upper) {
      return -1
    }

    middle = Math.floor((upper+lower)/2);
    console.log(lower,upper,middle);
    if(arr[middle] < key) {
      lower = middle+1;
    }

    else if(arr[middle] > key) {
      upper = middle-1;
    }
  //  ticker++;
  //  if(ticker===5){break};
  }
  return middle;
};

module.exports = BS;



// let numArray = Array.from({length: 100}, () => Math.floor(Math.random() * 400));
// function sortNumber(a,b) {
//     return a - b;
// }

// numArray.sort(sortNumber);
// function onlyUnique(value, index, self) { 
//     return self.indexOf(value) === index;
// }

// var unique = numArray.filter( onlyUnique );

// console.log(unique);


// binarySearch(unique,11);