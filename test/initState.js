"use strict";

const assert = require('assert');
const app = require('../src/index.js')

// PLACE will put the bus in the carpark in position X,Y and facing NORTH, SOUTH,
// EAST or WEST

describe('STATE - bus postion X,Y,F', function() {

    describe('Initialise the state', function () {

        it('should null values for all state properties', function(){

            assert.deepEqual(app.initState(), { x: false, y: false, facing: false });

        })
    })
});