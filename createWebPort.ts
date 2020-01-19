import * as http from 'http'
import { requireWithSourceNoEval } from './requireWithSource'
import { resolve } from 'dns'

const html = (src: string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>title</title>
    <link rel="stylesheet" href="style.css">
    <script src="${src}.js"></script>
  </head>
  <body>
    halihoheyhó
  </body>
</html>`

type Options = {
  main: string
}

export function createWebPort({ main }: Options) {
  const port = 3000

  const requestHandler = async (
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) => {
    console.log('GET', req.url)
    if (req.url === '/') {
      res.end(html(main))
    } else if (req.url && req.url.endsWith('.js')) {
      const { js } = await requireWithSourceNoEval('./'+req.url.slice(1, -3))
      res.end(js)
    }
    else {
      res.end()
    }
  }

  const server = http.createServer(requestHandler)

  server.listen(port, () => {
    // if (err) {
    //   return console.log('something bad happened', err)
    // }

    console.log(`server is listening on ${port}`)
  })
}
