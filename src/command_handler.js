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

const CAN_ONLY_RUN_AFTER_PLACE = [ "MOVE", "LEFT", "RIGHT"];
const verbs = Object.keys(commands);
const isValidCommand = (cmd) => verbs.includes(cmd);

const safeToRun = (cmd, state) => {

    if(!CAN_ONLY_RUN_AFTER_PLACE.includes(cmd)){
        return true
    }

    return (state.x !== false);
};


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

    if(!safeToRun(cmd, prevState)){
        return { state: prevState }
    }

    const runner = commands[cmd];
    const {state, output} = runner(prevState,args);

    return {state, output};
};


module.exports = {
    parseCommand,
    verbs,
    isValidCommand,
    initState,
    runCommand,
    commands
};