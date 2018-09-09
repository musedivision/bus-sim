"use strict";
const validFacingValues = ["NORTH", "EAST", "WEST", "SOUTH"];
const isValidFacing = (f) => { return validFacingValues.includes(f) };


module.exports = (state, args) => {
    const {x, y, facing } = args;


    if(isValidFacing(facing)){
        return { state: {x, y, facing} }
    } else {
        return { state }
    }



};