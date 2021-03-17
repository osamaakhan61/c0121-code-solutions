const express = require('express');
const app = express();
const nextId = 1;
const grades = {};

app.use((req, res) => {
  express.json();
});

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const property in grades) {
    gradesArray.push(grades[property]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  res.status(201);
});
app.listen(3000, () => {
  console.log('Listening very intently to your request!');
});
