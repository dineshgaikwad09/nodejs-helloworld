var express = require('express');
var app = express();

app.get('/', function(req, res) {
 res.send('Demo App!!');
});

app.listen(8080, function() {
 console.log("Server is running at 8080 port!");
});