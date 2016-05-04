$(document).ready(function () {
    
    $('.draggable').draggable({
        connectToSortable : '.sortable',
        revert : false,
        helper : "clone",
        revertDuration : 100,
    });
    
    $('#plan').droppable({
        drop : function(event, ui) {
            $(ui.draggable).removeAttr('style');
        }
    });
    
    $('.sortable').sortable({ revert : false });
});