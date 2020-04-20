function octalToDecimal(numberString) {
  var stringDigits = numberString.split('');
  stringDigits.reverse();

  var octalEightDigits = stringDigits.map(function (digit, index) {
    var digitPlace = index + 1;
    return Number(digit) * 8 ** (digitPlace- 1);
  });

  return octalEightDigits.reduce(function (sum, num) {
    return sum + num;
  })
}
