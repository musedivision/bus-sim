"use strict";

const assert = require('assert');
const app = require('../src/index.js');
const MOVE = require('../src/cmd_move.js');

// MOVE will move the bus one unit forward in the direction it is currently facing.


describe('MOVE COMMAND', function() {

    describe('MOVE - move the bus 1 unit forward in the direction it is currently facing ', function () {

        it('should move bus 1 unit NORTH', function(){

            const { state } = MOVE({ x: 0, y: 0, facing: "NORTH" });

            assert.equal(state.y, 1);
            assert.equal(state.x, 0);
        }),

        it('should move bus 1 unit EAST', function(){

            const { state } = MOVE({ x: 2, y: 0, facing: "EAST" });

            assert.equal(state.y, 0);
            assert.equal(state.x, 1);
        }),

        it('should move bus 1 unit SOUTH', function(){

            const { state } = MOVE({ x: 0, y: 1, facing: "SOUTH" });

            assert.equal(state.y, 0);
            assert.equal(state.x, 0);
        }),

        it('should move bus 1 unit WEST', function(){

            const { state } = MOVE({ x: 0, y: 0, facing: "WEST" });

            assert.equal(state.x, 1);
            assert.equal(state.y, 0);
        })
    })
});