var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/static', express.static(__dirname + '/static'));
app.use('/', express.static(__dirname + '/site'));



var currentApp = '';

var users = {};
var user = {};


io.on('connection', function(socket) {
    
    var clientIp = socket.request.connection.remoteAddress;
    console.log(clientIp);
    
    io.emit('view change', currentApp);
    
    console.log('user connected');    
    
    socket.on('disconnect', function() {
        console.log('user disconnected');
        try {
            users[socket.user.email].online = false;
        } catch(err) {
            console.log('caught an error disconnecting a user');
        }
    });
    
    socket.on('view change', function(command) {
        currentApp = command;
        console.log(command);
        io.emit('view change', command);
    });
    
    socket.on('key send', function(data) {
        console.log(data.timestamp + ': ' + data.key + '|' + data.was);
    });
    
    socket.on('user', function(user) {
        socket.user = user;
        user.online = true;
        user.ip = clientIp;
        users[user.email] = user;
        io.emit('admin user update', user);
    });
    
    socket.emit('admin connected', users);
});













http.listen(process.env.PORT || 1898, function() {
    console.log('hosting from ' + __dirname);
    console.log('listening on 1898');
});
