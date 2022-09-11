function binarySearch(array, find) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (array[middle] !== find && start <= end) {
    if (array[middle] < find) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((start + end) / 2);
  }

  return array[middle] === find ? middle : -1;
}

const result = binarySearch([28, 48, 81, 102, 105, 193, 201, 208], 208);
console.log(result);
