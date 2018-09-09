"use strict";

const assert = require('assert');
const app = require('../src/index.js');

// REPORT will announce the X,Y and F of the bus. This can be in any form, but
// standard output is sufficient.

describe('REPORT COMMAND', function() {

    describe('REPORT should return the X,Y,F of the bus', function () {

        it('should return a string', function(){

            const commands = [
                "PLACE 0,1,NORTH",
                "REPORT"
            ];

            const {state, output} = commands.reduce((currentState, cmd) => {
                return app.runCommand(currentState, cmd)
            }, app.initState());

            assert.equal(typeof output, 'string');

        })
    })
});