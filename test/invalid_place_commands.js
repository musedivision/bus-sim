"use strict";

const assert = require('assert');
const handler = require('../src/command_handler');


let state0 = handler.initState();

describe('INVALID PLACE COMMAND', function() {

    describe('The application should discard all commands in the sequence until a valid PLACE command has been executed.', function () {

        it('should not change state if facing is INVALID', function(){

            let { state } = handler.runCommand(state0, "PLACE 0,1,df");
            assert.deepEqual(state, state0);

        }),

        it('should not change state if x > 5', function(){

            assert.deepEqual( handler.runCommand(state0, "PLACE 6,1,NORTH").state.x , state0.x);
        }),

        it('should not change state if x < 0', function(){

            assert.equal( handler.runCommand(state0, "PLACE -1,1,NORTH").state.x , state0.x);
        }),

        it('should not change state if y > 5', function(){

            assert.deepEqual( handler.runCommand(state0, "PLACE 1,999,NORTH").state.x , state0.x);
        }),

        it('should not change state if y < 0', function(){

            assert.equal( handler.runCommand(state0, "PLACE 0,-999,NORTH").state.x , state0.x);
        })

    })
});