function dutyFree(normPrice, discount, hol){
    let save = normPrice*discount / 100;
      return Math.floor(hol/save);
}
dutyFree(12, 50, 1000); //166
dutyFree(17, 10, 500); //294