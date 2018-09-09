"use strict";
const { orients } = require('./map.js');

const loopBack = (arr) => (i) =>  i === -1 ? arr.length -1 : 0;

const outsideBounds = (arr, i) => i === -1 || i > (arr.length -1);

const turn = (dir) => (state) => {
        const curr = orients.indexOf(state.facing);

        const idx = curr + dir;
        const newIdx = outsideBounds(orients, idx) ? loopBack(orients)(idx) : idx;

        const newFacing = orients[newIdx];

        state.facing = newFacing;
        return { state }
    };



module.exports = {

    left: turn(-1),
    right: turn(+1)

};