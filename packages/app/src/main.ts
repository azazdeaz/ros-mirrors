import { createWebPort } from './createWebPort'
import {join} from 'path'
import { open } from 'rosbag'

createWebPort({ main: './src/test', basedir: join(__dirname, '..')})


// open('./bags/example.bag').then(bag => console.log(bag))


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