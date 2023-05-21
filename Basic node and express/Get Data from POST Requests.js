let express = require('express');
let app = express();
// console.log('Hello World');

// 1. Start a Working Express Server
app.get('/', function(req, res) {
  res.send('Hello Express')
})

// Middleware to parse URL encoded data
app.use(express.urlencoded({ extended: false }));

// Serve the HTML form on the front page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
// Handle the form submission
app.post('/name', (req, res) => {
  const { first, last } = req.body;
  res.json({ name: `${first} ${last}` });
});

 module.exports = app;
