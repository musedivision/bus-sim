"use strict";

// 5 unit x 5 unit grid
const orients = ["NORTH", "EAST", "SOUTH", "WEST"];

const isInsideCarpark = (z) =>  {
    return ( z >= 0) && (z <= 5)
};

module.exports = {

    orients,
    isInsideCarpark
};