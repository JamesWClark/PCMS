var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/static', express.static(__dirname + '/static'));
app.use('/', express.static(__dirname + '/site'));

/*
app.get('/', function(req, res){
  res.sendFile(__dirname + '/site/index.html');
});


app.get('/admin', function(req, res){
  res.sendFile(__dirname + '/site/admin.html');
});
*/







io.on('connection', function(socket) {
    
    
    console.log('user connected');    
    
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
    
    socket.on('view change', function(command) {
        console.log(command);
        io.emit('view change', command);
    });

});













http.listen(process.env.PORT || 1898, function() {
    console.log('hosting from ' + __dirname);
    console.log('listening on 1898');
});
