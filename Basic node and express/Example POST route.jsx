let express = require('express');
let app = express();
// console.log('Hello World');

// 1. Start a Working Express Server
app.get('/', function(req, res) {
  res.send('Hello Express')
})

app.post('/data', (req, res) => {
  const { name, age } = req.body;
  res.send(`Received data: Name: ${name}, Age: ${age}`);
});
