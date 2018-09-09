"use strict";

const assert = require('assert');
const app = require('../src/index.js');


let state0 = app.initState();

describe('INVALID PLACE COMMAND', function() {

    describe('The application should discard all commands in the sequence until a valid PLACE command has been executed.', function () {

        it('should not change state if facing is INVALID', function(){

            let { state } = app.runCommand(state0, "PLACE 0,1,df");
            assert.deepEqual(state, state0);

        }),

        it('should not change state if x > 5', function(){

            assert.deepEqual( app.runCommand(state0, "PLACE 6,1,NORTH").state.x , state0.x);
        }),

        it('should not change state if x < 0', function(){

            assert.equal( app.runCommand(state0, "PLACE -1,1,NORTH").state.x , state0.x);
        }),

        it('should not change state if y > 5', function(){

            assert.deepEqual( app.runCommand(state0, "PLACE 1,999,NORTH").state.x , state0.x);
        }),

        it('should not change state if y < 0', function(){

            assert.equal( app.runCommand(state0, "PLACE 0,-999,NORTH").state.x , state0.x);
        })

    })
});