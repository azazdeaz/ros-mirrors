// package: rostopic
// file: rostopic.image.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as rostopic_image_pb from "./rostopic.image_pb";

interface IImageTopicService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    publish: IImageTopicService_Ipublish;
    subscribe: IImageTopicService_Isubscribe;
}

interface IImageTopicService_Ipublish extends grpc.MethodDefinition<rostopic_image_pb.Image, rostopic_image_pb.Empty> {
    path: string; // "/rostopic.ImageTopic/publish"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rostopic_image_pb.Image>;
    requestDeserialize: grpc.deserialize<rostopic_image_pb.Image>;
    responseSerialize: grpc.serialize<rostopic_image_pb.Empty>;
    responseDeserialize: grpc.deserialize<rostopic_image_pb.Empty>;
}
interface IImageTopicService_Isubscribe extends grpc.MethodDefinition<rostopic_image_pb.Empty, rostopic_image_pb.Image> {
    path: string; // "/rostopic.ImageTopic/subscribe"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<rostopic_image_pb.Empty>;
    requestDeserialize: grpc.deserialize<rostopic_image_pb.Empty>;
    responseSerialize: grpc.serialize<rostopic_image_pb.Image>;
    responseDeserialize: grpc.deserialize<rostopic_image_pb.Image>;
}

export const ImageTopicService: IImageTopicService;

export interface IImageTopicServer {
    publish: grpc.handleUnaryCall<rostopic_image_pb.Image, rostopic_image_pb.Empty>;
    subscribe: grpc.handleServerStreamingCall<rostopic_image_pb.Empty, rostopic_image_pb.Image>;
}

export interface IImageTopicClient {
    publish(request: rostopic_image_pb.Image, callback: (error: grpc.ServiceError | null, response: rostopic_image_pb.Empty) => void): grpc.ClientUnaryCall;
    publish(request: rostopic_image_pb.Image, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rostopic_image_pb.Empty) => void): grpc.ClientUnaryCall;
    publish(request: rostopic_image_pb.Image, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rostopic_image_pb.Empty) => void): grpc.ClientUnaryCall;
    subscribe(request: rostopic_image_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rostopic_image_pb.Image>;
    subscribe(request: rostopic_image_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rostopic_image_pb.Image>;
}

export class ImageTopicClient extends grpc.Client implements IImageTopicClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public publish(request: rostopic_image_pb.Image, callback: (error: grpc.ServiceError | null, response: rostopic_image_pb.Empty) => void): grpc.ClientUnaryCall;
    public publish(request: rostopic_image_pb.Image, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rostopic_image_pb.Empty) => void): grpc.ClientUnaryCall;
    public publish(request: rostopic_image_pb.Image, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rostopic_image_pb.Empty) => void): grpc.ClientUnaryCall;
    public subscribe(request: rostopic_image_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rostopic_image_pb.Image>;
    public subscribe(request: rostopic_image_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rostopic_image_pb.Image>;
}
