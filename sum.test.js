const sum = require('./sum')

describe('sum test', () => {
    it('should return the result of the sum', () => {
        expect(sum(10, 10)).toBe(20);
    });
});