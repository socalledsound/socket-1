var socket = io();
var incomingMessage;
var timeStamp;
socket.on('connect',function (){
    console.log('connected to server');

    // socket.emit('createMessage', {
    //     from:'Henry',
    //     text:'hey there'
    // })

});

socket.on('disconnect', function (){
    console.log('disconnected from server');
})

socket.on('newMessage', function(message){
    
    timeStamp = document.createElement("P");

    incomingMessage = document.createElement("P");    
    incomingMessage.innerHTML = message.from + ":" + message.text;
    incomingMessage.style.backgroundColor = 'grey';
    incomingMessage.style.padding = '10px';
    incomingMessage.style.width = '200px';
    document.body.appendChild(incomingMessage);

   

    console.log('new message:', message);
})