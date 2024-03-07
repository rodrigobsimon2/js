const subtract = require('./subtract');

describe('subtract test', () => {
    it('should return the subtraction result', () => {
        expect(subtract(10, 10)).toBe(0);
    });
});
