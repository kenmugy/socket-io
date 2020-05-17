const express = require('express');
const app = express();
const server = require('http').createServer(app);

const port = process.env.PORT || 3003;

server.listen(port, () => console.log(`app listenin on port ${port}`));
