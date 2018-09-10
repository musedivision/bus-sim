"use strict";
const handler = require('./command_handler');

let state = handler.initState();

const clean = (s) => s.toString().trim();

process.stdin.on('data', (data) => {

    const COMMAND = clean(data);

    const { state: nextState, output} = handler.runCommand(state, COMMAND);
    // console.log("app XXXXX>>>>", {state, COMMAND, nextState });
    state = nextState;

    if(output){
        process.stdout.write(`\n${output} \n`)
    }

});