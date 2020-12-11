function sumMix(x){
    let newArray = x.map(Number);
    let sum = 0;
    for( let i=0; i<newArray.length; i++){
      sum += newArray[i];
    }return sum;
  }

sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]); //42
sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']); //41