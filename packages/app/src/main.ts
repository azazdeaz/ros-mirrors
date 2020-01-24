import { createWebPort } from './createWebPort'
import {join} from 'path'

// requireWithSource('./test.ts').then(res => {
//   console.log(res)
//   // @ts-ignore
//   res.test()
// })

createWebPort({ main: './src/test', basedir: join(__dirname, '..')})


