
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	  res.sendFile(__dirname + '/index.html');
});

app.get('/blink', function(req, res){
	if (emit_blink != null) {
		emit_blink();
	}	
	res.end();
});

http.listen(3000, function(){
	  console.log('listening on *:3000');
});

var clients = [];

var emit_blink = null;
io.on('connection', function(socket) {
	console.log('a user connected');
	clients.push(socket);
	
	emit_blink = function() {
		console.log('issuing blink to everyone');
		io.emit('blink', { for: 'everyone' });
	};

	socket.on('disconnect', function() {
		console.log('user disconnected');
		clients.forEach(function (client, index) {
			if (clients[index] == socket) {
				clients.splice(index, 1);
			}
		});

	});
});
