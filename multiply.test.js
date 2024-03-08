const multiply = require("./multiply");

describe('multiply test', () => {
    it('should return the multiply result', () => {
        expect(multiply(2, 2)).toBe(4);
    });
});