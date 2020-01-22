// @ts-ignore
import { test } from './test2.ts'
// @ts-ignore
import { hot } from '/@hmr/api'
const x: number = 9
console.log(x*4)
test()

// @ts-ignore
hot(import.meta.url).accept(['./test2.ts'], () => {
  console.log('accept update')
  test()
})
