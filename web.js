var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var contentBuffer = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(contentBuffer.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
