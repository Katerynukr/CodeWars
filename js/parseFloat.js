function parseF(s) {
    return isNaN(parseFloat(s)) ? null : parseFloat(s);
  }

  parseF("1"); //1.0