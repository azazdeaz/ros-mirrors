/**
 *
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { Server } from 'grpc'
import {
  ImageTopicService,
  IImageTopicServer,
} from './stubs/rostopic.image_grpc_pb'
import { Image, Empty } from './stubs/rostopic.image_pb'

import ROS from 'roslib'

export const ros = new ROS.Ros({ url: 'ws://localhost:9090' })

const publish: IImageTopicServer['publish'] = (call, callback) => {
  const msg = call.request.toObject()
  const topic = new ROS.Topic({
    ros,
    name: '/image',
    messageType: 'geometry_msgs/Image',
    compression: 'cbor',
  })
  topic.publish(msg)
  callback(null, new Empty())
}

let __r = 0

const subscribe: IImageTopicServer['subscribe'] = call => {
  const topic = new ROS.Topic({
    ros,
    name: '/camera/rgb/image_raw',
    messageType: 'sensor_msgs/Image',
    compression: 'cbor',
  })
  // @ts-ignore
  topic.subscribe((rosmsg: Image.AsObject) => {

    if (++__r % 1 === 0) {
      // console.time('convert to pb')
      const msg = new Image()
      msg.setWidth(rosmsg.width)
      msg.setHeight(rosmsg.height)
      msg.setData(rosmsg.data)
      call.write(msg)
      // console.timeEnd('convert to pb')
    }
  })
}

export const login = (addService: Server['addService']) =>
  addService(ImageTopicService, { publish, subscribe })
