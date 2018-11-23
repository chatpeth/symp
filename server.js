const express = require('express');
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
	/*
  response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
  */
  console.log(req.query.uname);
  console.log(req.query.pwd);
  if((req.query.uname == "chatpeth") && (req.query.pwd == "pweng_0406"))
  {
	  res.sendFile(__dirname + "/" + "chart.html");
  }
  else
  {
		response = {
		username: "Incorect username or password of " +req.query.uname,
	};
	console.log(response);
	res.end(JSON.stringify(response));
  }
  
});


//server.use((req, res) => res.sendFile(INDEX) );
server.listen(PORT, () => console.log(`Listening on ${ PORT }`));


