/*Soliution one*/
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let distanceToRun = mpg * fuelLeft;
    let milesLeft = distanceToPump - distanceToRun;
    if( milesLeft <= 0){
      return true;
    } else{
      return false;
    }
  };

zeroFuel(50, 25, 2); //true

/*Solution two*/
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (mpg * fuelLeft) >= distanceToPump;
  };
zeroFuel(100, 50, 1); //false