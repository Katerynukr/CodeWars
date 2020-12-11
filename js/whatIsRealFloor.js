function getRealFloor(n) {
    return n <= 0 ? n : n < 13 ? n-1 : n -2;
  }

getRealFloor(5); //4