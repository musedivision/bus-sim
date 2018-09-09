"use strict";

const assert = require('assert');
const TURN = require('../src/cmd_turn.js');

// LEFT and RIGHT will rotate the bus 90 degrees in the specified direction without
// changing the position of the bus.

const testTurn = (fn) => {
    return (from, expected) => {
        const initialState = { x: 0, y: 0, facing: from };
        const { state: { y, x, facing} } = fn(initialState);

        assert.equal(y, initialState.y);
        assert.equal(x, initialState.x);
        assert.equal(facing, expected, `turning from ${expected}`);
    }
};


describe('LEFT RIGHT COMMANDs', function() {

    describe('TURN - rotate the bus 90 degrees in the specified direction', function () {

        it('should turn bus LEFT ', function(){

            const leftTest = testTurn(TURN.left);

            leftTest("NORTH", "WEST");
            leftTest("WEST", "SOUTH");
            leftTest("SOUTH", "EAST");
            leftTest("EAST", "NORTH");
        }),

        it('should turn bus RIGHT ', function(){

            const rightTest = testTurn(TURN.right);

            rightTest("NORTH", "EAST");
            rightTest("EAST", "SOUTH");
            rightTest("SOUTH", "WEST");
            rightTest("WEST", "NORTH");
        })
    })
});