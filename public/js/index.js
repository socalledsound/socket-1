var socket = io();
var incomingMessage;
socket.on('connect',function (){
    console.log('connected to server');

    socket.emit('createMessage', {
        from:'Henry',
        message:'hey there'
    })

});

socket.on('disconnect', function (){
    console.log('disconnected from server');
})

socket.on('newMessage', function(message){

    incomingMessage = document.createElement("P");    
    incomingMessage.innerHTML = message.message;
    document.body.appendChild(incomingMessage);
    console.log('new message:', message);
})