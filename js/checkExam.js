function checkExam(array1, array2) {
    let result = 0;
  if(array1.length > 0 && array2.length > 0){
    for(let i=0; i<array1.length;i++){
      if(array1[i] === array2[i]){
        result += 4;
      }else if(array2[i] === ''){
        result +=0;
      } else if(array1[i] !== array2[i]){
        result -= 1;
      } 
    }
  }if(result <0){
    return 0;
  }
    return result;
  }
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]); //7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]); //16
