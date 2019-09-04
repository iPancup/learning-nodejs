var http = require('http');

http.createServer('/', function(req,res,next) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('{"success:true", "data:Index", "message:Hello World", "code:200"}');
}).listen(process.env.PORT || 3000);