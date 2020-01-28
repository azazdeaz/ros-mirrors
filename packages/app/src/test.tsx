import { test } from './test2'
// @ts-ignore
import { hot } from '/@hmr/api'
import React from 'react'
import ReactDOM from 'react-dom'
import { Comp } from './testcomp'
import { Chart } from './Chart'
import { MirrorRoom, addMirror } from './MirrorRoom'
import 'react'

addMirror({
  renderMirror: () => <Chart width={300} height={300} />,
})

setTimeout(
  () =>
    addMirror({
      renderMirror: () => <Chart width={300} height={300} />,
    }),
  1000,
)

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
