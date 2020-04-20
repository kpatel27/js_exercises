function stringToInteger(numStr) {
  const NUMS = [0,1,2,3,4,5,6,7,8,9];
  var digitPlace = 0;
  var i;
  var result = 0;
  var numStringCopy;
  var isNegative = false;

  if (numStr[0] === '+' || numStr[0] === '-') {
    numStr[0] === '-' ? isNegative = true : '';
    numStringCopy = numStr.slice(1);
  } else {
    numStringCopy = numStr.slice()
  }

  for (i = numStringCopy.length - 1; i >= 0; i -= 1) {
    result += numStringCopy[i] * (10**digitPlace);
    digitPlace += 1;
  }

  if (isNegative) {
    return result * -1;
  } else {
    return result;
  }
}
