function index(array, n){
    let number = array[n];
    let power = Math.pow(number, n);
    if(n > array.length-1){
      return -1;
    }
    return power;
  }

index([1,1,1,1,1,1,1,1,1,2], 9); //512
index([29,82,45,10], 3); //1000
index([6,31], 3); //-1