import { createWebPort } from './createWebPort'

// requireWithSource('./test.ts').then(res => {
//   console.log(res)
//   // @ts-ignore
//   res.test()
// })

createWebPort({ main: './test'})

