import { test } from './test2'
// @ts-ignore
import { hot } from '/@hmr/api'
import React from 'react'
import ReactDOM from 'react-dom'
import { Comp } from './testcomp'
import graphMirror from './GraphMirror'
import { MirrorRoom, addMirror } from './MirrorRoom'
import 'react'

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

// @ts-ignore
hot(import.meta.url).accept(['./test2', './testcomp.tsx'], () => {
  console.log('accept update')
  ReactDOM.render(App(), elRoot)
})
