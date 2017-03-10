/**
 * Created by User on 2017.03.10..
 */
var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.write('<p>Hello world!</p>');
    res.end();
});
var port = 3000;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});