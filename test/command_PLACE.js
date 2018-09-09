"use strict";

const assert = require('assert');
const app = require('../src/index.js')

// PLACE will put the bus in the carpark in position X,Y and facing NORTH, SOUTH,
// EAST or WEST

let state0 = app.initState();

describe('PLACE COMMAND', function() {

    describe('Input PLACE X,Y,F command into bus sim and then REPORT its position', function () {

        it('should return state PLACE 0,1,NORTH', function(){

            let { state } = app.runCommand(state0, "PLACE 0,1,NORTH");

            assert.deepEqual(state, { x: '0', y: '1', facing: 'NORTH' });

        }),

        it('should return text "0,1,NORTH" ', function(){

            let { state } = app.runCommand(state0, "PLACE 0,1,NORTH");
            let { output } = app.runCommand(state, "REPORT");

            assert.equal(output, '0,1,NORTH');

        })
    })
});