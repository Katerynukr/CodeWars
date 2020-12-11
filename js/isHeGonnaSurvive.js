function hero(bullets, dragons){
    let bulletsToKill = dragons * 2;
     return ( bullets >= bulletsToKill) ? true : false;
}

hero(4, 5); //false
hero(100, 40); //true
hero(1500, 751); //false