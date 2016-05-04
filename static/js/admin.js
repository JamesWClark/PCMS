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

    $('.sortable').sortable({ revert : false });
    
});