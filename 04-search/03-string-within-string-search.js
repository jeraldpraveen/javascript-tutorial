function stringWithinString(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      if (short.length - 1 === j) count++;
    }
  }
  return count > 0 ? count : -1;
}

const result = stringWithinString("wowomgzomg", "omg");
console.log(result);
