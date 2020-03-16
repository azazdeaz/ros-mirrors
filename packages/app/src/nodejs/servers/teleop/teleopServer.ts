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
  CmdVelTopicService,
  ICmdVelTopicServer,
} from './stubs/rostopic.cmd_vel_grpc_pb'
import { Twist, Empty } from './stubs/rostopic.cmd_vel_pb'

import ROS from 'roslib'

export const ros = new ROS.Ros({ url: 'ws://localhost:9090' })

const publish: ICmdVelTopicServer['publish'] = (call, callback) => {
  console.log('publish', call.request.toObject())
  const msg = call.request.toObject()
  const topic = new ROS.Topic({
    ros,
    name: '/cmd_vel',
    messageType: 'geometry_msgs/Twist',
    compression: 'cbor',
  })
  topic.publish(msg)
  callback(null, new Empty())
}

const subscribe: ICmdVelTopicServer['subscribe'] = call => {
  console.log('subscribug')
  const topic = new ROS.Topic({
    ros,
    name: '/cmd_vel',
    messageType: 'geometry_msgs/Twist',
    compression: 'cbor',
  })
  topic.subscribe((rosmsg: Twist.AsObject) => {
    console.log('got ros message', rosmsg)

    const msg = new Twist()
    const linear = new Twist.Vector3()
    linear.setX(rosmsg.linear!.x)
    linear.setY(rosmsg.linear!.y)
    linear.setZ(rosmsg.linear!.z)
    const angular = new Twist.Vector3()
    angular.setX(rosmsg.angular!.x)
    angular.setY(rosmsg.angular!.y)
    angular.setZ(rosmsg.angular!.z)
    msg.setLinear(linear)
    msg.setAngular(angular)
    call.write(msg)
  })
}

export const login = (addService: Server['addService']) =>
  addService(CmdVelTopicService, { publish, subscribe })
