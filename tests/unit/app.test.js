const start = require('../../app.js');

describe('app.js', () => {
    // ENV
    it('should get data from ENV file', () => {
        expect(typeof process.env.SERVER_PORT).toBe('string');
    });    
});