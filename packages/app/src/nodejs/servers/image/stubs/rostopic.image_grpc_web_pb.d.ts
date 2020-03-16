import * as grpcWeb from 'grpc-web';

import {
  Empty,
  Image} from './rostopic.image_pb';

export class ImageTopicClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  publish(
    request: Image,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Empty) => void
  ): grpcWeb.ClientReadableStream<Empty>;

  subscribe(
    request: Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Image>;

}

export class ImageTopicPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  publish(
    request: Image,
    metadata?: grpcWeb.Metadata
  ): Promise<Empty>;

  subscribe(
    request: Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Image>;

}

