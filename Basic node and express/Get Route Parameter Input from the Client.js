let express = require('express');
let app = express();
// console.log('Hello World');

// 1. Start a Working Express Server
app.get('/', function(req, res) {
  res.send('Hello Express')
})

app.get('/:word/echo', (req, res) => {
  const { word } = req.params;
  res.json({ echo: word });
});
