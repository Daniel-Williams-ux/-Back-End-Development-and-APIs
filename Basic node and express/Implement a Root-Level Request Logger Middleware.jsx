et express = require('express');
let app = express();
// console.log('Hello World');

// 1. Start a Working Express Server
app.get('/', function(req, res) {
  res.send('Hello Express')
})

app.use((req, res, next) => {
  const { method, path, ip } = req;
  console.log(`${method} ${path} - ${ip}`);
  next();
});
 //or

app.use((req, res, next) => {
  const method = req.method;
  const path = req.path;
  const ip = req.ip;
  console.log(method + ' ' + path + ' - ' + ip);
})
