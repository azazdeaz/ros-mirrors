import React from 'react'
const { useState, useEffect } = React
import rxjs from 'rxjs'
const { BehaviorSubject } = rxjs

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
  console.log({mirrors})
  return <div>mrs{mirrors?.map((mirror, i) => <div key={i}>{mirror.renderMirror()}</div>)}</div>
}
