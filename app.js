var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

var matrix = require("./modules/matrix");
console.log(matrix);
io.on('connection', function (socket) {
    socket.emit("firstMatrix", matrix);
});


