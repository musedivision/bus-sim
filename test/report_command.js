"use strict";

const assert = require('assert');
const app = require('../src/index.js');

// REPORT will announce the X,Y and F of the bus. This can be in any form, but
// standard output is sufficient.

const state0 = app.initState();

describe('REPORT COMMAND', function() {

    describe('REPORT should return the X,Y,F of the bus', function () {

        it('should return a string', function(){

            let { state } = app.runCommand(state0, "PLACE 0,1,NORTH");
            let { output } = app.runCommand(state, "REPORT");

            assert.equal(output, '0,1,NORTH');

            assert.equal(typeof output, 'string');

        }),


        it('should not return a output if there is not placed bus', function(){

            const { output } = app.commands["REPORT"](state0);

            assert.equal(output, undefined);
        })

        // it('should not return a placed bus until there is valid place command', function(){
        //
        //     let { state } = app.runCommand(state0, "PLACE 0,1,INVALID");
        //     let { output } = app.runCommand(state, "REPORT");
        //
        //
        //     assert.equal(output, undefined);
        //
        //     assert.equal(typeof output, 'string');
        //
        // })
    })
});