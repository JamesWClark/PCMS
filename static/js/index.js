$(document).ready(function() {
    window.socket = io();
    
    var dycss = $('#dynamic-stylesheets');
    var dyjs  = $('#dynamic-scripts');
    var dyhtm = $('#dynamic-content');
    
    var loadContent = function(filename) {
        var html = '/protos/' + filename + '.html';
        var css = '<link rel="stylesheet" href="/static/css/' + filename + '.css">';
        var js = '<script src="/static/js/' + filename + '.js"></script>';
        
        $.get(html, function(content) {
            dyhtm.html(content);
        }).then(function() {
            dycss.html(css);
            dyjs.html(js);
        });
    };
    
    socket.on('view change', function(command) {
        
        dyhtm.html('');
        dycss.html('');
        dyjs.html('');
                
        if(command === 'Speed Reader') {
            loadContent('speed-reader');            
        } else if (command === 'Typing Test') {
            loadContent('keyboard');
        } else if (command === 'Ace Processing') {
            loadContent('ace-processing');
        } else {
            
        }
    });
});