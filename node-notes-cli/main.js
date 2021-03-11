const data = require('./data.json');
const fs = require('fs');
const userOperation = process.argv[2];

if (userOperation === 'read') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    for (const property in data.notes) {
      console.log(`${property}: ${data.notes[property]}`);
    }
  });
}

if (userOperation === 'create') {
  const userInput = process.argv[3];
  const nextNote = data.nextId;
  data.notes[nextNote] = userInput;
  data.nextId++;
  const newInput = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newInput, 'utf8', err => {
    if (err) throw err;
  });

}

if (userOperation === 'delete') {
  const selectNote = process.argv[3];
  delete data.notes[selectNote];
  const newInput = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newInput, 'utf8', err => {
    if (err) throw err;
  });
}

if (userOperation === 'update') {
  const selectNote = process.argv[3];
  const updatedNote = process.argv[4];

  data.notes[selectNote] = updatedNote;

  const newInput = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newInput, 'utf8', err => {
    if (err) throw err;
  });
}
