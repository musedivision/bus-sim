"use strict";

const assert = require('assert');
const MOVE = require('../src/cmd_move.js');

// The bus must not exit the carpark during movement.


describe('INVALID MOVE COMMAND', function() {

    describe('DONT MOVE - should not move bus if move would make them exit carpark', function () {

        it('should not move bus outside carpark NORTH', function(){

            const { state } = MOVE({ x: 0, y: 5, facing: "NORTH" });

            assert.equal(state.y, 5);
            assert.equal(state.x, 0);
        }),

        it('should not move bus outside carpark SOUTH', function(){

            const { state } = MOVE({ x: 0, y: 0, facing: "SOUTH" });

            assert.equal(state.y, 0);
            assert.equal(state.x, 0);
        }),

        it('should not move bus outside carpark EAST', function(){

            const { state } = MOVE({ x: 5, y: 0, facing: "EAST" });

            assert.equal(state.y, 0);
            assert.equal(state.x, 5);
        }),

        it('should not move bus outside carpark WEST', function(){

            const { state } = MOVE({ x: 0, y: 0, facing: "WEST" });

            assert.equal(state.y, 0);
            assert.equal(state.x, 0);
        })
    })
});