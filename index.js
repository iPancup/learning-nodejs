var express = require('express');
var app = express();

app.get('/', function(req,res) {
    res.send('Hello Rafiuddd');
})

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});
