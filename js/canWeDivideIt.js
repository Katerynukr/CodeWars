function isDivideBy(number, a, b) {
    return Number.isInteger(number / a) && Number.isInteger(number / b) ? true : false ;
}

isDivideBy(45, 5, 15); //true
isDivideBy(4, 1, 4); //true
isDivideBy(15, -5, 3); //true