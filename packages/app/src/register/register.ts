import { Observable, Subject } from "rxjs"

type Options<Local> = {
  local: Local
  receive: Observable<string>
  send: Subject<string>
}

enum Trap {
  CALL = '$$CALL$$',
  GET = '$$GET$$',
  SET = '$$SET$$',
}

const get = (target: object, path: PathPiece[]) => {
  let result: any = target
  for (const prop in path) {
    if (prop in result) {
      result = result[prop]
    } else {
      throw new TypeError(`Cannot read property '${prop}' of ${result}`)
    }
  }
}

const jsonParse = (json: string) => {
  try {
    return JSON.parse(json)
  } catch {}
}

type PathPiece = string | number | Symbol

type ReflectMessage = {
  path: PathPiece[]
  trap: Trap
  args: any[]
}

function isReflectMessage(msg: any): msg is ReflectMessage {
  return (
    typeof msg === 'object' &&
    msg.path instanceof Array &&
    Object.values(Trap).includes(msg.trap) &&
    msg.args instanceof Array
  )
}

export function createRegister<Remote extends object, Local extends object>({
  local,
  receive,
  send,
}: Options<Local>) {

  receive.subscribe(input => {
    const msg = jsonParse(input)
    if (isReflectMessage(msg)) {
      const thing = get(local, msg.path)
      if (thing) {

      }
      reflect(msg.path, msg.trap, msg.args)
    }
  })

  const reflect = (path: PathPiece[], trap: Trap, args: any[]) => {
    const thing = get(local, path)
    if (!thing) {
      return true
    }

  }

  function createProxy(stack: PathPiece[] = []): any {
    return new Proxy(Object.freeze({}), {
      get: (_, prop) => {
        return createProxy([...stack, prop])
      },
      apply: (_, prop, value) => {
        return reflect([...stack, prop], Trap.SET, [value])
      },
    })
  }

  const proxy = createProxy()

  return proxy as Local & Remote
}
