$(document).ready(function () {
    
    var socket = io();

    $('.draggable').draggable({
        connectToSortable : '.sortable',
        revert : false,
        helper : "clone",
        revertDuration : 100,
    });

    $('#plan').droppable({
        drop : function(event, ui) {
            $(ui.draggable).removeAttr('style');
            var options = {
                a : 'A',
                b : 'B'
            };
            socket.emit('admin drop', { data : options });
        }
    });
    
    $('#send').click(function() {
        socket.emit('send', 'i send you ...');
    });

    $('.sortable').sortable({ revert : false });
    
    socket.on('msg', function(msg) {
        console.log(msg);
    });
    
});