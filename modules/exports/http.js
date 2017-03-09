var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('hi');
    res.end('bye');
}).listen('9090', '127.0.0.1');


