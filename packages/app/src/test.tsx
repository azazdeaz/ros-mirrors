import { test } from './test2'
// @ts-ignore
import { hot } from '/@hmr/api'
import React from 'react'
import ReactDOM from 'react-dom'
import { Comp } from './testcomp'
import { Chart } from './Chart'
import 'react'

// @ts-ignore
const elRoot = document.querySelector('#react-root')

ReactDOM.render(
  <div>
    aaa
    <Comp />
    <Chart width={300} height={300} />
  </div>,

  elRoot,
)
test()

// @ts-ignore
hot(import.meta.url).accept(['./test2', './testcomp.tsx'], () => {
  console.log('accept update')
  ReactDOM.render(
    <div>
      aaaup
      {/* <Comp /> */}
      <Chart width={300} height={300} />
      dsf
    </div>,
    elRoot,
  )
})
