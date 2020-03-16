// package: rostopic
// file: rostopic.cmd_vel.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as rostopic_cmd_vel_pb from "./rostopic.cmd_vel_pb";

interface ICmdVelTopicService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    publish: ICmdVelTopicService_Ipublish;
    subscribe: ICmdVelTopicService_Isubscribe;
}

interface ICmdVelTopicService_Ipublish extends grpc.MethodDefinition<rostopic_cmd_vel_pb.Twist, rostopic_cmd_vel_pb.Empty> {
    path: string; // "/rostopic.CmdVelTopic/publish"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rostopic_cmd_vel_pb.Twist>;
    requestDeserialize: grpc.deserialize<rostopic_cmd_vel_pb.Twist>;
    responseSerialize: grpc.serialize<rostopic_cmd_vel_pb.Empty>;
    responseDeserialize: grpc.deserialize<rostopic_cmd_vel_pb.Empty>;
}
interface ICmdVelTopicService_Isubscribe extends grpc.MethodDefinition<rostopic_cmd_vel_pb.Empty, rostopic_cmd_vel_pb.Twist> {
    path: string; // "/rostopic.CmdVelTopic/subscribe"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<rostopic_cmd_vel_pb.Empty>;
    requestDeserialize: grpc.deserialize<rostopic_cmd_vel_pb.Empty>;
    responseSerialize: grpc.serialize<rostopic_cmd_vel_pb.Twist>;
    responseDeserialize: grpc.deserialize<rostopic_cmd_vel_pb.Twist>;
}

export const CmdVelTopicService: ICmdVelTopicService;

export interface ICmdVelTopicServer {
    publish: grpc.handleUnaryCall<rostopic_cmd_vel_pb.Twist, rostopic_cmd_vel_pb.Empty>;
    subscribe: grpc.handleServerStreamingCall<rostopic_cmd_vel_pb.Empty, rostopic_cmd_vel_pb.Twist>;
}

export interface ICmdVelTopicClient {
    publish(request: rostopic_cmd_vel_pb.Twist, callback: (error: grpc.ServiceError | null, response: rostopic_cmd_vel_pb.Empty) => void): grpc.ClientUnaryCall;
    publish(request: rostopic_cmd_vel_pb.Twist, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rostopic_cmd_vel_pb.Empty) => void): grpc.ClientUnaryCall;
    publish(request: rostopic_cmd_vel_pb.Twist, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rostopic_cmd_vel_pb.Empty) => void): grpc.ClientUnaryCall;
    subscribe(request: rostopic_cmd_vel_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rostopic_cmd_vel_pb.Twist>;
    subscribe(request: rostopic_cmd_vel_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rostopic_cmd_vel_pb.Twist>;
}

export class CmdVelTopicClient extends grpc.Client implements ICmdVelTopicClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public publish(request: rostopic_cmd_vel_pb.Twist, callback: (error: grpc.ServiceError | null, response: rostopic_cmd_vel_pb.Empty) => void): grpc.ClientUnaryCall;
    public publish(request: rostopic_cmd_vel_pb.Twist, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rostopic_cmd_vel_pb.Empty) => void): grpc.ClientUnaryCall;
    public publish(request: rostopic_cmd_vel_pb.Twist, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rostopic_cmd_vel_pb.Empty) => void): grpc.ClientUnaryCall;
    public subscribe(request: rostopic_cmd_vel_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rostopic_cmd_vel_pb.Twist>;
    public subscribe(request: rostopic_cmd_vel_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rostopic_cmd_vel_pb.Twist>;
}
