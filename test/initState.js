"use strict";

const assert = require('assert');
const initState = require('../src/initState');


describe('STATE - bus postion X,Y,F', function() {

    describe('Initialise the state', function () {

        it('should "false" values for all state properties', function(){

            assert.deepEqual(initState(), { x: false, y: false, facing: false });

        })
    })
});