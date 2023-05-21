let express = require('express');
let app = express();
// console.log('Hello World');

// 1. Start a Working Express Server
app.get('/', function(req, res) {
  res.send('Hello Express')
})

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({ time: req.time });
});
