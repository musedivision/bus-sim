"use strict";

const assert = require('assert');
const app = require('../src/index.js');


let state0 = app.initState();

describe('INVALID PLACE COMMAND', function() {

    describe('The application should discard all commands in the sequence until a valid PLACE command has been executed.', function () {

        it('should not change state if facing is INVALID', function(){

            let { state } = app.runCommand(state0, "PLACE 0,1,df");

            assert.deepEqual(state, state0);

        })

    })
});