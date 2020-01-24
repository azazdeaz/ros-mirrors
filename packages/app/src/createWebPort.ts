import { Server } from '../node_modules/heiss/lib/server/server'
import route from 'koa-route'
import path from 'path'
import { transform } from '@babel/core'
import fs from 'fs-extra'
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

export const createPathResolver = (basedir: string) => async (
  path: string,
): Promise<string> => {
  const filePath = await promisify(resolve)(path, {
    basedir,
    extensions,
  }).catch((err: Error) => console.log(err))
  return filePath || path
}

const rxBareImport = /import\s+(.*)(['"])(\w.*)(['"])/

async function convertBareImports(source: string, filePath: string) {
  return (await Promise.all(source
    .split('\n')
    .map(line => {
      const match = line.match(rxBareImport)
      if (!match) {
        return line
      }
      const moduleName = match[3]

      const pwd = path.dirname(filePath)
      return createPathResolver(pwd)(moduleName)
        .then(modulePath => {
          const relativePath = path.relative(pwd, modulePath)
          return line.replace(rxBareImport, `import $1$2${relativePath}$4`)
        })

    })))
    .join('\n')
}

export async function transpile(source: string, path: string) {
  console.log('transpile', path)
  let result = source

  if (/\.tsx?$/.test(path)) {
    const tsout = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.ESNext,
        jsx: ts.JsxEmit.React,
        target: ts.ScriptTarget.ES2020,
      },
    })

    result = tsout.outputText
  }
  
  console.log('path', path)
  if (path.includes('/node_modules/')) {
    console.log('conver to es6', path)
    result = await cjs2es6(result)
    console.log('result')
  }

  result = await convertBareImports(result, path)
  result = wrapWith$our$(result, source, path)

  return result
}

const cjs2es6 = (source: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    transform(
      source,
      {
        plugins: [
          'transform-commonjs-es2015-modules',
          'transform-node-env-inline',
          'conditional-compile',
        ],
      },
      function(err, result) {
        if (err) {
          return reject(err)
        }
        resolve(result?.code || '')
      },
    )
  })
}

const html = (src: string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>title</title>
    <script type="module" src="${src}"></script>
  </head>
  <body>
    halihoheyhó+
  </body>
</html>`

type Options = {
  main: string
  basedir: string
}

function isUnderSrc(filePath: string) {
  return true
  console.log({ filePath })
  const relative = path.relative(__dirname, path.dirname(filePath))
  console.log({ relative, filePath, __dirname })
  return (
    relative === '' ||
    (!relative.startsWith('..') && !path.isAbsolute(relative))
  )
}

async function wsMessageHandler(message: any) {
  message = JSON.parse(message)
  console.log('message', message)
  console.log(message.path)
  if (
    typeof message !== 'object' ||
    message.type !== 'update' ||
    typeof message.path !== 'string' ||
    typeof message.content !== 'string'
  ) {
    return
  }
  if (!isUnderSrc(message.path)) {
    throw new Error('file path is not under src')
  }
  console.log('write file')
  await fs.writeFile(message.path, message.content)
  console.log('file written')
}

export function createWebPort({ main, basedir }: Options) {
  const pathResolver = createPathResolver(basedir)
  const server = new Server({
    host: 'localhost',
    port: 8080,
    directory: basedir,
    transpiler: ({ content, path }) => transpile(content, path),
    pathResolver,
    wsMessageHandler,
  })
  server.app.use(
    // @ts-ignore
    route.get('/', ctx => {
      ctx.body = html(main)
    }),
  )

  server.start()
}
