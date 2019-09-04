var http;

http.createServer(function(req,res){
    res.end('{ "success:true", "data:Index", "message:Hello World", "code:200"}');
})

app.listen(process.env.PORT || 3000, function(){
    console.log('Your node js server is running');
});
