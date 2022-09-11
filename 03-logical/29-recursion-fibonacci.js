function fibRecursion(num) {
  if (num < 2) return num;
  else return fibRecursion(num - 1) + fibRecursion(num - 2);
}

console.log(fibRecursion(10));
