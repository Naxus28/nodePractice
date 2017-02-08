// Note: after we spin up the server we can lauch a client from the browser by visiting 'localhost:<portnumber>'
// or by opening a separate terminal window and running the telnet command followed by 'localhost' and the port number that points to the server: i.e. 'telnet localhost 3000'
// if we do it this way we can pass data by typing on the command line and pressing enter

// see more here: https://nodejs.org/api/net.html#net_class_net_server

// require the node.js net module
var net = require('net');

//There are multiple ways to create the server
//FIRST WAY
var server = net.createServer(function(socket){
  // fire a console message when a client connects
  console.log('client connected');
  // listen for the data event

  socket.on('data', function(d){
    // print the data received out to the console
    console.log('data received: ' + d.toString());
  });

  // listen for the end event
  socket.on('end', function(){
    // print a message stating the client disconnected
    console.log('client disconnected');
  });
});

// setup the server to listen on your required port/address
server.listen(3000, function(){
  // print out a message indicating the server has started
  console.log('server started');
});

//optionally, include a specific IP address
server.listen(3000, '192.168.1.1', function(){
  console.log('server started');
});


//SECOND WAY
var server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log('data: ', data.toString());
  });

  socket.on('end', () => {
    console.log('goodbye\n');
  });
  // socket.end('goodbye\n');
}).on('error', (err) => {
  // handle errors here
  throw err;
});

// grab a random port or pass the port as the first argument (before the callback)
server.listen(3000, () => {
  console.log('opened server on', server.address());
});