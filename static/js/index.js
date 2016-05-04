$(document).ready(function() {
    var socket = io();
    
    socket.on('admin drop', function(data) {
        console.log('admin dropped');
    });
});