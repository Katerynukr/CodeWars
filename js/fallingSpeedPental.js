function sakuraFall(v) {
    let toGround = 400;
    let timeToGround = toGround / v;
     if ( v <= 0){
       return 0;
     }
     else if (typeof v !== 'number'){
       return 0;
     }else {
     return timeToGround};
   }

sakuraFall(5); //80
sakuraFall(10); //40
sakuraFall(-1); //0