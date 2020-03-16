import * as grpcWeb from 'grpc-web';

import {
  Empty,
  Twist} from './rostopic.cmd_vel_pb';

export class CmdVelTopicClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  publish(
    request: Twist,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Empty) => void
  ): grpcWeb.ClientReadableStream<Empty>;

  subscribe(
    request: Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Twist>;

}

export class CmdVelTopicPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  publish(
    request: Twist,
    metadata?: grpcWeb.Metadata
  ): Promise<Empty>;

  subscribe(
    request: Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Twist>;

}

