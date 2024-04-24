const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: { // handling CORS is easy with Socket.io
        origin: "https://projectgames.000.pe",
        methods: ["GET", "POST"]
    }
})
const port = process.env.PORT || 3000

let numberUser = 0;

server.listen(port, () => {
    console.log("Server listening at port %d", port);
})

io.on('connection', socket => {
    console.log("a user is connected")
    ++numberUser

    socket.on('send-msg', (msg, username) => {
        socket.broadcast.emit('received-msg', msg, username)
    })

    socket.on('disconnect', () => {
        console.log("a user disconnected")
        --numberUser
        io.emit('user-count', numberUser)
    })

    io.emit('user-count', numberUser)
})