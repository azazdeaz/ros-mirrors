// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var rostopic_cmd_vel_pb = require('./rostopic.cmd_vel_pb.js');

function serialize_rostopic_Empty(arg) {
  if (!(arg instanceof rostopic_cmd_vel_pb.Empty)) {
    throw new Error('Expected argument of type rostopic.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rostopic_Empty(buffer_arg) {
  return rostopic_cmd_vel_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rostopic_Twist(arg) {
  if (!(arg instanceof rostopic_cmd_vel_pb.Twist)) {
    throw new Error('Expected argument of type rostopic.Twist');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rostopic_Twist(buffer_arg) {
  return rostopic_cmd_vel_pb.Twist.deserializeBinary(new Uint8Array(buffer_arg));
}


var CmdVelTopicService = exports.CmdVelTopicService = {
  // unary call
publish: {
    path: '/rostopic.CmdVelTopic/publish',
    requestStream: false,
    responseStream: false,
    requestType: rostopic_cmd_vel_pb.Twist,
    responseType: rostopic_cmd_vel_pb.Empty,
    requestSerialize: serialize_rostopic_Twist,
    requestDeserialize: deserialize_rostopic_Twist,
    responseSerialize: serialize_rostopic_Empty,
    responseDeserialize: deserialize_rostopic_Empty,
  },
  // server streaming call
subscribe: {
    path: '/rostopic.CmdVelTopic/subscribe',
    requestStream: false,
    responseStream: true,
    requestType: rostopic_cmd_vel_pb.Empty,
    responseType: rostopic_cmd_vel_pb.Twist,
    requestSerialize: serialize_rostopic_Empty,
    requestDeserialize: deserialize_rostopic_Empty,
    responseSerialize: serialize_rostopic_Twist,
    responseDeserialize: deserialize_rostopic_Twist,
  },
};

exports.CmdVelTopicClient = grpc.makeGenericClientConstructor(CmdVelTopicService);
