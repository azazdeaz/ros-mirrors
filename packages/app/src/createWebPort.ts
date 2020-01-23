// import * as http from 'http'
import { transpile, resolvePath } from './requireWithSource'
import { Server } from '../node_modules/heiss/lib/server/server'
import route from 'koa-route'
import path from 'path'
import fs from 'fs'

const html = (src: string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>title</title>
    <script type="module" src="${src}.tsx"></script>
  </head>
  <body>
    halihoheyhó+
  </body>
</html>`

type Options = {
  main: string
}

// export function createWebPort({ main }: Options) {
//   const port = 3000

//   const requestHandler = async (
//     req: http.IncomingMessage,
//     res: http.ServerResponse
//   ) => {
//     console.log('GET', req.url)
//     if (req.url === '/') {
//       res.end(html(main))
//     } else if (req.url && req.url.endsWith('.js')) {
//       const { js } = await requireWithSourceNoEval('./'+req.url.slice(1, -3))
//       res.end(js)
//     }
//     else {
//       res.end()
//     }
//   }

//   const server = http.createServer(requestHandler)

//   server.listen(port, () => {
//     // if (err) {
//     //   return console.log('something bad happened', err)
//     // }

//     console.log(`server is listening on ${port}`)
//   })
// }

function isUnderSrc(filePath: string) {
  return true
  console.log({filePath})
  const relative = path.relative(__dirname, path.dirname(filePath))
  console.log({relative, filePath, __dirname})
  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative))
}

function wsMessageHandler(message: any) {
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
  fs.writeFileSync(message.path, message.content)
  console.log('file written')
}

export function createWebPort({ main }: Options) {
  const server = new Server({
    host: 'localhost',
    port: 8080,
    directory: 'src',
    transpiler: ({ content, path }) => {
      if (path.endsWith('.ts') || path.endsWith('.tsx')) {
        return transpile(content, path)
      }
      return content
    },
    pathResolver: resolvePath,
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
