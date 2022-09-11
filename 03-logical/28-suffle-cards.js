const symbols = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

const createCradDeck = (symbols, values) => {
  var cardDeck = [];
  let count = 1;
  for (let i = 0; i < symbols.length; i++) {
    for (let j = 0; j < values.length; j++) {
      cardDeck.push(`${symbols[i]},${values[j]}`);
      count++;
    }
  }
  return cardDeck;
};

const suffleCard = () => {
  let cardArray = createCradDeck(symbols, values);
  let limit = cardArray.length;
  let selectCard = Math.floor(Math.random() * limit + 1);
  let cardObject = cardArray[selectCard];
  return cardObject;
};

console.log(suffleCard());
