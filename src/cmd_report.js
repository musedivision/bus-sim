"use strict";

// the state values default to false when they are initialised
const isBusPlaced = (state) => {
    return !(state.x === false && state.y === false && state.facing === false)
};

module.exports = (state) => {
    const {x, y, facing} = state;

    if( isBusPlaced(state) ){
        return { output: `${x},${y},${facing}`}
    } else {
        return { }
    }

}