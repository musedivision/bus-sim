"use strict";

const assert = require('assert');
const { isValidCommand } = require('../src/command_handler');


describe('Command handler', function () {

    it('should accept VALID commands', function(){

        assert.ok(isValidCommand("PLACE"))
        assert.ok(isValidCommand("REPORT"))
        assert.ok(isValidCommand("MOVE"))
        assert.ok(isValidCommand("LEFT"))
        assert.ok(isValidCommand("RIGHT"))

    }),
    it('should reject INVALID commands', function(){

        assert.ok(!isValidCommand("PLACe"))
        assert.ok(!isValidCommand("sd"))
        assert.ok(!isValidCommand("XX"))
        assert.ok(!isValidCommand("0"))
        assert.ok(!isValidCommand("RIGHTy"))

    })
});
