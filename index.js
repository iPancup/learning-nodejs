var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.end("hay....");
});

app.listen(process.env.PORT || 4000, function(){
    console.log("Running in port 8000");
});