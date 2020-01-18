import { readFile } from 'fs'
import { promisify } from 'util'
const resolve = require('resolve')

export async function requireWithSource(path: string): Promise<any> {
  path = await promisify(resolve)(path, { basedir: __dirname })
  const file = await promisify(readFile)(path, 'utf8')
  console.log('in require', file)
  return file
}
