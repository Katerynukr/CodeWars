function check(a, x) {
    for(i = 0; i < a.length; i++){
      if(a[i] === x){
        return true;
      }
    }
    return false;
  }

check([80, 117, 115, 104, 45, 85, 112, 115], 45); // true
check(['what', 'a', 'great', 'kata'], 'kat');// false