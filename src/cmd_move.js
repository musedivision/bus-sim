"use strict";
const { isInsideCarpark } = require('./map.js');

// 0,0 is south west most corner
const moveInDirection = {
    "NORTH": { x: 0, y: 1 },
    "SOUTH": { x: 0, y: -1 },
    "EAST": { x: 1, y: 0 },
    "WEST": { x: -1, y: 0 }
};

const isValidMove = (x, y) =>  isInsideCarpark(x) && isInsideCarpark(y);

module.exports = (state) => {
    let { x, y, facing } = state;
    const { x: x2, y: y2 } = moveInDirection[facing];

    x += x2;
    y += y2;

    if( isValidMove(x, y) ){
        state.x = x;
        state.y = y;
    }

    return { state }
};