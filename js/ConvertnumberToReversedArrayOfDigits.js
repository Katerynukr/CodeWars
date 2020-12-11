function digitize(n) {
    let i = n.toString().split("").reverse(); 
     let result = i.map(Number);
     return result;
   }
digitize(35231); //[1,3,2,5,3]