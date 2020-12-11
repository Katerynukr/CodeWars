function findLongest(str) {
  
    var spl = str.split(" ");
    var longest = 0;
    
    for (var i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length;
        }
    }
      return longest
  }
findLongest("Wind your body and wiggle your belly"); //6
findLongest("Lets all go on holiday"); //7