import { test } from './test2'
// @ts-ignore1
import React from 'react'
import ReactDOM from 'react-dom'
import { Comp } from './testcomp'
import graphMirror from './GraphMirror'
import { MirrorRoom, addMirror } from './MirrorRoom'
import { useMemo } from 'react'
addMirror(graphMirror)

setTimeout(() => addMirror(graphMirror), 1000)

// @ts-ignore
const elRoot = document.querySelector('#react-root')

const App = () => (
  <div>
    cccccd
    <Comp />
    <MirrorRoom />
  </div>
)

ReactDOM.render(App(), elRoot)
test()

console.log('test111!231')
test()



import { webSocket } from "rxjs/webSocket";
const subject = webSocket('ws://localhost:8080');
 
subject.subscribe();
// Note that at least one consumer has to subscribe to the created subject - otherwise "nexted" values will be just buffered and not sent,
// since no connection was established!
// @ts-ignore
 window.webs = webSocket
subject.next({message: 'some message'});
// This will send a message to the server once a connection is made. Remember value is serialized with JSON.stringify by default!