import { readFile } from 'fs'
import { promisify } from 'util'
const resolve = require('resolve')
import ts from 'typescript'

const wrap = (src: string) => `(() => {
  const exports = {}
  ${src}
  return exports
})()`

const extensions = ['.js', '.ts', '.tsx']

export async function resolvePath(path: string): Promise<string> {
  path = path = '../'+ path
  const filePath = await promisify(resolve)(path, { basedir: __dirname, extensions })
    .catch((err: Error) => console.log(err))
  console.log({path, filePath})
  return filePath || path
}

export async function requireWithSource(path: string): Promise<any> {
  path = await promisify(resolve)(path, { basedir: __dirname, extensions })
  const source = await promisify(readFile)(path, 'utf8')
  let tsout = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS }
  })
  const js = wrap(tsout.outputText)
  const m = eval(js) as any
  return m
}

export async function requireWithSourceNoEval(path: string): Promise<any> {
  path = await promisify(resolve)(path, { basedir: __dirname, extensions })
  const source = await promisify(readFile)(path, 'utf8')
  let tsout = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS }
  })
  const js = wrap(tsout.outputText)
  return { source, js }
}

export function transpile(tsSource: string) {
  let tsout = ts.transpileModule(tsSource, {
    compilerOptions: { module: ts.ModuleKind.ESNext }
  })
  return tsout.outputText
}