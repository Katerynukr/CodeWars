function litres(time) {
    var consumedLitres = time / 2;
    var rounded = Math.floor(consumedLitres);
    return rounded;
  }

litres(2); //1
litres(1.4); //0
litres(12.3); //6