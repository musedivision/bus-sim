"use strict";

// 0,0 is south west most corner
const moveInDirection = {
    "NORTH": { x: 0, y: 1 },
    "SOUTH": { x: 0, y: -1 },

    "EAST": { x: -1, y: 0 },
    "WEST": { x: 1, y: 0 }
};

module.exports = (state) => {
    const { x, y, facing } = state;
    const { x: x2, y: y2 } = moveInDirection[facing];

    return {
        state: {
            x: x + x2,
            y: y + y2,
            facing
        }
    };

};