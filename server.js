const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);

const port = process.env.PORT || 3003;
app.use(express.static(path.join(__dirname, 'public')));

server.listen(port, () => console.log(`app listenin on port ${port}`));
