function slice(arr, begin, end) {
  var newArr = [];
  var i;

  if (end > arr.length) end = arr.length;

  for (i = begin; i < end; i += 1) {
    newArr.push(arr[i]);
  }

  return newArr;
}

function splice(arr, start, deleteCount, ...elements) {
  var i = 0;
  var newArr = [];

  if (start > arr.length) start = arr.length;
  if (deleteCount > arr.length - start) deleteCount = arr.length - start;

  if (elements.length === 0 || typeof elements[0] !== 'number') {
    while (i < deleteCount) {
      newArr.push(arr[start + i]);
      arr[start + i] = arr[start + deleteCount + i];
      i += 1;
    }

    return newArr;
  } else {
    while (i < deleteCount) {
      arr[start + i] = elements[i];
      i += 1;
    }

    return arr;
  }
}
