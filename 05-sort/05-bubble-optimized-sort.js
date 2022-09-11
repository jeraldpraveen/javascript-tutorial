function bubbleSort(array) {
  let noSwaps;
  for (let i = array.length - 1; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        console.log(array, array[j], array[j + 1]);
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}

const result = bubbleSort([1, 2, 3, 4, 5, 8, 6, 7]);
console.log(result);
