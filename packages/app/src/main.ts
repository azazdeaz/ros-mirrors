import { start } from './createWebPort2'
import { join } from 'path'
import { open, Bag, ReadResult } from 'rosbag'
import delay from 'delay'
import route from 'koa-route'

// const { server } = createWebPort({
//   main: './dist/build.js',
//   basedir: join(__dirname, '..'),
// })

start()

// open('./bags/example.bag').then(bag => console.log(bag))

const bagMap: Map<string, Promise<Bag>> = new Map()
const loadBag = async (
  filepath: string = './bags/example.bag',
): Promise<Bag> => {
  if (!bagMap.has(filepath)) {
    bagMap.set(filepath, open(filepath))
  }
  return await bagMap.get(filepath)!
}

// server.app.use(
//   // @ts-ignore
//   route.get('/topic/:topic', async (ctx, topic) => {
//     console.log('load topic', topic)
//     const bag = await loadBag()
//     const messages: ReadResult<any>[] = []
//     bag.readMessages({ topics: [`/${topic}`] }, result => {
//       messages.push(result)
//     })
//     await delay(100)
//     ctx.body = JSON.stringify(messages)
//   }),
// )

async function logMessagesFromFooBar() {
  // open a new bag at a given file location:
  const bag = await open('./bags/example.bag')

  bag.header

  // read all messages from both the '/foo' and '/bar' topics:
  await bag.readMessages({ topics: ['/tf', '/turtle2/pose'] }, result => {
    // topic is the topic the data record was in
    // in this case it will be either '/foo' or '/bar'
    console.log('----------------------------------')
    console.log(result.topic)

    console.log(result.timestamp)
    console.log(result.totalChunks)

    // message is the parsed payload
    // this payload will likely differ based on the topic
    console.log(result.message)
    console.log(result.data)
  })
}

// logMessagesFromFooBar()
