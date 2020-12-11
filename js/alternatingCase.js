String.prototype.toAlternatingCase = function (data) {
    let string = '';
       for(let i=0; i< this.length; i++){
         if(typeof this === "number"){
           string += this[i];
         }
         else if(this[i] === this[i].toLowerCase()){
           string += this[i].toUpperCase();
         }
         else if(this[i] === this[i].toUpperCase()){
           string += this[i].toLowerCase();
         }
       }
       return string;
     }