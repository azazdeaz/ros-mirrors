import { requireWithSource } from './requireWithSource'
import { createWebPort } from './createWebPort'
console.log('ad')
requireWithSource('./test.ts').then(res => {
  console.log(res)
  // @ts-ignore
  res.test()
})

createWebPort({ main: './test'})
