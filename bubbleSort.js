function bubbleSort(arr) {
  let sorted;

  while (!sorted) {
    let first;
    let second;
    sorted = true;

    for (first=0, second=1; second < arr.length; first+=1, second+=1) {
      if (arr[first] > arr[second]) {
        [arr[first], arr[second]] = [arr[second], arr[first]];
        sorted = false;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([5,3,-1,0,-2]));
console.log(bubbleSort([-3, -2, -3, 7, 3, -1, 10, 3, 6]));
console.log(bubbleSort([57, 23, -24, 7, -1, 0, 56, 0]));
