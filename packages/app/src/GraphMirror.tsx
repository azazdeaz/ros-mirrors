import React, { Component } from 'react'
import rk from 'react-konva'
import Konva from 'konva'
import range from 'lodash/range'
import get from 'lodash/get'
import zip from 'lodash/zip'
import reactUse from 'react-use'
import { Observable } from 'rxjs'
const { Stage, Layer, Rect, Text, Line } = rk
const { useAsync } = reactUse

class ColoredRect extends React.Component {
  state = {
    color: 'green',
  }
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor(),
    })
  }
  render() {
    return (
      <Rect
        x={20}
        y={20}
        width={50}
        height={50}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    )
  }
}

type Props = {
  width: number
  height: number
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
  if (!messages) {
    return null
  }
  const x = normarr(
    messages.map(m => m.time),
    width,
  )
  const y =normarr(messages.map(m => get(m, prop)) as number[], height)

  return <Line points={zip(x, y).flat() as number[]} stroke="lime" tension={1} />
}

const GraphMirror = ({ width, height }: Props) => {
  // @ts-ignore
  const state = useAsync(async () => {
    const response = await fetch('http://localhost:8080/topic/tf')
    const text = await response.text()
    const messages = (JSON.parse(text) as any[])
      .map(msg => ({
        time: msg.timestamp.sec + msg.timestamp.nsec / 10 ** 8,
        transform: msg.message.transforms[0].transform,
      }))
      .sort((a, b) => a.time - b.time)

    return messages
  })

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Rect x={0} y={0} width={width} height={height} fill={'black'} />
        <MyLine
          prop="transform.rotation.z"
          messages={state.value}
          width={width}
          height={height}
        />
      </Layer>
    </Stage>
  )
}

export default {
  renderMirror: () => <GraphMirror width={300} height={300}/>,
  source: $our$,
}