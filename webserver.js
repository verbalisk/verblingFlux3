var express = require('express')
var app = express()

app.use(express.static('../../'));

var server = app.listen(5000, function () {
  console.log('Express web server listening on port 5000');
});