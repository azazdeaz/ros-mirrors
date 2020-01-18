import { readFile } from 'fs'
import { promisify } from 'util'
const resolve = require('resolve')
import * as ts from 'typescript'

const wrap = (src: string) => `(() => {
  const exports = {}
  ${src}
  return exports
})()`

export async function requireWithSource(path: string): Promise<any> {
  path = await promisify(resolve)(path, { basedir: __dirname })
  const source = await promisify(readFile)(path, 'utf8')
  let tsout = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS }
  })
  const js = wrap(tsout.outputText)
  const m = eval(js) as any
  console.log('ts', source)
  console.log('js', js)
  console.log('module', m)
  return m
}
