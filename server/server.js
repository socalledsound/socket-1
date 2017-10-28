const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

var messageSender='nil';
var messageText = 'nil';
var messageTime = 'nil';

app.use(express.static(publicPath));

io.on('connection', (socket)=> {
    console.log('new user connected');

    socket.emit('newMessage', {
        from: 'admin',
        text: 'welcome to the chat',
        createdAt: new Date().getTime()
        // createdAt: messageTime
    });

    socket.broadcast.emit('newMessage', {
            from: 'admin',
            text: 'a new user joined',
            createdAt: new Date().getTime()
        })

    socket.on('createMessage', (newMessage) => {
        console.log('create message', newMessage);

        io.emit('newMessage', {
            from: newMessage.from,
            text: newMessage.text,
            createdAt: new Date().getTime()
        });    

        // socket.broadcast.emit('newMessage', {
        //     from: newMessage.from,
        //     text: newMessage.text,
        //     createdAt: new Date().getTime()
        // })

    });

    socket.on('disconnect', ()=>{
        console.log('message');
    });
});

server.listen(port, ()=> {
    console.log(`server running on ${port}`);
})
