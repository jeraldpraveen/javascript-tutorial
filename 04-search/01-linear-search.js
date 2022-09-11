function linearSearch(arr, find) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
      return i;
    }
  }
  return -1;
}

const result = linearSearch([5, 8, 1, 100, 12, 3, 12], 12);
console.log(result);
