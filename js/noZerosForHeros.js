function noBoringZeros(n) {
    let number = n.toString();
    if(number.length > 1){
      var arrNumber = number.split("");
      while (arrNumber[arrNumber.length - 1] === '0'){
        arrNumber.pop();
      }
      var newNumber = arrNumber.join("");
      return parseInt(newNumber, 10);
    } else {
      return 0;
    }
  }
  noBoringZeros(1050); //105
  noBoringZeros(-1050); //-105
  noBoringZeros(-105); //-105