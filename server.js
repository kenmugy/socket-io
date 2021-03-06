const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);

const port = process.env.PORT || 3003;
app.use(express.static(path.join(__dirname, 'public')));

// add socket functionality
const io = require('socket.io')(server);
io.on('connection', (socket) => {
  socket.on("chat", data => {
      io.sockets.emit("chat", data)
  })
  socket.on("typing", name => {
      socket.broadcast.emit("typing", name)
  })
});

server.listen(port, () => console.log(`app listenin on port ${port}`));
