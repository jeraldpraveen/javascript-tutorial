function comparator(num1, num2) {
  return num1 - num2;
}

const sorted = [6, 4, 15, 10].sort(comparator);
console.log(sorted);
