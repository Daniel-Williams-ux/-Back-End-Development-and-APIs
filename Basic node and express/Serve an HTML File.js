app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html')
})
