"use strict";

const assert = require('assert');
const app = require('../src/command_handler.js');


function checkFinalOutput(cmds, expected_o, expected_s){

    const { state, output } = cmds.reduce((data, cmd) => {
        const { state } = data;
        return app.runCommand(state, cmd)
    }, { state: app.initState() });

    assert.deepEqual(expected_o, output);
    assert.deepEqual(expected_s, state);
}


describe('COMMAND RUNNER', function() {

    describe('RUN COMMANDS IN SEQUENCE', function () {

        it('should return output 0,1,NORTH', function(){

            const cmds = [
                'PLACE 0,0,NORTH',
                'MOVE',
                'REPORT'
            ];
            checkFinalOutput(cmds, '0,1,NORTH', {x: 0, y: 1, facing: "NORTH"});
        }),

        it('should return output 0,0,WEST', function(){

            const cmds = [
                'PLACE 0,0,NORTH',
                'LEFT',
                'REPORT',
            ];
            checkFinalOutput(cmds, '0,0,WEST', {x: 0, y: 0, facing: "WEST"});

        }),

        it('should return output 3,3,NORTH', function(){

            const cmds = [
                'PLACE 1,2,EAST',
                'MOVE',
                'MOVE',
                'LEFT',
                'MOVE',
                'REPORT'
            ];
            checkFinalOutput(cmds, '3,3,NORTH', {x: 3, y: 3, facing: "NORTH"});

        })
    })
});