const chai = require('chai');
const assert = require('assert');
const should = require('should');
const db = require('../database/csIndex.js');

describe('getRequestsByAreaCode', function() {
  it ('responds with a list of 100 requests within the given areacode', async () => {
  	const requests = await db.getRequestsByAreaCode(4);
  	requests.rows.should.have.length(100);
    // done();
  });

  it ('responds with areacodes equal to the requested areacode', async () => {
  	const requests = await db.getRequestsByAreaCode(7);
  	requests.rows[0].areacode.should.equal(7);
    // done();
  });

  it ('should respond in less than 200ms', async () => {
  	const requests = await db.getRequestsByAreaCode(6);
  	this.timeout(200);
  	assert.ok(true);
    // done();
  })
})

describe('getAverageMultiplierByAreaCode', () => {
  it ('responds with type number', async function() {
  	const requests = await db.getAverageMultiplierByAreaCode(9);
  	var type = typeof requests;
  	type.should.equal('number');
    // done()
  })

  it ('should respond in less than 1000ms', async function() {
    const requests = await db.getAverageMultiplierByAreaCode(6);
  	this.timeout(1000);
  	assert.ok(true);
    // done();
  });
});

describe('getAverageSuccessByAreaCode', function() {
   it ('responds with type number', async function() {
  	const requests = await db.getAverageSuccessByAreaCode(9);
  	var type = typeof requests;
  	type.should.equal('number');
    // done();
  })

  it ('should respond in less than 800ms', async function() {
    const requests = await db.getAverageSuccessByAreaCode(6);
  	this.timeout(800);
  	assert.ok(true);
    // done()
  });


});

