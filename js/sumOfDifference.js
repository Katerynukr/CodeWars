function sumOfDifferences(arr) {
    let number = 0;
    let array = arr.sort((a, b) => b - a);
    for(let i =0; i<array.length-1; i++){
      number += (array[i] - array[i+1]);
    }
      return number;
  } 
  sumOfDifferences([-3, -2, -1]); // 2