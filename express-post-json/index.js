const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const property in grades) {
    gradesArray.push(grades[property]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  res.status(201).json(req.body);

  grades[req.body.id] = req.body;
  nextId++;
});
app.listen(3000, () => {
  console.log('Listening very intently to your request!');
});
