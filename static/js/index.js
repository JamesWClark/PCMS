$(document).ready(function() {
    var socket = io();
    
    socket.on('admin drop', function(data) {
        alert('admin dropped');
        console.log('admin drop');
    });
    
    socket.on('welcome', function(msg) {
        console.log(msg);
    });
    
    socket.on('send', function(msg) {
        alert('send = ' + msg);
    });
    
    socket.on('msg', function(msg) {
        alert(msg);
        console.log(msg);
    });
});