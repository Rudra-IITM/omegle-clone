import { Socket } from "socket.io";

const http = require('http')
const express = require('express');
const { Server } = require('socket.io')

const port = 3000;
const app = express();
const server = http.createServer(http);

const io = new Server(server);

io.on('connection', (socket: Socket) => {
    console.log('a user connected')
});

server.listen(port, () => {
    console.log(`Listening to port ${port}`)
})