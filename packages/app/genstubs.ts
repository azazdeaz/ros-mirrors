import { genstubs } from 'genstubs'
import { join } from 'path'

genstubs({
  outDir: join(__dirname, './src/nodejs/servers/camera/stubs'),
  protoPath: join(__dirname, './src/nodejs/servers/camera/rostopic.image.proto'),
})