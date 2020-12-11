function expressionMatter(a, b, c) {
    let largest = 0;
    let var1 = a * (b+c);
    let var2 = a * b * c;
    let var3 = a + b *c;
    let var4 = (a + b) * c;
    let var5 = a+b+c;
    if( var1 > largest) {
      largest = var1;
    }
    if (var2>largest){
      largest = var2;
    }
    if(var3>largest){
      largest = var3;
    }
    if(var4>largest){
      largest = var4;
    }
    if(var5>largest){
      largest = var5;
    }
    return largest;
  }

expressionMatter(1, 1, 1); //3
expressionMatter(1, 2, 3); //9
expressionMatter(1, 3, 1); //5
expressionMatter(2, 2, 2); //8