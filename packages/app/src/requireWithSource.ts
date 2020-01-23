import { readFile } from 'fs'
import { promisify } from 'util'
const resolve = require('resolve')
import ts from 'typescript'

const wrapWith$our$ = (src: string, raw: string, path: string) => `
import { websocket } from '/@hmr/api'
const $our$ = {
  content: ${JSON.stringify(raw)},
  update: content => websocket.send(JSON.stringify({ 
    type: 'update', 
    path: ${JSON.stringify(path)}, 
    content
  }))
}

${src}
`

const extensions = ['.js', '.ts', '.tsx']

export async function resolvePath(path: string): Promise<string> {
  path = path = '../'+ path
  const filePath = await promisify(resolve)(path, { basedir: __dirname, extensions })
    .catch((err: Error) => console.log(err))
  return filePath || path
}

export function transpile(tsSource: string, path: string) {
  let tsout = ts.transpileModule(tsSource, {
    compilerOptions: { module: ts.ModuleKind.ESNext, jsx: ts.JsxEmit.React, target: ts.ScriptTarget.ES2020 }
  })
  return wrapWith$our$(tsout.outputText, tsSource, path)
}