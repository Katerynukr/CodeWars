function getAverage(marks){
    let sumOfMarks = 0;
    for( let i = 0; i < marks.length; i++){
      sumOfMarks  += marks[i];
    }
    return Math.floor(sumOfMarks /marks.length);
  }

getAverage([1,2,3,4,5,]); //3
getAverage([1,1,1,1,1,1,1,2]); //1
  