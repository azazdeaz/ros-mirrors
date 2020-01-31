
// @ts-ignore1
import React from 'react'
import ReactDOM from 'react-dom'
import { Comp } from './testcomp'
import graphMirror from './GraphMirror'
import { MirrorRoom, addMirror } from './MirrorRoom'
addMirror(graphMirror)

setTimeout(() => addMirror(graphMirror), 1000)

// @ts-ignore
const elRoot = document.querySelector('#react-root')

const App = () => (
  <div>
    ccccc
    <Comp />
    <MirrorRoom />
  </div>
)

ReactDOM.render(App(), elRoot)

import('./test2').then(({ test }) => {
  test()

  console.log('test111!231')
  test()
})