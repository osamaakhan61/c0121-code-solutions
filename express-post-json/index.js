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
  res.send(req.body);

  grades[''] = req.body;
  nextId++;
  res.status(201);
});
app.listen(3000, () => {
  console.log('Listening very intently to your request!');
});
