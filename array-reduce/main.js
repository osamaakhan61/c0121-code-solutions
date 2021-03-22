const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sumFunction = (accumulator, currentValue) => accumulator + currentValue;
const sum = numbers.reduce(sumFunction);
console.log(sum);

const multiplyFunction = (accumulator, currentValue) => accumulator * currentValue;
const product = numbers.reduce(multiplyFunction);
console.log(product);

const initialValue = 0;
const balance = account.reduce((balance, transactions) => {
  if (transactions.type === 'deposit') {
    balance = balance + transactions.amount;
  } else {
    balance = balance - transactions.amount;
  }
  return balance;
}
, initialValue);
console.log(balance);

const composite = traits.reduce((objectArray, property) => {
  objectArray = Object.assign(property, objectArray);
  return objectArray;
}, {});

console.log(composite);
