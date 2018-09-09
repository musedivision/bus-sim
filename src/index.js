"use strict";

// initialise the bus position / app state
const initState = () => {
    return {x: false,y: false, facing: false}
};

// receives the command and state and returns the state and output - if any
const runCommand = (cmd, state) => {

    return {state, output: ''}
};

/*
 *  BUS SIMULATOR
 *
 *  should receive a list of commands
 *  REPORT command should return a string for the moment - implement Std out later
 */
module.exports = {
    initState,
    runCommand
};