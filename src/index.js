"use strict";

const PLACE = require('./cmd_place');
const REPORT = require('./cmd_report');

const commands = {
    "PLACE": PLACE,
    "REPORT": REPORT,
};

// initialise the bus position / app state
const initState = () => {
    return {x: false,y: false, facing: false}
};

function parseCommand(command){
    const [ cmd, args = false ] = command.split(' ');
    const [ x, y, facing ] = args ? args.split(',') : [];
    return { cmd, args: {x, y, facing } }
}

// receives the command and position and returns the position and output - if any
const runCommand = (prevState, command) => {
    const { cmd, args } = parseCommand(command);

    const runner = commands[cmd];

    const {state, output} = runner(prevState,args);

    // console.log(prevState, args, state, output);

    return {state, output};
};


/*
 *  BUS SIMULATOR
 *
 *  should receive a list of commands
 *  REPORT command should return a string for the moment - implement Std out later
 */
module.exports = {
    initState,
    runCommand,
    commands
};