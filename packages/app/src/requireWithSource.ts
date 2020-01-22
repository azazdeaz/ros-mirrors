import { readFile } from 'fs'
import { promisify } from 'util'
const resolve = require('resolve')
import ts from 'typescript'

const wrapWith$our$ = (src: string, raw: string) => `
const $our$ = {
  content: ${JSON.stringify(raw)}
}

${src}
`

const extensions = ['.js', '.ts', '.tsx']

export async function resolvePath(path: string): Promise<string> {
  path = path = '../'+ path
  const filePath = await promisify(resolve)(path, { basedir: __dirname, extensions })
    .catch((err: Error) => console.log(err))
  console.log({path, filePath})
  return filePath || path
}

export function transpile(tsSource: string) {
  let tsout = ts.transpileModule(tsSource, {
    compilerOptions: { module: ts.ModuleKind.ESNext }
  })
  return wrapWith$our$(tsout.outputText, tsSource)
}