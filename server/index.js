const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, '../client')));

io.on('connection', (socket) => {
    console.log('A player connected:', socket.id);

    socket.on('diceRolled', (roll) => {
        socket.broadcast.emit('playerRolled', roll);
    });

    socket.on('disconnect', () => {
        console.log('A player disconnected:', socket.id);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
});
