const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Re-write 11232018
var server = express();


const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: false }));

server.get('/', function(req, res){
  
  res.sendFile(__dirname + "/" + "homepage.html");
});

server.get('/index', function(req, res){
  console.log(__dirname);
  res.sendFile(__dirname + "/" + "index.html");
});

server.get('/powermeter', function(req, res){
  
  res.sendFile(__dirname + "/" + "powermeter.html");
});

server.get('/office', function(req, res){
  
  res.sendFile(__dirname + "/" + "office.html");
});

server.get('/gauge', function(req, res){
  console.log(__dirname);
  res.sendFile(__dirname + "/" + "gauge.html");
});

server.get('/live/powermeter', function(req, res){
  
  res.sendFile(__dirname + "/live/" + "powermeter.html");
});

server.get('/live/rm266', function(req, res){
  
  res.sendFile(__dirname + "/live/" + "rm266.html");
});

server.get('/rm266', function(req, res){
  console.log(__dirname);
  res.sendFile(__dirname + "/rm266.html");
});

server.get('/bill', function(req, res){
 
  res.sendFile(__dirname + "/bill.html");
});

server.get('/design', function(req, res){
  
  res.sendFile(__dirname + "/mycss.html");
});

server.get('/mqtt', function(req, res){
  
  res.sendFile(__dirname + "/mymqtt.html");
});

server.get('/rm100', function(req, res){
  
  res.sendFile(__dirname + "/rm100.html");
});

server.get('/symp', function(req, res){
  console.log("req symp received");
  res.sendFile(__dirname + "/symp.html");
});

server.get('/5610110106', function(req, res){
  console.log("req 5610110106 received");
  res.sendFile(__dirname + "/5610110106.html");
});

//login
server.post('/home', function(req, res){

  console.log(req.body.uname);
  console.log(req.body.pwd);
/*
  if((req.body.uname == "chatpeth") && (req.body.pwd == "pweng_0406"))
  {
	  res.sendFile(__dirname + "/" + "lamp.html");
  }
  else
  {
	response = {
		username: "Incorect username or password of " + req.body.uname,
	};
	console.log(response);
	res.end(JSON.stringify(response));
  }
  */
	response = {
		username: req.body.uname,
	};
	res.end(JSON.stringify(response));
  
});

server.use(function (req, res, next) {
  res.status(404).send("(404) Page not found!")
});

server.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('(500) Server error!!')
});

//server.use((req, res) => res.sendFile(INDEX) );
server.listen(PORT, () => console.log(`Listening on ${ PORT }`));


