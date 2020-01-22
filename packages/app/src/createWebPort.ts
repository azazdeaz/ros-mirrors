// import * as http from 'http'
import { transpile, resolvePath } from './requireWithSource'
import { Server } from 'heiss/lib/server/server'
import route from 'koa-route'

const html = (src: string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>title</title>
    <script type="module" src="${src}.ts"></script>
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

export function createWebPort({ main }: Options) {
  const server = new Server({
    host: 'localhost',
    port: 8080,
    directory: 'src',
    transpiler: ({ content, path }) => {
      if (path.endsWith('.ts') || path.endsWith('.tsx')) {
        return transpile(content)
      }
      return content
    },
    resolvePath,
  })
  server.app.use(
    // @ts-ignore
    route.get('/', ctx => {
      ctx.body = html(main)
    })
  )

  server.start()
}
