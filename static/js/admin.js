$(document).ready(function () {
    
    var socket = io();

    var users = {};
    
    var iterateUsers = function() {
        var html = '';
        for(var email in users) {
            if(users.hasOwnProperty(email)) {
                var user = users[email];
                console.log('has = ' + user);
                html += '<div class="flex">';
                //if(user.online) {
                    html += '<div class="inline">'; 
                        html += '<img src="' + user.image + '">';
                    html += '</div>';
                    html += '<div class="inline">'; 
                        html += '<div class="block">' + user.name + '</div>';
                        html += '<div class="block">' + user.email + '</div>';
                    html += '</div>';
                //}
                html += '</div>';
            }
        }
        $('#user-list').html(html);        
    };
    
    $('#activities > div').click(function() {
        var command = $(this).text();
        
        socket.emit('view change', command);
        
    });
    
    socket.on('admin user update', function(googleUser) {
        users[googleUser.email] = googleUser;
        iterateUsers();
    });
    
    socket.on('admin connected', function(data) {
        users = data;
        iterateUsers();
    });
});