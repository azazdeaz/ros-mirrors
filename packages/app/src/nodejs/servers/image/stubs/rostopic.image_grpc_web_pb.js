/**
 * @fileoverview gRPC-Web generated client stub for rostopic
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.rostopic = require('./rostopic.image_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.rostopic.ImageTopicClient =
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
proto.rostopic.ImageTopicPromiseClient =
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
 *   !proto.rostopic.Image,
 *   !proto.rostopic.Empty>}
 */
const methodDescriptor_ImageTopic_publish = new grpc.web.MethodDescriptor(
  '/rostopic.ImageTopic/publish',
  grpc.web.MethodType.UNARY,
  proto.rostopic.Image,
  proto.rostopic.Empty,
  /**
   * @param {!proto.rostopic.Image} request
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
 *   !proto.rostopic.Image,
 *   !proto.rostopic.Empty>}
 */
const methodInfo_ImageTopic_publish = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rostopic.Empty,
  /**
   * @param {!proto.rostopic.Image} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rostopic.Empty.deserializeBinary
);


/**
 * @param {!proto.rostopic.Image} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rostopic.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rostopic.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rostopic.ImageTopicClient.prototype.publish =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/rostopic.ImageTopic/publish',
      request,
      metadata || {},
      methodDescriptor_ImageTopic_publish,
      callback);
};


/**
 * @param {!proto.rostopic.Image} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rostopic.Empty>}
 *     A native promise that resolves to the response
 */
proto.rostopic.ImageTopicPromiseClient.prototype.publish =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/rostopic.ImageTopic/publish',
      request,
      metadata || {},
      methodDescriptor_ImageTopic_publish);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rostopic.Empty,
 *   !proto.rostopic.Image>}
 */
const methodDescriptor_ImageTopic_subscribe = new grpc.web.MethodDescriptor(
  '/rostopic.ImageTopic/subscribe',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.rostopic.Empty,
  proto.rostopic.Image,
  /**
   * @param {!proto.rostopic.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rostopic.Image.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rostopic.Empty,
 *   !proto.rostopic.Image>}
 */
const methodInfo_ImageTopic_subscribe = new grpc.web.AbstractClientBase.MethodInfo(
  proto.rostopic.Image,
  /**
   * @param {!proto.rostopic.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.rostopic.Image.deserializeBinary
);


/**
 * @param {!proto.rostopic.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.rostopic.Image>}
 *     The XHR Node Readable Stream
 */
proto.rostopic.ImageTopicClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/rostopic.ImageTopic/subscribe',
      request,
      metadata || {},
      methodDescriptor_ImageTopic_subscribe);
};


/**
 * @param {!proto.rostopic.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.rostopic.Image>}
 *     The XHR Node Readable Stream
 */
proto.rostopic.ImageTopicPromiseClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/rostopic.ImageTopic/subscribe',
      request,
      metadata || {},
      methodDescriptor_ImageTopic_subscribe);
};


module.exports = proto.rostopic;

