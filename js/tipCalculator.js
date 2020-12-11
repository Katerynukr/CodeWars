function calculateTip(amount, rating) {
    let insensitive = rating.toLowerCase();
  switch (insensitive) {
      case "terrible":
        return 0;
      case "poor":
        return Math.ceil(amount * 0.05);
      case "good":
        return Math.ceil(amount * 0.1);
      case "great":
        return Math.ceil(amount * 0.15);
      case "excellent":
        return Math.ceil(amount * 0.2);
      default:
      return "Rating not recognised";
  }
}

calculateTip(20, "Excellent"); //4
calculateTip(26.95, "good"); //3