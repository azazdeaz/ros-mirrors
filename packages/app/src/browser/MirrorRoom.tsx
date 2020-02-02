import React, { useState, useEffect, ReactElement } from 'react'
import { BehaviorSubject } from 'rxjs'
import { MirrorFrame } from './MirrorFrame'
// import Editor from '@monaco-editor/react'

type Mirror = {
  renderMirror: () => ReactElement
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
        <MirrorFrame key={i} renderContent={mirror.renderMirror} />
      ))}
    </div>
  )
}
