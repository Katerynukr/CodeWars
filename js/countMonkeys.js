function monkeyCount(n) {
    let array = [];
    for(let i=1; i <= n; i++){
      array.push(i);
    }
    return array;
  }

monkeyCount(3)); //[1, 2, 3]
monkeyCount(9)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
monkeyCount(10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]