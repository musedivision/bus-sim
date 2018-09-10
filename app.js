"use strict";
const { NODE_ENV } = process.env

const { initState, runCommand, parseCommand, verbs } = require('./src/command_handler');

const clean = (s) => s.toString().trim();
const isDev = () => NODE_ENV !== 'production';

const logTimestep = (app) => {
    const { x, y, facing } = app.timestep.state;

    console.log(
    `-- timestep ${app.history.length}
        space: ${x}, ${y}, ${facing}
        ${app.timestep}
        
    `)
};

// APPLICATION STATE OBJECT
let app = {
    timestep: {
        state: initState(),
        output: undefined
    },
    history: []
};


const step = (stdin) => {



    try {
        let { state, output } = app.timestep;

        // RUN commands
        const COMMAND = clean(stdin);
        // const { cmd, args } = parseCommand(COMMAND);

        let timestep = runCommand(state, COMMAND);

        app.timestep = timestep;
        app.history.push(timestep);

        if(timestep.output){
            process.stdout.write(`\n${timestep.output} \n`)
        }

        isDev() ? logTimestep(app) : ''

    } catch(e) {
        // do nothing
        isDev() ? console.log("ERROR handled -->",e) : ''

    }

};

process.stdin.on('data', step );