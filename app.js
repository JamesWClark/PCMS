var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/static'));
app.use('/', express.static(__dirname + '/site'));

app.listen(process.env.PORT || 1898, function() {
    console.log('hosting from ' + __dirname);
    console.log('listening on 1898');
});