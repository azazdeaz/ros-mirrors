import { Observable } from 'rxjs'
import { join } from 'path'
import os from 'os'
import { spawn } from 'node-pty'

export function run(
  command: string = 'roslaunch rosbridge_server rosbridge_websocket.launch',
) {
  return new Observable(observer => {
    const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash'
    const cwd = join(__dirname, '../../../../turtlebot_ws/')
    console.log('cwd', cwd)
    const ptyProcess = spawn(shell, [], {
      name: 'xterm-color',
      cols: 80,
      rows: 30,
      cwd,
      env: { ...process.env, TURTLEBOT3_MODEL: 'waffle_pi' },
    })

    ptyProcess.on('data', function(data) {
      console.log('data')
      observer.next(data)
    })

    ptyProcess.resize(100, 40)
    ptyProcess.write('ls\r')
    ptyProcess.write('source ./devel/setup.bash\r')
    setTimeout(() => ptyProcess.write(`${command}\r`), 1000)

    const cleanup = () => {
      console.log('cleanup pty')
      ptyProcess.kill()
      process.exit()
    }

    process.addListener('exit', cleanup)
    process.addListener('SIGUSR1', cleanup)
    process.addListener('SIGUSR2', cleanup)

    return () => {
      cleanup()
      process.removeListener('exit', cleanup)
      process.removeListener('SIGUSR1', cleanup)
      process.removeListener('SIGUSR2', cleanup)
    }
  })
}
