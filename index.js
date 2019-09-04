var express = require('express');
var app = express();

app.get('/', function(req,res) {
    res.send('{"success:true", "data:Index", "message:Hello World", "code:200"}');
})

app.listen(process.env.PORT || 3000, function(){
    console.log('Your node js server is running');
});
