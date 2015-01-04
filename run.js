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
  console.log("Wrote access control file");
}, 5000);

setTimeout(function() {
  fs.writeFileSync("/data/data/hu.hendricha.consodroid/files/apkInstallRequests/install-1234", "/some/apk/that/does/not/exist.apk\n");
  console.log("Wrote install request file");
}, 10000);

setTimeout(function() {
  fs.writeFileSync("/data/data/hu.hendricha.consodroid/files/apkInstallRequests/uninstall-1234", "hu.hendricha.ultimate.application\n");
  console.log("Wrote uninstall request file");
}, 15000);

setTimeout(function() {
  console.log("Closing");
  process.exit();
}, 20000);
