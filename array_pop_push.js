function pop(arr) {
  if (arr.length === 0) return undefined;

  return arr.splice(-1);
}

function push(arr, ...arg) {
  for (var i = 0; i < arg.length; i += 1) {
    arr[arr.length] = arg[i];
  }
  return arr.length;
}
