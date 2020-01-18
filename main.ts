import { requireWithSource } from './requireWithSource'
console.log('ad')
requireWithSource('./test.ts').then(res => {
  console.log(res)
  // @ts-ignore
  res.test()
})
