'use strict';

var AWS = require('aws-sdk');
// var sqs_config = require('.config');

var sqs = new AWS.SQS({region:'us-west-2'});

var msg = { payload: 'hey hey' };

var sqsParams = {
  MessageBody: JSON.stringify(msg),
  QueueUrl: 'https://sqs.us-west-2.amazonaws.com/746604731128/MyQueue'
};

sqs.sendMessage(sqsParams, function(err, data) {
  if (err) {
    console.log('ERR', err);
  }

  console.log(data);
});
