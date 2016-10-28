'use strict';

let promise = require('bluebird');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
let AWS = require('aws-sdk');
let uuid = require('node-uuid');
let _ = require('lodash');

// function processData(data) {
//   // taking care of data
// }
//
// function handler() {
//   if(this.status == 200 &&
//     this.responseXML != null &&
//     this.responseXML.getElementById('test').textContent) {
//       // success!
//       processData(this.responseXML.getElementById('test').textContent);
//     } else {
//       // something went wrong
//
//     }
//   }
//
//   var client = new XMLHttpRequest();
//   console.log(client);
//   client.onload = handler;
//   client.open("GET", "unicorn.xml");
//   client.send();
// // Create an S3 client
// let s3 = new AWS.S3();

// let url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=35010847.50ad594.be11ced7b6234fbfbfadc3793211e5ad';
//set up Promise to handle the request
function getPhotos(url) {

  return new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    // console.log(request);

    request.onload = function(){
      // console.log(request);
      if(request.status === 200){
        resolve(request.responseText);
      } else {
        reject(new Error(request.statusText));

      }
    }
    request.open('GET',url)
    request.send();

  })
}

getPhotos('https://api.instagram.com/v1/users/self/media/recent/?access_token=35010847.50ad594.be11ced7b6234fbfbfadc3793211e5ad')
.then(function(response){
  // console.log(JSON.stringify(response));
    // console.log(JSON.parse(response.data));
  // console.log(response.split('['));
  let newData= JSON.parse(response);
  console.log(newData.data);
  for(var i = 0; i<newData.data.length; i++){
    let dataI = newData.data[i] ;
    let newId = dataI.id;
    console.log(newId);
    console.log(dataI);
    let s3 = new AWS.S3();
    let bucketName = 'zinstagram-images';
    let keyName = newId +'.txt';

    let bodyContent = JSON.stringify(dataI);

    s3.createBucket({Bucket: bucketName}, function() {
      var params = {Bucket: bucketName, Key: keyName, Body: bodyContent};
      s3.putObject(params, function(err, data) {
        if (err)
        console.log(err)
        else
        console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
      });
    });

  }


}, function (error){
  return error;
});



// Create a bucket and upload something into it
// var bucketName = 'zinstagram-images';
// var keyName = 'hello_world.txt :'  + new Date();
//
// s3.createBucket({Bucket: bucketName}, function() {
//   var params = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
//   s3.putObject(params, function(err, data) {
//     if (err)
//       console.log(err)
//     else
//       console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
//   });
// }, function(error){
//   return error;
// });
