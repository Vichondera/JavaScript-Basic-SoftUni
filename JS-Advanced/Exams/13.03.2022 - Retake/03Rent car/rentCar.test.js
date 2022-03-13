const solve = require("./rentCar.js");
const expect = require('chai').expect;

describe('[TEST 1] solve func', () => {
    
    it('Test 1',() => {
        expect(solve(param)).to.equal(undefined);
    });
    
    it('Test 2', () => {
        expect(solve(2)).to.equal('even');
    });
    
    it('Test 3', () => {
        expect(solve(3)).to.equal('odd');
    });
});