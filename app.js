var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/static', express.static(__dirname + '/static'));
app.use('/', express.static(__dirname + '/site'));

io.on('connection', function(socket) {
    console.log('user connected');
    
    socket.on('admin drop', function(options) {
        console.log('admin dropped!!');
        socket.broadcast.emit('admin drop', { data : options });
    });
});

http.listen(process.env.PORT || 1898, function() {
    console.log('hosting from ' + __dirname);
    console.log('listening on 1898');
});
