var express = require('express')
;
var server = express() 
;
var fs = require('fs')
;

server.get('/home.html', function(req,res) {
	res.setHeader('Content-Type' , 'text/html');
	var stream = fs.createReadStream(__dirname + "/public/home.html");
	stream.pipe(res);
});
server.get('/newalbum.html', function(req,res) {
	res.setHeader('Content-Type' , 'text/html');
	var stream = fs.createReadStream(__dirname + "/public/newalbum.html");
	stream.pipe(res);
});
server.get('/login.html', function(req,res) {
	res.setHeader('Content-Type' , 'text/html');
	var stream = fs.createReadStream(__dirname + "/public/login.html");
	stream.pipe(res);
});
server.get('/register.html', function(req,res) {
	res.setHeader('Content-Type' , 'text/html');
	var stream = fs.createReadStream(__dirname + "/public/register.html");
	stream.pipe(res);
});
server.listen(3000);