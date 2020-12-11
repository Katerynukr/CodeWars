function findMultiples(integer, limit) {
    let arr = [];
    for(let i= integer; i <= limit; i+=integer){
      arr.push(i);
    }
      return arr;
  }

findMultiples(4, 27); //[4, 8, 12, 16, 20, 24]
findMultiples(11, 54); //[11, 22, 33, 44]