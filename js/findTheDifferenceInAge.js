function differenceInAges(ages){
    let biggest = ages[1];
    let smallest = ages[1];
    for (let i =0; i<ages.length; i++){   
      if(ages[i] > biggest){
        biggest = ages[i];
      } else if( ages[i] < smallest){
          smallest = ages[i];
      }
    }
    let ageDifference = biggest - smallest;
    let age =[smallest, biggest, ageDifference];
    return age;
  }

differenceInAges([82, 15, 6, 38, 35]); //[6, 82, 76]
differenceInAges([57, 99, 14, 32]); //[14, 99, 85]