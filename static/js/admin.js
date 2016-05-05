$(document).ready(function () {
    
    var socket = io();

    $('#activities > div').click(function() {
        var command = $(this).text();
        
        socket.emit('view change', command);
        
    });
    
});