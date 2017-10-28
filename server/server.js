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
        from: messageSender,
        message: messageText
        // createdAt: messageTime
    });

    socket.on('createMessage', (newMessage) => {
        messageSender = newMessage.from;
        messageText = newMessage.message;
        // messageTime = something; 
        console.log('create message', newMessage);
    })

    socket.on('disconnect', ()=>{
        console.log('message');
    })

})

server.listen(port, ()=> {
    console.log(`server running on ${port}`);
})
