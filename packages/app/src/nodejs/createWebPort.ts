import { Server } from 'heiss/lib/server/server'
import route from 'koa-route'
import { dirname, relative } from 'path'
import fs from 'fs-extra'
import { promisify } from 'util'
const resolve = require('resolve')
import ts from 'typescript'
// import jspmResolve from '@jspm/resolve'
import { transform } from '@babel/core'

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

const cjs2es6 = (source: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    transform(
      source,
      {
        plugins: [
          'transform-node-env-inline',
          'conditional-compile',
          'transform-cjs-dew',
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

const rxImport = /import\s+(.*)(['"])(.*)(['"])/
const rxNotBareImport = /^(\/|\.\/|\.\.\/)/

function prefDotSlash(path: string) {
  return /^(\.|\/)/.test(path) ? path : `./${path}`
}

const isAbsolutePath = (path: string) => path.startsWith('/')

async function convertImports(source: string, filePath: string) {
  return (
    await Promise.all(
      source.split('\n').map(async line => {
        const match = line.match(rxImport)
        if (!match) {
          return line
        }
        const [statement, names, ap1, specifier, ap2] = match

        if (isAbsolutePath(specifier)) {
          return line
        }

        const es6Path = await (rxNotBareImport.test(specifier)
          ? createPathResolver(dirname(filePath))(specifier).then(fullPath =>
              prefDotSlash(relative(dirname(filePath), fullPath)),
            )
          : Promise.resolve(`https://dev.jspm.io/${specifier}`)
        )
          // : jspmResolve(specifier, filePath, {
          //     env: {
          //       browser: true,
          //       production: false,
          //     },
          //   })
          //     .then(({ resolved }) => resolved)
          //     .then(fullPath => relative(dirname(filePath), fullPath))
          .catch(e => specifier)
        console.log(`${specifier} >>>>>>>>>>> ${es6Path}`)
        return line.replace(statement, `import ${names}${ap1}${es6Path}${ap2}`)
      }),
    )
  ).join('\n')
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

  if (path.includes('/node_modules/')) {
    result = await cjs2es6(result)
  }

  result = await convertImports(result, path)

  if (!path.includes('/node_modules/')) {
    result = wrapWith$our$(result, source, path)
  }

  return result
}
const html = (src: string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>title</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/6.1.9/system.js"></script>
    <script type="module" src="${src}"></script>
  </head>
  <body>
    <div id="react-root">react goes here</div>
  </body>
</html>`

type Options = {
  main: string
  basedir: string
}

function isUnderSrc(filePath: string) {
  return true
  // console.log({ filePath })
  // const relative = relative(__dirname, dirname(filePath))
  // console.log({ relative, filePath, __dirname })
  // return (
  //   relative === '' || (!relative.startsWith('..') && !isAbsolute(relative))
  // )
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

  return { server } 
}
