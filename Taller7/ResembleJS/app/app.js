var express = require('express');
var app = express();

app.get('/', function (req, res) {
  
var fs = require('fs'); 
var resemble = require('node-resemble-js');


var api = resemble("buscarMateria.js/materia1.png").onComplete(function(data) {
    console.log(data);
});

//Ejecucion de comparacion buscarMateria.js
var img1 = fs.readFileSync('buscarMateria.js/materia1.png');
var img2 = fs.readFileSync('buscarMateria.js/materia2.png');

resemble(img1).compareTo(img2).ignoreNothing().onComplete(function (data) {
    data.getDiffImage().pack().pipe(fs.createWriteStream( '../screenshots_resultados/diff_materia.png'));
    console.log(data);
});

//Ejecucion de comparacion buscarProfesor.js
var img1 = fs.readFileSync('buscarProfesor.js/profesor1.png');
var img2 = fs.readFileSync('buscarProfesor.js/profesor2.png');

resemble(img1).compareTo(img2).ignoreNothing().onComplete(function (data) {
    data.getDiffImage().pack().pipe(fs.createWriteStream( '../screenshots_resultados/diff_profesor.png'));
    console.log(data);
});

//Ejecucion de login.js
var img1 = fs.readFileSync('login.js/login1.png');
var img2 = fs.readFileSync('login.js/login2.png');

resemble(img1).compareTo(img2).ignoreNothing().onComplete(function (data) {
    data.getDiffImage().pack().pipe(fs.createWriteStream( '../screenshots_resultados/diff_login.png'));
    console.log(data);
});
//res.send( api );

res.send( "Se ejecuron todas las pruebas por favor verifique la carpeta de resultados -screenshots_resultados-" );

});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

