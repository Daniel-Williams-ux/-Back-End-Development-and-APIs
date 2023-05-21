let express = require('express');
let app = express();
console.log('Hello World');

//Serve an HTML File
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

//Serve Static Assets
//express.static(__dirname + "/public") --> middleware mounted on app.use()
app.use("/public", express.static(__dirname + "/public"));
