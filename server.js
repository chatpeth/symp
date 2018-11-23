const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

// Re-write 11232018
var server = express();


const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

server.use(express.static('public'));

server.get('/', function(req, res){
  console.log(__dirname);
  res.sendFile(__dirname + "/" + "index.html");
});

//login
server.get('/process_get', function(req, res){
  response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

server.get('/lamp', function(req, res){
	console.log("req lamp received");
	res.sendFile(__dirname + "/" + "chart.html");

});
server.use((req, res) => res.sendFile(INDEX) );
server.listen(PORT, () => console.log(`Listening on ${ PORT }`));


const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});
