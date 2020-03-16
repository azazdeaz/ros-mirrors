import hw from './helloworld_pb'
const { HelloRequest, RepeatHelloRequest } = hw
import hwgw from './helloworld_grpc_web_pb'
const { GreeterClient } = hwgw

var client = new GreeterClient(
  'http://' + window.location.hostname + ':8080',
  null,
  null,
)
;(window.__GRPCWEB_DEVTOOLS__ || (() => {}))([client])

// simple unary call
var request = new HelloRequest()
request.setName('World')

client.sayHello(request, {}, (err, response) => {
  if (err) {
    console.log('rettentoen nagy a baj', err)
  }
  console.log(response.getMessage())
})

// server streaming call
var streamRequest = new RepeatHelloRequest()
streamRequest.setName('World')
streamRequest.setCount(5)

var stream = client.sayRepeatHello(streamRequest, {})
stream.on('data', response => {
  console.log(response.getMessage())
})

// deadline exceeded
var deadline = new Date()
deadline.setSeconds(deadline.getSeconds() + 1)

client.sayHelloAfterDelay(
  request,
  { deadline: deadline.getTime().toString() },
  (err, response) => {
    console.log('Got error, code = ' + err.code + ', message = ' + err.message)
  },
)
