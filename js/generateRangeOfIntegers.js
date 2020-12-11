function generateRange(min, max, step){
    let arrayResult = [];
    for (let i = min; i <= max; i += step){
      arrayResult.push(i);
    } return arrayResult;
  }

generateRange(2, 10, 2); //[2,4,6,8,10]