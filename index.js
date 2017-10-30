/*var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));

// views is directory for all template files
app.set('src', __dirname + '/src');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('src/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});*/

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);