String.prototype.isUpperCase = function() {
    let lowerCase = '';
    let upperCase = '';
    for(let i = 0; i < this.length; i++){
      if(this[i] === this[i].toUpperCase()){
        upperCase += this[i];
      }
      else {
        lowerCase += this[i];
      }
    }
       return lowerCase === '' ?  true : false ; 
  }