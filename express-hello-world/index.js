const express = require('express');
const app = express();

app.use(function (req, res) {
  console.log(req.method);
  const serverResponse = res.send('<h1>This is my header</h1><br><p>And this is my paragraph that I am sending back to you</p>');
});

app.listen(3000, function () {
  console.log('Listeneing very intently to you!');
});
