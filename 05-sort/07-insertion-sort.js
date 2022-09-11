function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    var currentVal = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentVal;
  }
  return array;
}

const result = insertionSort([34, 22, 10, 19, 15]);
console.log(result);
