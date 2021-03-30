const express = require('express');
const app = express();
const path = require('path');

const absPath = path.join(__dirname, 'public');
const fileServe = express.static(absPath);

app.use(fileServe);

app.listen(3000, () => {
  console.log('Listening very intently to your request!');
});
