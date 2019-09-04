var http = require('http');
var port = process.env.PORT || 9000;

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('{ "success:true", "data:Index", "message:Hello World", "code:200"}');
}).listen(port,'127.0.0.1');
