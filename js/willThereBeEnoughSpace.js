/*Solution two*/
function enough(cap, on, wait) {
    let freeSpace = cap - on;
    if(freeSpace >= wait ){
        return 0
    } else {
      return wait - freeSpace
    }
    
  }

enough(10, 5, 5); //0
enough(100, 60, 50); //10

/*Solution two*/
function enough(cap, on, wait) {
    return Math.max(on + wait - cap, 0);
  }

 enough(20, 5, 5); //0