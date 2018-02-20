const chai = require('chai');
const assert = require('assert');
const priceCalc = require('../algorithms/pricingCalculation.js');

describe('pricing calculation', function() {
  it ('should return a number', function() {
  	var result = priceCalc.pricingCalculation(JSON.stringify(['60.5387', '-131.5378']), JSON.stringify(['60.5387', '-131.5678']), 2.1)
  	assert.equal(typeof result, 'number');
  });

  it ('should apply the surge multiplier to the distance travelled', function() {
  	var resultWithMultiplier = priceCalc.pricingCalculation(JSON.stringify(['31.6732', '-131.5378']), JSON.stringify(['31.6932', '-131.5678']), 1.8);
  	var resultNoMultiplier = priceCalc.pricingCalculation(JSON.stringify(['31.6732', '-131.5378']), JSON.stringify(['31.6932', '-131.5678']), 1);
  	assert.equal((resultWithMultiplier/1.8).toFixed(2), resultNoMultiplier.toFixed(2));
  });

  it ('should return null for invalid coordinates', function() {
  	var result = priceCalc.pricingCalculation(JSON.stringify(['1800', '2003']), JSON.stringify(['290', '32']), 1);
  	assert.equal(result, null);
  });

  it ('should return 0 for the same coordinates', function() {
  	var result = priceCalc.pricingCalculation(JSON.stringify(['0', '0']), JSON.stringify(['0', '0']), 2);
  	assert.equal(result, 0);
  });

  it ('should handle invalid types of coordinates by returning null', function() {
  	var result = priceCalc.pricingCalculation(JSON.stringify(['this', 'is']), JSON.stringify(['1.2', '2.2']), 1);
  	assert.equal(result, null);
  });
})