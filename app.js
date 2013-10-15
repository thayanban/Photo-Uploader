var express = require('express')
;
var app = express()
;
var fs = require('fs')
;
var lib = require('./lib')
;
app.use(express.bodyParser());
app.get('/home.html', function(req, res) {
	res.setHeader('Content-Type' , 'text/html');
	var stream = fs.createReadStream(__dirname + "/public/home.html");
	stream.pipe(res);
});
app.get('/newalbum.html', function(req, res) {
	res.setHeader('Content-Type' , 'text/html');
	var stream = fs.createReadStream(__dirname + "/public/newalbum.html");
	stream.pipe(res);
});
app.get('/login.html', function(req, res) {
	res.setHeader('Content-Type' , 'text/html');
	var stream = fs.createReadStream(__dirname + "/public/login.html");
	stream.pipe(res);
});
app.get('/register.html', function(req, res) {
	res.setHeader('Content-Type' , 'text/html');
	var stream = fs.createReadStream(__dirname + "/public/register.html");
	stream.pipe(res);
});
app.post('/photo-upload', function(req, res){
    var image = req.body
    , albumName = image.alname
    , imageName = image.fname
    ;
app.listen(3000);