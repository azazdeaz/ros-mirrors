import { open, Bag, ReadResult } from 'rosbag'
import WebSocket from 'ws'
import { join } from 'path'
import delay from 'delay'

type TopicQuery = {
  address: 'ros-bag'
  topic: string
  requestID: string
}

function isTopicQuery(val: any): val is TopicQuery {
  return (
    typeof val === 'object' &&
    val.address === 'ros-bag' &&
    typeof val.topic === 'string' &&
    typeof val.requestID === 'string'
  )
}

const bagMap: Map<string, Promise<Bag>> = new Map()
const loadBag = async (
  filepath: string = join(__dirname, '../../bags/example.bag'),
): Promise<Bag> => {
  if (!bagMap.has(filepath)) {
    bagMap.set(filepath, open(filepath))
  }
  return await bagMap.get(filepath)!
}

loadBag().then(bag => console.log(Object.keys(bag)))

export const wsHandler = async (message: any, ws: WebSocket) => {
  if (isTopicQuery(message)) {
    const { topic, requestID } = message
    const bag = await loadBag()
    const messages: ReadResult<any>[] = []
    bag.readMessages({ topics: [topic] }, result => {
      messages.push(result)
    })
    await delay(10)
    ws.send(
      JSON.stringify({
        replyID: requestID,
        messages,
      }),
    )
  }
}
