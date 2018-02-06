const chai = require('chai');
const assert = require('assert');
const should = require('should');
const chaiHttp = require('chai-http');
const server = require('../server/index.js');

chai.use(chaiHttp);

describe ('/GET multiplier', () => {
  it ('should return a number', (done) => {
  	chai.request(server).get('/multiplier/8').end((err,  res) => {
	  body.should.equal('number');
    });
    done()
  });  
  it ('should send back a status code of 200 on success', (done) => {
  	chai.request(server).get('/multiplier/8').end((err,  res) => {
  	  res.should.have.status(200);
    });
    done()
  });

  it ('should send back a status code of 404 when area code is out of bounds', (done) => {
  	chai.request(server).get('/multiplier/284').end((err,  res) => {
  	  res.should.have.status(404);
    });
    done()
  });
})


