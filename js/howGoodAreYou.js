function betterThanAverage(classPoints, yourPoints) {
    let number = 0;
    for(let i=0; i < classPoints.length; i++){
      number += classPoints[i];
    }
    let classAverage = number / classPoints.length;
    if(classAverage < yourPoints){
      return true;
    } return false;
  }

betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9); //false