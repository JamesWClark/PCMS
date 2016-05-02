var express = require('express');
var app = express();
var fs = require('fs');

app.use('/static', express.static(__dirname + '/static'));
app.use(express.static(__dirname + 'site'));

app.get('/', function(req,res) {
    fs.readFile('./site/index.html', function(err, data) {
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.end(data, 'utf-8');
    });
});

app.listen(process.env.PORT || 1898, function() {
    console.log('listening on 1898');
});