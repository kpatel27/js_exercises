// Implement the function so that two arrays containing the same values—but in
// a different order—are considered equal.

function areArraysEqual(array1, array2) {
  array1Copy = array1.slice().sort();
  array2Copy = array2.slice().sort();
  var i;

  if (array1.length !== array2.length) return false;

  for (i = 0; i < array1Copy.length; i += 1) {
    if (array1Copy[i] !== array2Copy[i]) return false;
  }

  return true;
}
