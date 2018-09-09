"use strict";

// 5 unit x 5 unit grid
const min = 0;
const max = 5;

module.exports = (z) =>  {
    return ( z >= min) && (z <= max)
};