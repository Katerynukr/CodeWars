function isLockNessMonster(s) {
    if(s.includes('tree fiddy')){
      return s;
    }
    else if ( s.includes('tree fifty') || s.includes('3.50')){
      return s;
    }
  }

  isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy");
  isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.");