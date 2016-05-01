
var http = require('http');
var fs = require('fs');
var data = fs.readFileSync('./site/index.html', 'UTF8', function(err) {
    if(err) throw err;
});

var server = http.createServer(function(req,res) {
    res.writeHead(200, { 'Content-Type' : 'text/html'});
    res.end(data);
}).listen(process.env.PORT || 8888);
