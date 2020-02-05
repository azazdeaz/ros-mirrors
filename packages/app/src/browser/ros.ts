import ROS, { Message } from 'roslib'
import { Subject } from 'rxjs'

export const ros = new ROS.Ros({ url: 'ws://localhost:9090' })

export const createTopicObservable = (name: string) => {
  // @ts-ignore
  const topic = new ROS.Topic({ ros, name, compression: 'cbor' })
  const sub = new Subject<Message>()
  topic.subscribe((msg: Message) => sub.next(msg))
  return sub
}

// @ts-ignore
window['rc'] = ros
