// const chai = require('chai');
// const assert = require('assert');
// const should = chai.should();
// const chaiHttp = require('chai-http');
// const server = require('../server/index.js');
// const path = require('path');
// /*** AWS ***/ 
// const AWS = require('aws-sdk');

// // Set the region 
// AWS.config.loadFromPath(path.join(__dirname + '/../config.json'));
// AWS.config.update({region: 'us-west-1'});

// var sns = new AWS.SNS();
// var sqs = new AWS.SQS();

// chai.use(chaiHttp);
//  it ('should return a number', (done) => {
//   	chai.request(server).get(`/multiplier/${endpoint}`).end((err,  res) => {
// 	    console.log('RES BODY IS', res.body)
//       var resBody = typeof res.body;
//       resBody.should.equal('number');
//       done();
//     });
    
//   });  

// describe('/price', function() {
//   var fakePriceReqData = { "fromLoc": "[34.950793, -87.398440]", "toLoc": "[38.970793, -87.418440]", "multiplier" : 1.4 }  
//   it ('should return a status of 201', function(done) {
//   	chai.request(server).post('/price').send(fakePriceReqData).end((err, res) => {
//   	  res.status.should.equal(201);
//   	});
//   });

//   it ('should send a price to the Pricing Queue', function(done) {
//   	getSQSMessageFromEvent = function() {
//       var url = 'https://sqs.us-west-1.amazonaws.com/627311198652/EventsToPricing';
// 	  sqs.receiveMessage({
// 	    QueueUrl: url,
// 	    MaxNumberOfMessages: 1, 
// 	    VisibilityTimeout: 60, // seconds - how long we want a lock on this job
// 	    WaitTimeSeconds: 3 // seconds - how long should we wait for a message?
// 	  }, function(err, data) {
// 	   // If there are any messages to get
// 	   if (data.Messages) {
// 	    var message = data.Messages[0];
// 	    var body = JSON.parse(message.Body);
//         sqs.deleteMessage({ QueueUrl: url, ReceiptHandle: message.ReceiptHandle }, function(err, data) {
// 	      err && console.log(err);
// 	     });
// 	   }
//       });
//     }
//   });
// });

// it ('should return a number', (done) => {
//     let market = {
//       "areacode": endpoint, 
//       "drivers": 50,
//       "riders": 90
//     }
//     chai.request(server)
//     .post('/market')
//     .send(market)
//     .end((err,  res) => {
//       res.should.have.status(201);
//     })
//     done();
//   })
// // describe('/market', function() {

// //   it ('should calculate a surge and publish it to the surge topic', async function() {
// //   	var params = {
// //   	  Message: JSON.stringify({default: result}),
// //   	  MessageStructure: 'json',
// //   	  TargetArn: 'arn:aws:sns:us-west-1:627311198652:Surge'
// //   	}
  
// //     sns.publish(params, function(err, data) {
// //   	  if (err) {
// //   	    console.log('error with SNS publish', err);
// //   	  } else {
// //   	    console.log('successful publish to SNS');
// //   	  }
// //     });


// //   });

// // });