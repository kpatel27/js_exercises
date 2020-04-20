function integerToString(num) {
  const NUM_STRINGS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var rightMostDigit;
  var remainingDigits;
  var result;
  var isNegative = num < 0;
  num = Math.abs(num);

  if (num < 10) {
    return NUM_STRINGS[num];
  }

  rightMostDigit = num % 10;
  remainingDigits = Math.floor(num / 10);

  result = integerToString(remainingDigits) + NUM_STRINGS[rightMostDigit];

  if (isNegative) {
    result *= -1;
  }

  return result;
}
