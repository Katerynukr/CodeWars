/*First solution*/
function positiveSum(arr) {
    let sum = 0;
  if(arr.length ===0 ){
    return 0;
  }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i];
        } else {
            sum += 0;
        }
    } 
  return sum;
  }


positiveSum([1,2,3,4,5]); //15
positiveSum([]); //0

/*Second solution*/
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }


positiveSum([-1,-2,-3,-4,-5]); //0
positiveSum([-1,2,3,4,-5]; //9

/*Third solution*/
const positiveSum = arr => arr.reduce((acc, cur) => cur > 0 ? acc + cur : acc, 0);

positiveSum([1,-2,3,4,5]); //13