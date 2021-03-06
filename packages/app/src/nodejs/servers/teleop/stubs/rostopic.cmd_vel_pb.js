/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.rostopic.Empty', null, global);
goog.exportSymbol('proto.rostopic.Twist', null, global);
goog.exportSymbol('proto.rostopic.Twist.Vector3', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rostopic.Twist = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rostopic.Twist, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.rostopic.Twist.displayName = 'proto.rostopic.Twist';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rostopic.Twist.prototype.toObject = function(opt_includeInstance) {
  return proto.rostopic.Twist.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rostopic.Twist} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rostopic.Twist.toObject = function(includeInstance, msg) {
  var f, obj = {
    linear: (f = msg.getLinear()) && proto.rostopic.Twist.Vector3.toObject(includeInstance, f),
    angular: (f = msg.getAngular()) && proto.rostopic.Twist.Vector3.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rostopic.Twist}
 */
proto.rostopic.Twist.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rostopic.Twist;
  return proto.rostopic.Twist.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rostopic.Twist} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rostopic.Twist}
 */
proto.rostopic.Twist.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rostopic.Twist.Vector3;
      reader.readMessage(value,proto.rostopic.Twist.Vector3.deserializeBinaryFromReader);
      msg.setLinear(value);
      break;
    case 2:
      var value = new proto.rostopic.Twist.Vector3;
      reader.readMessage(value,proto.rostopic.Twist.Vector3.deserializeBinaryFromReader);
      msg.setAngular(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rostopic.Twist.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rostopic.Twist.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rostopic.Twist} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rostopic.Twist.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinear();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rostopic.Twist.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getAngular();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rostopic.Twist.Vector3.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rostopic.Twist.Vector3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rostopic.Twist.Vector3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.rostopic.Twist.Vector3.displayName = 'proto.rostopic.Twist.Vector3';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rostopic.Twist.Vector3.prototype.toObject = function(opt_includeInstance) {
  return proto.rostopic.Twist.Vector3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rostopic.Twist.Vector3} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rostopic.Twist.Vector3.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    y: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    z: +jspb.Message.getFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rostopic.Twist.Vector3}
 */
proto.rostopic.Twist.Vector3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rostopic.Twist.Vector3;
  return proto.rostopic.Twist.Vector3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rostopic.Twist.Vector3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rostopic.Twist.Vector3}
 */
proto.rostopic.Twist.Vector3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setZ(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rostopic.Twist.Vector3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rostopic.Twist.Vector3.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rostopic.Twist.Vector3} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rostopic.Twist.Vector3.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.rostopic.Twist.Vector3.prototype.getX = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.rostopic.Twist.Vector3.prototype.setX = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.rostopic.Twist.Vector3.prototype.getY = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.rostopic.Twist.Vector3.prototype.setY = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double z = 3;
 * @return {number}
 */
proto.rostopic.Twist.Vector3.prototype.getZ = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.rostopic.Twist.Vector3.prototype.setZ = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional Vector3 linear = 1;
 * @return {?proto.rostopic.Twist.Vector3}
 */
proto.rostopic.Twist.prototype.getLinear = function() {
  return /** @type{?proto.rostopic.Twist.Vector3} */ (
    jspb.Message.getWrapperField(this, proto.rostopic.Twist.Vector3, 1));
};


/** @param {?proto.rostopic.Twist.Vector3|undefined} value */
proto.rostopic.Twist.prototype.setLinear = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.rostopic.Twist.prototype.clearLinear = function() {
  this.setLinear(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rostopic.Twist.prototype.hasLinear = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Vector3 angular = 2;
 * @return {?proto.rostopic.Twist.Vector3}
 */
proto.rostopic.Twist.prototype.getAngular = function() {
  return /** @type{?proto.rostopic.Twist.Vector3} */ (
    jspb.Message.getWrapperField(this, proto.rostopic.Twist.Vector3, 2));
};


/** @param {?proto.rostopic.Twist.Vector3|undefined} value */
proto.rostopic.Twist.prototype.setAngular = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.rostopic.Twist.prototype.clearAngular = function() {
  this.setAngular(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rostopic.Twist.prototype.hasAngular = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rostopic.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rostopic.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.rostopic.Empty.displayName = 'proto.rostopic.Empty';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rostopic.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.rostopic.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rostopic.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rostopic.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rostopic.Empty}
 */
proto.rostopic.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rostopic.Empty;
  return proto.rostopic.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rostopic.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rostopic.Empty}
 */
proto.rostopic.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rostopic.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rostopic.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rostopic.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rostopic.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.rostopic);
