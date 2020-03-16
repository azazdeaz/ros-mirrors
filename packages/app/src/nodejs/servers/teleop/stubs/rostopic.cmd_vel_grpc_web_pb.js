/**
 * @fileoverview gRPC-Web generated client stub for rostopic
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.rostopic = require('./rostopic.cmd_vel_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.rostopic.CmdVelTopicClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.rostopic.CmdVelTopicPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rostopic.Twist,
 *   !proto.rostopic.Empty>}
 */
const methodDescriptor_CmdVelTopic_publish = new grpc.web.MethodDescriptor(
  '/rostopic.CmdVelTopic/publish',
  grpc.web.MethodType.UNARY,
  proto.rostopic.Twist,
  proto.rostopic.Empty,
  /**
   * @param {!proto.rostopic.Twist} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rostopic.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rostopic.Twist,
 *   !proto.rostopic.Empty>}
 */
const methodInfo_CmdVelTopic_publish = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rostopic.Empty,
  /**
   * @param {!proto.rostopic.Twist} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rostopic.Empty.deserializeBinary
);


/**
 * @param {!proto.rostopic.Twist} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rostopic.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rostopic.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rostopic.CmdVelTopicClient.prototype.publish =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rostopic.CmdVelTopic/publish',
      request,
      metadata || {},
      methodDescriptor_CmdVelTopic_publish,
      callback);
};


/**
 * @param {!proto.rostopic.Twist} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rostopic.Empty>}
 *     A native promise that resolves to the response
 */
proto.rostopic.CmdVelTopicPromiseClient.prototype.publish =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rostopic.CmdVelTopic/publish',
      request,
      metadata || {},
      methodDescriptor_CmdVelTopic_publish);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rostopic.Empty,
 *   !proto.rostopic.Twist>}
 */
const methodDescriptor_CmdVelTopic_subscribe = new grpc.web.MethodDescriptor(
  '/rostopic.CmdVelTopic/subscribe',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.rostopic.Empty,
  proto.rostopic.Twist,
  /**
   * @param {!proto.rostopic.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rostopic.Twist.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rostopic.Empty,
 *   !proto.rostopic.Twist>}
 */
const methodInfo_CmdVelTopic_subscribe = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rostopic.Twist,
  /**
   * @param {!proto.rostopic.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rostopic.Twist.deserializeBinary
);


/**
 * @param {!proto.rostopic.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.rostopic.Twist>}
 *     The XHR Node Readable Stream
 */
proto.rostopic.CmdVelTopicClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/rostopic.CmdVelTopic/subscribe',
      request,
      metadata || {},
      methodDescriptor_CmdVelTopic_subscribe);
};


/**
 * @param {!proto.rostopic.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.rostopic.Twist>}
 *     The XHR Node Readable Stream
 */
proto.rostopic.CmdVelTopicPromiseClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/rostopic.CmdVelTopic/subscribe',
      request,
      metadata || {},
      methodDescriptor_CmdVelTopic_subscribe);
};


module.exports = proto.rostopic;

