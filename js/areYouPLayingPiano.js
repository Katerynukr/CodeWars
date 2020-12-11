function areYouPlayingBanjo(name) {
  
    return name.charAt(0).toUpperCase() ==='R' ? `${name} plays banjo` : `${name} does not play banjo`;
  }

areYouPlayingBanjo("Martin"); //"Martin does not play banjo"
areYouPlayingBanjo("Rikke"); //"Rikke plays banjo"