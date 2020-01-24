import { test } from './test2'
// @ts-ignore
import { hot } from '/@hmr/api'
import React from 'react'
import ReactDOM from 'react-dom'
import { Comp } from './testcomp'
import 'react'

ReactDOM.render(
 <div>aaa<Comp/></div>,
  // React.createElement("h1", {}, "Hello from es-react"),
  
  // @ts-ignore
  document.body,
)


const y = React

const x: number = 9
console.log(x*4)
test()

// @ts-ignore
hot(import.meta.url).accept(['./test2', './testcomp.tsx'], () => {
  console.log('accept update')
  ReactDOM.render(
    <div>
      aaaup
      <Comp />
    </div>,
    // React.createElement("h1", {}, "Hello from es-react"),
    // @ts-ignore
    document.body,
  )
})
