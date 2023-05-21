let express = require('express');
let app = express();
// console.log('Hello World');

// 1. Start a Working Express Server
app.get('/', function(req, res) {
  res.send('Hello Express')
})

app.get('/name', (req, res) => {
  const { first, last } = req.query;
  const fullName = `${first} ${last}`;
  res.json({ name: fullName });
});
