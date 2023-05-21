let express = require('express');
let app = express();
// console.log('Hello World');

// 1. Start a Working Express Server
app.get('/', function(req, res) {
  res.send('Hello Express')
})

app.get("/json", (req, res) => {
  const mySecret = process.env.MESSAGE_STYLE;
  let message = 'Hello json';
  if (mySecret === 'uppercase') {
    message = message.toUpperCase();
    console.log(message)
  }
  res.json({  message: message});
});


/If not using replit
/*If you are working locally, you will need the dotenv package. It loads environment variables from your .env file into process.env. 
The dotenv package has already been installed, and is in your project's package.json file. At the top of your myApp.js file, add require('dotenv').config() 
to load the environment variables.*/
