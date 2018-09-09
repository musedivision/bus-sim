"use strict";
const { isInsideCarpark, orients } = require('./map.js');

const isValidFacing = (f) => { return orients.includes(f) };

module.exports = (state, args) => {
    const {x, y, facing } = args;

    const validArgs = isValidFacing(facing) && isInsideCarpark(x) && isInsideCarpark(y);

    if( validArgs ){
        return { state: {x, y, facing} }
    } else {
        return { state }
    }

};