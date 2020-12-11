function invert(array) {
    let newArray = new Array();
    for(let i = 0; i < array.length; i++){
     newArray.push(array[i] * (-1));
    }
     return newArray;
  }

invert([1,2,3,4,5]); //[-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]); //[-1,2,-3,4,-5]
invert([]); //[]