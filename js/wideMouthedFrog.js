function mouthSize(animal) {
    return animal.toLowerCase() === 'alligator' ? "small" : "wide";
  }
  mouthSize("ant bear"); //"wide"
  mouthSize("alligator"); //"small"