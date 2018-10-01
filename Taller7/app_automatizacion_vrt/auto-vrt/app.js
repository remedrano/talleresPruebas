var express = require('express');
var app = express();

app.get('/', function (req, res) {
  
	var fs = require('fs'); 
	var resemble = require('node-resemble-js');
	res.send("Ejemplo");

});

app.get('/cypress', function (req, res) {
  
	var fs = require('fs'); 
	var resemble = require('node-resemble-js');
	res.send("Ejemplo");

});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
