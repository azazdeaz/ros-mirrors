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
    aaaaa
    <Comp />
    <MirrorRoom />
  </div>
)

ReactDOM.render(App(), elRoot)
test()

console.log('test1')
test()