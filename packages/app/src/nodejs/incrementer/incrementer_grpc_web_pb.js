/**
 * @fileoverview gRPC-Web generated client stub for incrementer
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.incrementer = require('./incrementer_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.incrementer.GreeterClient =
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
proto.incrementer.GreeterPromiseClient =
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
 *   !proto.incrementer.HelloRequest,
 *   !proto.incrementer.HelloReply>}
 */
const methodDescriptor_Greeter_SayHello = new grpc.web.MethodDescriptor(
  '/incrementer.Greeter/SayHello',
  grpc.web.MethodType.UNARY,
  proto.incrementer.HelloRequest,
  proto.incrementer.HelloReply,
  /**
   * @param {!proto.incrementer.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.incrementer.HelloReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.incrementer.HelloRequest,
 *   !proto.incrementer.HelloReply>}
 */
const methodInfo_Greeter_SayHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.incrementer.HelloReply,
  /**
   * @param {!proto.incrementer.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.incrementer.HelloReply.deserializeBinary
);


/**
 * @param {!proto.incrementer.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.incrementer.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.incrementer.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.incrementer.GreeterClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/incrementer.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello,
      callback);
};


/**
 * @param {!proto.incrementer.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.incrementer.HelloReply>}
 *     A native promise that resolves to the response
 */
proto.incrementer.GreeterPromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/incrementer.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.incrementer.RepeatHelloRequest,
 *   !proto.incrementer.HelloReply>}
 */
const methodDescriptor_Greeter_SayRepeatHello = new grpc.web.MethodDescriptor(
  '/incrementer.Greeter/SayRepeatHello',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.incrementer.RepeatHelloRequest,
  proto.incrementer.HelloReply,
  /**
   * @param {!proto.incrementer.RepeatHelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.incrementer.HelloReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.incrementer.RepeatHelloRequest,
 *   !proto.incrementer.HelloReply>}
 */
const methodInfo_Greeter_SayRepeatHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.incrementer.HelloReply,
  /**
   * @param {!proto.incrementer.RepeatHelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.incrementer.HelloReply.deserializeBinary
);


/**
 * @param {!proto.incrementer.RepeatHelloRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.incrementer.HelloReply>}
 *     The XHR Node Readable Stream
 */
proto.incrementer.GreeterClient.prototype.sayRepeatHello =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/incrementer.Greeter/SayRepeatHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayRepeatHello);
};


/**
 * @param {!proto.incrementer.RepeatHelloRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.incrementer.HelloReply>}
 *     The XHR Node Readable Stream
 */
proto.incrementer.GreeterPromiseClient.prototype.sayRepeatHello =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/incrementer.Greeter/SayRepeatHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayRepeatHello);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.incrementer.HelloRequest,
 *   !proto.incrementer.HelloReply>}
 */
const methodDescriptor_Greeter_SayHelloAfterDelay = new grpc.web.MethodDescriptor(
  '/incrementer.Greeter/SayHelloAfterDelay',
  grpc.web.MethodType.UNARY,
  proto.incrementer.HelloRequest,
  proto.incrementer.HelloReply,
  /**
   * @param {!proto.incrementer.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.incrementer.HelloReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.incrementer.HelloRequest,
 *   !proto.incrementer.HelloReply>}
 */
const methodInfo_Greeter_SayHelloAfterDelay = new grpc.web.AbstractClientBase.MethodInfo(
  proto.incrementer.HelloReply,
  /**
   * @param {!proto.incrementer.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.incrementer.HelloReply.deserializeBinary
);


/**
 * @param {!proto.incrementer.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.incrementer.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.incrementer.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.incrementer.GreeterClient.prototype.sayHelloAfterDelay =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/incrementer.Greeter/SayHelloAfterDelay',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHelloAfterDelay,
      callback);
};


/**
 * @param {!proto.incrementer.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.incrementer.HelloReply>}
 *     A native promise that resolves to the response
 */
proto.incrementer.GreeterPromiseClient.prototype.sayHelloAfterDelay =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/incrementer.Greeter/SayHelloAfterDelay',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHelloAfterDelay);
};


module.exports = proto.incrementer;

