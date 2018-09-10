"use strict";

const initState = require('./initState');

const PLACE = require('./cmd_place');
const REPORT = require('./cmd_report');
const MOVE = require('./cmd_move');
const { left, right } = require('./cmd_turn');

const commands = {
    "PLACE": PLACE,
    "REPORT": REPORT,
    "MOVE": MOVE,
    "LEFT": left,
    "RIGHT": right
};

const state0 = initState();

const CAN_ONLY_RUN_AFTER_PLACE = [ "MOVE", "LEFT", "RIGHT"];
const safeToRun = (cmd, state) => {

    console.log(CAN_ONLY_RUN_AFTER_PLACE.includes(cmd), state, state0, state !== state0);
    return CAN_ONLY_RUN_AFTER_PLACE.includes(cmd) && state !== state0;
};


const verbs = Object.keys(commands);
const isValidCommand = (cmd) => verbs.includes(cmd);

function parseCommand(command){
    const [ cmd, args = false ] = command.split(' ');
    let [ x, y, facing ] = args ? args.split(',') : [];
    x = x*1;
    y = y*1;

    return { cmd, args: {x, y, facing } }
}

// receives the command and position and returns the position and output - if any
const runCommand = (prevState, commandString) => {
    const { cmd, args } = parseCommand(commandString);

    // if(!safeToRun(cmd, prevState)){
    //     return { prevState }
    // }

    const runner = commands[cmd];
    const {state, output} = runner(prevState,args);

    // console.log({commandString, prevState, cmdARGS: args, newSTATE: state, output});

    return {state, output};
};

/*
 *  BUS SIMULATOR
 *
 *  should receive a list of commands
 *  REPORT command should return a string for the moment - implement Std out later
 *
 */
module.exports = {
    parseCommand,
    verbs,
    isValidCommand,
    initState,
    runCommand,
    commands
};