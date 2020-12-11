function maps(x){
    let newArray = x.map(function(num){
      return num * 2;
    });
      return newArray;
    }
maps([4, 1, 1, 1, 4]); //[8, 2, 2, 2, 8]
maps([2, 2, 2, 2, 2, 2]); //[4, 4, 4, 4, 4, 4] 