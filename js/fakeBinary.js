function fakeBin(x){
    let string = '';
  for(let i =0; i< x.length; i++){
    if(5<=x[i]){
      string += 1;
    } else {
    string +=0;
      }
      
  }
    return string;
  }

fakeBin('45385593107843568'); //'01011110001100111'
fakeBin('509321967506747'); //'101000111101101'