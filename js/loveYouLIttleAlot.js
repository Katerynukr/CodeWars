function howMuchILoveYou(nbPetals) {
    let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  for (let i = 0; i <= nbPetals; i++){
    arr.push(arr[i]);
  }
  return arr[nbPetals-1];
}

howMuchILoveYou(7); //"I love you"
howMuchILoveYou(3); //"a lot"
howMuchILoveYou(6); //"not at all"