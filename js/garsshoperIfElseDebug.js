function checkAlive (health) {
    if (health <= 0) {
      
      return false
    } else {
      return true
    }
  }

checkAlive(5); //true
checkAlive(0); //false