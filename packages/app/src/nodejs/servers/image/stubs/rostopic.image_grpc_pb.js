// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var rostopic_image_pb = require('./rostopic.image_pb.js');

function serialize_rostopic_Empty(arg) {
  if (!(arg instanceof rostopic_image_pb.Empty)) {
    throw new Error('Expected argument of type rostopic.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rostopic_Empty(buffer_arg) {
  return rostopic_image_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rostopic_Image(arg) {
  if (!(arg instanceof rostopic_image_pb.Image)) {
    throw new Error('Expected argument of type rostopic.Image');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rostopic_Image(buffer_arg) {
  return rostopic_image_pb.Image.deserializeBinary(new Uint8Array(buffer_arg));
}


var ImageTopicService = exports.ImageTopicService = {
  // unary call
publish: {
    path: '/rostopic.ImageTopic/publish',
    requestStream: false,
    responseStream: false,
    requestType: rostopic_image_pb.Image,
    responseType: rostopic_image_pb.Empty,
    requestSerialize: serialize_rostopic_Image,
    requestDeserialize: deserialize_rostopic_Image,
    responseSerialize: serialize_rostopic_Empty,
    responseDeserialize: deserialize_rostopic_Empty,
  },
  // server streaming call
subscribe: {
    path: '/rostopic.ImageTopic/subscribe',
    requestStream: false,
    responseStream: true,
    requestType: rostopic_image_pb.Empty,
    responseType: rostopic_image_pb.Image,
    requestSerialize: serialize_rostopic_Empty,
    requestDeserialize: deserialize_rostopic_Empty,
    responseSerialize: serialize_rostopic_Image,
    responseDeserialize: deserialize_rostopic_Image,
  },
};

exports.ImageTopicClient = grpc.makeGenericClientConstructor(ImageTopicService);
