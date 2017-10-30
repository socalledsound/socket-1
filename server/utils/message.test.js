var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', ()=> {

    it('should gernerate correct message object', ()=> {
        var from = 'Jen';
        var text = 'a message for Rudy';
        var message = generateMessage(from,text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});