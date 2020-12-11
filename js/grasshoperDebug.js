function weatherInfo (temp) {
    var c = (temp - 32)* (5/9); 
    if (c > 0){
      return (c + " is above freezing temperature");
      }
    else{
      return (c + " is freezing temperature");
  }
}

weatherInfo(50); //'10 is above freezing temperature'
weatherInfo(23); // '-5 is freezing temperature'