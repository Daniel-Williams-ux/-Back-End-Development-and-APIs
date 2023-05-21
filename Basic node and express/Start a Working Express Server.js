let express = require('express');
let app = express();
console.log('Hello World');

//Start a Working Express Server
app.get('/', function(req, res) {
  res.send('Hello Express')
})
