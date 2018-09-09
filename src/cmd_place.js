"use strict";
const isInsideCarpark = require('./isInsideCarpark');

const validFacingValues = ["NORTH", "EAST", "SOUTH", "WEST"];
const isValidFacing = (f) => { return validFacingValues.includes(f) };


module.exports = (state, args) => {
    const {x, y, facing } = args;

    const validArgs = isValidFacing(facing) && isInsideCarpark(x) && isInsideCarpark(y);

    if( validArgs ){
        return { state: {x, y, facing} }
    } else {
        return { state }
    }

};