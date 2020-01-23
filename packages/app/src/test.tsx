// @ts-ignore
import { test } from './test2.ts'
// @ts-ignore
import { hot } from '/@hmr/api'
import { React, ReactDOM, ReactIs, PropTypes } from 'https://unpkg.com/es-react@16.12.0/index.js?module'
import { Comp } from './testcomp.tsx'

ReactDOM.render(
 <div>aaa<Comp/></div>,
  // React.createElement("h1", {}, "Hello from es-react"),

  document.body,
)


const y = React

const x: number = 9
console.log(x*4)
test()

// @ts-ignore
hot(import.meta.url).accept(['./test2.ts', './testcomp.tsx'], () => {
  console.log('accept update')
  ReactDOM.render(
    <div>
      aaaup
      <Comp />
    </div>,
    // React.createElement("h1", {}, "Hello from es-react"),

    document.body,
  )
})
