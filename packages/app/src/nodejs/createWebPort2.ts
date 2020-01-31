import express from 'express'
import * as http from 'http'
import * as WebSocket from 'ws'
import { wsHandler as rosBagWSHandler } from './rosBag'

export function start() {
  const app = express()
  app.use(express.static('public'))
  app.use(express.static('dist'))

  //initialize a simple http server
  const server = http.createServer(app)

  //initialize the WebSocket server instance
  const wss = new WebSocket.Server({ server })

  wss.on('connection', (ws: WebSocket) => {
    //connection is up, let's add a simple simple event
    let i = 0
    setInterval(() => ws.send(JSON.stringify({msg: i++})), 4000)
    ws.on('message', (message: string) => {
      //log the received message and send it back to the client
      console.log('received: %s', message)
      try {
        rosBagWSHandler(JSON.parse(message), ws)
      } catch (e) {
        console.error(`Cound't process message - ${e.message}`)
      }
    })

    //send immediatly a feedback to the incoming connection
    // ws.send('Hi there, I am a WebSocket server')
  })

  //start our server
  server.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port 8080 :)`)
  })
}

// @fount(() => notify())
// const x = y => y ** 2

// const x => ((cb) => {
//   const ID = 'r78fihw'
//   let implementation = y => y ** 2
//   $our$.onChange(ID, {
//     (fresh: string) => implementation = eval(fresh))
//     cb && cb()
//   }
//   return (...args) => implementation(...args)
// })();
