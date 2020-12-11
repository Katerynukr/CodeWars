/*First solution*/
function removeChar(str){
    let newString='';
     for(let i=1; i< str.length-1; i++){
        newString += str[i];
       } return newString;
   
   };

removeChar('eloquent'); //'loquen'
removeChar('country'); //'ountr'



/*Seconds solution*/
   function removeChar(str){
    let result = "";
     for(let i = 0; i< str.length; i++){
       if(i === 0 || i === str.length-1){
         result += "";
       } else {
         result += str[i];
       }
     }return result;
   };
removeChar('person'); //'erso'
removeChar('place'); //'lac' 