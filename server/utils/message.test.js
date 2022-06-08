const expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Raluca';
        var text = 'Hey babe';
        var res = generateMessage(from, text);

        expect(res.from).toBe(from);
        expect(res.text).toBe(text);
        expect(typeof res.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Admin';
        var lat = 1;
        var long = 2;
        var res = generateLocationMessage(from, lat, long);

        expect(res.from).toBe(from);
        expect(res.url).toBe('https://google.com/maps?q=1,2');
        expect(typeof res.createdAt).toBe('number');
    });

});