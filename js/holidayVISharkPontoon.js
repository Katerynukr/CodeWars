function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let shark = sharkDistance / sharkSpeed;
      let you = pontoonDistance / youSpeed;
      if( dolphin === true ){
        shark = sharkDistance / (sharkSpeed /2);
      }
      if ( shark < you){
        return "Shark Bait!";
      }
      else {
        return "Alive!";
      }
    }
shark(12, 50, 4, 8, true); //"Alive!"
shark(7, 55, 4, 16, true); //"Alive!"
shark(24, 0, 4, 8, true); //"Shark Bait!"