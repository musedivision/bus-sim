"use strict";
const  NODE_ENV  = process.env.NODE_ENV || "production";

const { initState, runCommand } = require('./src/command_handler');

const clean = (s) => s.toString().trim();
const isDev = () => NODE_ENV !== 'production';


const welcomeMessage = () => {
    console.log(` 
         Welcome to 
      🚍 Bus Sim 2018 🚍
         
         YOUR MOVE 🕹
    
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
        let { state } = app.timestep;

        // RUN commands
        const COMMAND = clean(stdin);
        let timestep = runCommand(state, COMMAND);

        // update application state
        app.timestep = timestep;
        app.history.push(timestep);

        // print output if required
        if(timestep.output){
            process.stdout.write(`\n${timestep.output} \n`)
        }


    } catch(e) {
        // do nothing in production
        isDev() ? console.log("ERROR handled -->",e) : ''

    }

};

process.on('SIGINT', function() {
    console.log("\n\n\n ⚡️ Unplugging simulator 🔌");
    process.exit();
});

process.stdin.on('data', step );

welcomeMessage();