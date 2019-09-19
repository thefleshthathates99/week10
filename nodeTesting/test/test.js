var assert = require('assert'); //link in assertion library

var linear = require("../index.js");

describe('Tests for Linear Functions', () => {
    describe('Test Case 1',() => {
        it('m = 2, x = 1, c = 4 should return 6', () => {
            assert.equal(linear(2,1,4), 6);
        });
    });
    describe('Test Case 2',() => {
        it('m = 2, x = 0, c = 4 should return 4', () => {
            assert.equal(linear(2,0,4), 4);
        });
    });
    describe('Test Case 3',() => {
        it('m = 2, x = -1, c = 4 should return 2', () => {
            assert.equal(linear(2, -1, 4), 2);
        });
    });
});