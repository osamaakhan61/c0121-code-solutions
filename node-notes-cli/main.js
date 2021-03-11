const data = require('./data.json');
const fs = require('fs');
const userOperation = process.argv[2];

if (userOperation === 'read') {
  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    var cleanData = data.replace(/['"]+/g, '');
    var removeBrackets = cleanData.replace(/[{}]+/g, '');
    var removeCommas = removeBrackets.replace(/[,]+/g, '');
    var removeLineBreaks = removeCommas.replace(/^\s+|\s+$/g, '');
    var removeIndents = removeLineBreaks.replace(/^ {2}/gm, '');
    console.log(removeIndents);
  });
}

if (userOperation === 'create') {
  const userInput = process.argv[3];
  const nextNote = data.nextId;
  data.notes[nextNote] = userInput;
  data.nextId++;
  const newInput = JSON.stringify(data, null, 2);
  const newInputList = JSON.stringify(data.notes, null, 2);
  fs.writeFile('data.txt', newInputList, 'utf8', err => {
    if (err) throw err;
  });
  fs.writeFile('data.json', newInput, 'utf8', err => {
    if (err) throw err;
  });

}

if (userOperation === 'delete') {
  const selectNote = process.argv[3];
  delete data.notes[selectNote];
  const newInput = JSON.stringify(data, null, 2);
  const newInputList = JSON.stringify(data.notes, null, 2);
  fs.writeFile('data.txt', newInputList, 'utf8', err => {
    if (err) throw err;
  });
  fs.writeFile('data.json', newInput, 'utf8', err => {
    if (err) throw err;
  });
}

if (userOperation === 'update') {
  const selectNote = process.argv[3];
  const updatedNote = process.argv[4];

  data.notes[selectNote] = updatedNote;

  const newInput = JSON.stringify(data, null, 2);
  const newInputList = JSON.stringify(data.notes, null, 2);
  fs.writeFile('data.txt', newInputList, 'utf8', err => {
    if (err) throw err;
  });
  fs.writeFile('data.json', newInput, 'utf8', err => {
    if (err) throw err;
  });
}
