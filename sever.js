const express = require('express')
const { join } = require('node:path');
const { Server } = require('socket.io');

const http = require('http');

const app = express()

const sever = http.createServer(app)

const io = new Server(sever)


app.get('/' , (req,res) =>{
    res.sendFile(join(__dirname, 'index.html'));
})

io.on('connection', (socket) => {
    console.log('a user connected');
});


app.listen(3000, ()=> {
    console.log('listen on host:')
})