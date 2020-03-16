import * as grpcWeb from 'grpc-web';

import {
  HelloReply,
  HelloRequest,
  RepeatHelloRequest} from './helloworld_pb';

export class GreeterClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  sayHello(
    request: HelloRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: HelloReply) => void
  ): grpcWeb.ClientReadableStream<HelloReply>;

  sayRepeatHello(
    request: RepeatHelloRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<HelloReply>;

  sayHelloAfterDelay(
    request: HelloRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: HelloReply) => void
  ): grpcWeb.ClientReadableStream<HelloReply>;

}

export class GreeterPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  sayHello(
    request: HelloRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<HelloReply>;

  sayRepeatHello(
    request: RepeatHelloRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<HelloReply>;

  sayHelloAfterDelay(
    request: HelloRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<HelloReply>;

}

