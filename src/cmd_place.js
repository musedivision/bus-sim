"use strict";
const validFacingValues = ["NORTH", "EAST", "WEST", "SOUTH"];
const isValidFacing = (f) => { return validFacingValues.includes(f) };


const isInsideCarpark = (z) =>  ( z >= 0) && (z <= 5) ;


module.exports = (state, args) => {
    const {x, y, facing } = args;

    const validArgs = isValidFacing(facing) && isInsideCarpark(x) && isInsideCarpark(y);

    if( validArgs ){
        return { state: {x, y, facing} }
    } else {
        return { state }
    }

};