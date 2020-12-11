function well(x){ 
    let good = 0;
    x.forEach((element)=> element.includes('good')? good+= 1: good +=0);
    if( good === 1 || good === 2 ){
      return 'Publish!';
    }
    if( good  > 2) {
      return 'I smell a series!';
    }
    if(good === 0) {
      return 'Fail!';
    }
  }

well(['bad', 'bad', 'bad']); //'Fail!'
well(['good', 'bad', 'bad', 'bad', 'bad']); //'Publish!'