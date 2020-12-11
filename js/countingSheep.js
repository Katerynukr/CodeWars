/*First solution*/
function countSheeps(arrayOfSheep) {
    let number = 0;
    for(let i = 0; i< arrayOfSheep.length; i++){
      let currentElement = arrayOfSheep[i];
      if(currentElement === true){
        number++;
      }

    } return number;
}
var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
    
countSheeps(array1); //17

/*Second solution*/
function countSheeps(sheep) {
    return sheep.filter(Boolean).length;
  }