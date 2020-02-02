import React, { useState, useEffect, useCallback, ReactElement } from 'react'
import { Rnd, RndResizeCallback } from 'react-rnd'

type Props = {
  renderContent: (props: { width: number; height: number }) => ReactElement
}

export const MirrorFrame = ({ renderContent }: Props) => {
  const [[width, height], setSize] = useState<[number, number]>([300, 300])
  const handleResize = useCallback<RndResizeCallback>(
    (_, __, { style: { width, height } }) => {
      setSize([parseInt(width), parseInt(height)])
    },
    [],
  )
  console.log('res', width, height)

  return (
    <Rnd size={{ width, height }} onResize={handleResize}>
      {renderContent({ width, height })}
    </Rnd>
  )
}
