const express = require('express')
var http = require('http');
var fs = require('fs');
var https = require('https');


var privateKey = fs.readFileSync('../sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('../sslcert/server.crt', 'utf8');

var credentials = { key: privateKey, cert: certificate, requestCert: false, rejectUnauthorized: false };
const app = express()
express.static.mime.define({ 'application/wasm': ['wasm'] });
app.use(express.static(__dirname + '/'));

var server = https.createServer(credentials, app).listen(3000, function () {
    console.log("server started at port 3000");
});