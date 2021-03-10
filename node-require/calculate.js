const addFunc = require('./add');
const subtractFunc = require('./subtract');
const multiplyFunc = require('./multiply');
const divideFunc = require('./divide');

const stringList = process.argv[2].split(' ');
const firstNum = parseInt(stringList[0]);
const secondNum = parseInt(stringList[2]);

if (process.argv[2].includes('plus')) {
  const results = addFunc.add(firstNum, secondNum);
  console.log('result: ', results);
}

if (process.argv[2].includes('minus')) {
  const results = subtractFunc.subtract(firstNum, secondNum);
  console.log('result: ', results);
}

if (process.argv[2].includes('times')) {
  const results = multiplyFunc.multiply(firstNum, secondNum);
  console.log('result: ', results);
}

if (process.argv[2].includes('over')) {
  const results = divideFunc.divide(firstNum, secondNum);
  console.log('result: ', results);
}
