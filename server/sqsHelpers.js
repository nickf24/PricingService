const AWS = require('aws-sdk');
const axios = require('axios');
const path = require('path');

AWS.config.loadFromPath(path.join(__dirname + '/../config.json'));
AWS.config.update({region: 'us-west-1'});

var sqs = new AWS.SQS({apiVersion: '2012-11-05'});


sendPostToHistoryAfterPush = function() {
  var params = {
    QueueUrl: 'https://sqs.us-west-1.amazonaws.com/627311198652/EventsToPricing',
    AttributeNames: ['ApproximateNumberOfMessages']
  }
  sqs.receiveMessage(params, function (err, result) {
      if (err) { 
        console.log(err);
      } else { 
        console.log('in send post history after push', result.Attributes.ApproximateNumberOfMessages) 
      }
  });


  // sns.subscribe(params, function(err, data) {
  // 	if (err) {
  // 	  console.log(err);
  // 	} else {
  // 	  console.log(data);
  // 	  axios.post('/history', data).then(function(response) {
  // 	  	console.log(response);
  // 	  }).catch(function (error) {
  // 	  	console.log(error);
  // 	  })
  // 	}
  // });
}

module.exports = {
  sendPostToHistoryAfterPush
}