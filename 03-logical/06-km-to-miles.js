// 1 km = 0.62137119 miles.
const kilometersToMiles = (k) => k * 0.62137119;

let result = kilometersToMiles(5);
// Decimal fixed to 2 places
let fixedResult = result.toFixed(2);
console.log(fixedResult);
