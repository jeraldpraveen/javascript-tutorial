function comparator(num1, num2) {
  return num1.length - num2.length;
}

const array = ["Jerald", "Yar", "Deva", "Praveen"];
const sorted = array.sort(comparator);
console.log(sorted);
