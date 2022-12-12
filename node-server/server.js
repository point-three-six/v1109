// imports
const db = require('./db');
const ws = require('ws');
const express = require('express');
const path = require('path');

// express app
const app = express();

// web-socket server
const wss = new ws.Server({ noServer: true });
wss.on('connection', socket => {
  // send initial payload for visitors log
  db.getVisitors().then((results) => {
    socket.send({
      action : 'visitors',
      payload : JSON.stringify(results)
    });
  });

  socket.on('message', message => console.log(message));
});

// init express app settings
app.use(express.static(path.join(__dirname, 'react-app/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'react-app/build', 'index.html'));
});

// start server
const server = app.listen(9000, () => {
    console.log('VSL server started on port 9000.');
});

// allow websocket server to listen
server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, socket => {
        wss.emit('connection', socket, request);
    });
});