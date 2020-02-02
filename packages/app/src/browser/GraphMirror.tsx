import React, { Component, useRef } from 'react'
import Konva from 'konva'
import range from 'lodash/range'
import get from 'lodash/get'
import zip from 'lodash/zip'
import { Stage, Layer, Rect, Text, Line } from 'react-konva'
import { useTopic } from './useTopic'
import color from 'color'

type Props = {
  width: number
  height: number
  values: string[]
}

const getPoints = (width = 100, height = 100): number[] => {
  const nudge = (val: number, dir: number) =>
    Math.max(0, Math.min(height, val + (dir - height / 2) * Math.random()))

  const points: [number, number][] = range(width).map(i => [
    i,
    Math.random() * height,
  ])
  return points
    .reduce<[number, number][]>((acc, p) => {
      const last = acc[acc.length - 1]
      if (!last) {
        return [p]
      }

      return [...acc, [p[0], nudge(last[1], p[1])]]
    }, [])
    .flat()
}

type MyLineProps = {
  prop: string
  messages?: any[]
  width: number
  height: number
}

const normarr = (values: number[], scale: number) => {
  const min = Math.min(...values)
  const max = Math.max(...values)
  return values.map(v => ((v - min) / (max - min)) * scale)
}

const MyLine = ({ prop, messages, width, height }: MyLineProps) => {
  const { current: strokeColor} = useRef(Konva.Util.getRandomColor())

  if (!messages) {
    return null
  }
  const x = normarr(
    messages.map(m => m.time),
    width,
  )
  const y = normarr(messages.map(m => get(m, prop)) as number[], height)

  return (
    <Line
      points={zip(x, y).flat() as number[]}
      stroke={color(strokeColor).fade(0.1).string()}
      tension={1}
    />
  )
}

const GraphMirror = ({ width, height, values }: Props) => {
  const messages = useTopic('/tf')
  console.log('render GM', width, height)
  return (
    <Stage width={width} height={height}>
      <Layer>
        <Rect x={0} y={0} width={width} height={height} fill={'black'} />
        {values.map(value => (
          <MyLine
            key={value}
            prop={value}
            messages={messages}
            width={width}
            height={height}
          />
        ))}
      </Layer>
    </Stage>
  )
}

export const create = (props: Props) => ({
  renderMirror: (props2: Partial<Props>) => <GraphMirror {...{...props, ...props2}} />,
})
