function superSize(num){
    let string = num.toString().split('');
    let arrNumber = string.sort((a,b)=>b-a);
    return Number(arrNumber.join(''));
  }
tsuperSize(608719); //987610
superSize(123456789); //987654321