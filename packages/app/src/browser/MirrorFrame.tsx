import React, { useState, useEffect, useCallback, ReactElement } from 'react'
import { Rnd, RndResizeCallback } from 'react-rnd'
import { ParentSizeContext } from './ParentSize'

type Props = {
  renderContent: () => ReactElement
  initialState: {
    x?: number
    y?: number
    width?: number
    height?: number
  }
}

export const MirrorFrame = ({ renderContent, initialState }: Props) => {
  const [[width, height], setSize] = useState<[number, number]>([
    initialState.width ?? 300,
    initialState.height ?? 300,
  ])
  const handleResize = useCallback<RndResizeCallback>(
    (_, __, { style: { width, height } }) => {
      setSize([parseInt(width), parseInt(height)])
    },
    [],
  )
  
  return (
    <Rnd
      size={{ width, height }}
      position={{ x: initialState.x ?? 0, y: initialState.y ?? 0 }}
      onResize={handleResize}
    >
      <ParentSizeContext.Provider value={{ width, height }}>
        {renderContent()}
      </ParentSizeContext.Provider>
    </Rnd>
  )
}
