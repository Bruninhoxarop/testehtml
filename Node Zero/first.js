// NodeJS

//Escrevendo no terminal via CLI
console.log('Hello World');
console.log('O resultado é apresentado no CLI - Command Line Interface')

//ativando servidor web
var http = require('http'); //Inclua os modulos que serão utilizados aqui

http.createServer(function (req, res) { //Acessando o modulo HTTP e criando o servidor.
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World! PC Professor!');
}).listen(3000);