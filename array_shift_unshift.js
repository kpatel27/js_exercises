function shift(arr) {
  function shift(array) {
    var removedElement = array[0];
    var i;

    if (array.length === 0) { return undefined; }

    for (i = 0; i < array.length - 1; i++) {
      array[i] = array[i + 1];
    }
    array.length -= 1;

    return removedElement;
}

function unshift(array, ...elements) {
  var i;
  var j;
  var copiedArray;

  for (i in elements) {
    copiedArray = array.slice();
    for (j = 0; j < copiedArray.length; j++) {
      array[j + 1] = copiedArray[j];
    }
    array[0] = elements[i];
  }

  return array.length;
}
}
