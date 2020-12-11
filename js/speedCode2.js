/*Solution one*/
function arrayMadness(a, b) {
    let sumA = 0;
    let sumB = 0;

    for(let i = 0; i < a.length; i++){
      let currentElementA = a[i];
      let squaredA = currentElementA * currentElementA ;
      sumA += squaredA;
    }
    for(let j = 0; j < b.length; j++){
      let currentElementB = b[j];
       let squaredB = currentElementB * currentElementB * currentElementB  ;
      sumB += squaredB;
    }
    if(sumA > sumB) {
      return true;
    } else{
      return false;
    }
  }
arrayMadness([4,5,6],[1,2,3]); //true
arrayMadness([5,6,7],[4,5,6]); //false
arrayMadness([4,5,6],[3,4,5]); //false

/*Solution two*/
function arrayMadness(a, b) {
    return a.reduce( (sum, el) => sum + el ** 2, 0) >
           b.reduce( (sum, el) => sum + el ** 3, 0);
  }
arrayMadness([3,4,5],[2,3,4]); //false 
arrayMadness([2,3,4],[1,2,3]); //false 
arrayMadness([1,2,3],[0,1,2]); //true 