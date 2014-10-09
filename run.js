var http = require('http');
var fs = require('fs');
var contextify = require('contextify');

var message = "Hello Consodroid\n";

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(message);
});
server.listen(3000);

setTimeout(function() {
  fs.writeFileSync("/data/data/hu.hendricha.consodroid/files/accessControl/10.0.0.4", "");
  message += "Wrote file";
}, 5000);
