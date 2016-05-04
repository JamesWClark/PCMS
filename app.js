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
    
    // when a user connects, send this message to the other users only (but not this user)
    socket.broadcast.emit('msg', "Oh Hai! You're here!");
    
    
    
    socket.on('admin drop', function(data) {
        
        console.log('admin dropped!!');
        io.emit('admin drop', data);
    });
    
    socket.on('send', function(msg) {
        console.log(msg);
        io.emit('msg', "another user got F'd");
    });
    
    
});













http.listen(process.env.PORT || 1898, function() {
    console.log('hosting from ' + __dirname);
    console.log('listening on 1898');
});
