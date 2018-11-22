var express = require('express');
var app = express();

app.use(express.static('public'));


app.get('/index', function(req, res){
  console.log(__dirname);
  res.sendFile(__dirname + "/" + "index.html");
})

app.get('/chart', function(req, res){
        console.log("got req chart");
        res.sendFile(__dirname + "/" + "chart.html")
})

app.get('/process_get', function(req, res){
  response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(3000, function(){
  console.log("Server running on port 3000");
})
