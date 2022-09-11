// (0°C × 9/5) + 32 = 32°F
const celciusToFahrenheit = (c) => {
  let f = c * (9 / 5) + 32;
  console.log(`Fahrenheit is ${f}`);
};

celciusToFahrenheit(1);
