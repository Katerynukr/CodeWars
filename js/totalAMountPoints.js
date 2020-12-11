function points(games) {
    let points = 0;
  for(let match of games){
    
    
    let string = match.split(':');
  
    if(string[0]>string[1]){
      points+=3;
    }
    else if( string[0]<string[1]){
      points+=0;
    } 
    else if(string[0]==string[1]){
      points+=1
    }
  
  }
    return points;
}

points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]); //0