import { login as loginTeleopService } from './teleop/teleopServer'
import { login as loginImageService } from './image/imageServer'

import grpc from 'grpc'

/**
 * @return {!Object} gRPC server
 */
export function startServer() {
  var server = new grpc.Server()
  loginTeleopService(server.addService.bind(server))
  loginImageService(server.addService.bind(server))
  const port = server.bind(
    '0.0.0.0:12218',
    grpc.ServerCredentials.createInsecure(),
  )
  if (port === 0) {
    throw Error(
      `Couldn't connect the gRPC server to port. It's probably in use.`,
    )
  }
  server.start()
  console.log(`grpc server is running on 0.0.0.0:${port}`)
}