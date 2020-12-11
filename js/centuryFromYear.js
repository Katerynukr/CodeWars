function century(year) {
    let century = Math.floor((year -1)/ 100)+ 1;
  
    return  century ;
  }

century(1900); //19
century(1601); //17
century(2000); //20