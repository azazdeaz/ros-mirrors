import React, { useState, useEffect } from 'react'
import { BehaviorSubject } from 'rxjs'
// import Editor from '../node_modules/@monaco-editor/react'

type Mirror = {
  renderMirror: () => JSX.Element
  x?: number
  y?: number
}

const mirrors$ = new BehaviorSubject([] as Mirror[])

export function addMirror(mirror: Mirror) {
  mirrors$.next([...mirrors$.value, mirror])
}

export const MirrorRoom = () => {
  const [mirrors, setMirrors] = useState(mirrors$.value)
  useEffect(() => {
    const sub = mirrors$.subscribe(value => setMirrors(value))
    return sub.unsubscribe
  }, [])
  console.log({ mirrors })
  return (
    <div>
      {/* <Editor height="90vh" language="javascript" /> */}
      {mirrors?.map((mirror, i) => (
        <div key={i}>{mirror.renderMirror()}</div>
      ))}
    </div>
  )
}
