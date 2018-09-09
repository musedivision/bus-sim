"use strict";

const assert = require('assert');
const app = require('../src/index.js');
const MOVE = require('../src/cmd_move.js');

// MOVE will move the bus one unit forward in the direction it is currently facing.

describe('MOVE COMMAND', function() {

    describe('MOVE - move the bus 1 unit forward in the direction it is currently facing ', function () {

        it('should move command should move bus along 1 unit', function(){

            const start_position = { x: 0, y: 0, facing: "NORTH" };

            const { state } = MOVE(start_position);

            assert.equal(state.y, 1, 'should have moved north 1');

        })
    })
});