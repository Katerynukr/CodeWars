function past(h, m, s){
    return h * 3600000 + m * 60000 + s * 1000;
  }

past(1,0,1); //3601000
past(1,0,0); //3600000