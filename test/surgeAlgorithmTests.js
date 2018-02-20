const chai = require('chai');
const assert = require('assert');
const surgeCalc = require('../algorithms/surgeAlgorithm.js');

const expect = chai.expect;

describe('surge calculation', function() {
  it ('should return a number with riders/drivers > 1.35', async function() {
    var result = await surgeCalc.getSurgeByAreaCode(100, 70, 100);
    assert.equal(typeof result, 'number');
  });

  it ('should return a number with 1.35 >= riders/drivers > 1.25', async function() {
    var result = await surgeCalc.getSurgeByAreaCode(19, 70, 87);
    assert.equal(typeof result, 'number');
  });


  it ('should return a number with 1.25 >= riders/drivers > 1.1', async function() {
    var result = await surgeCalc.getSurgeByAreaCode(15, 70, 80);
    assert.equal(typeof result, 'number');
  });

  it ('should return a number with  1.1 >= riders/drivers > 0.9', async function() {
    var result = await surgeCalc.getSurgeByAreaCode(102, 70, 70);
    assert.equal(typeof result, 'number');
  });

  it ('should return 1 with riders/drivers <= 0.9', async function() {
    var result = await surgeCalc.getSurgeByAreaCode(21, 70, 50);
    assert.equal(typeof result, 'number');
  });

  it ('should return null for invalid input', async function() {
    var result = await surgeCalc.getSurgeByAreaCode(11, 'string', 100);
    assert.equal(result, null);
  });

  it ('should handle 0 drivers with a surge of above 7', async function() {
    var result = await surgeCalc.getSurgeByAreaCode(11, 0, 100);
    expect(result).to.be.above(7);
  });

});