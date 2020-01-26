import React, { Component } from 'react'
import rk from 'react-konva'
import Konva from 'konva'
const { Stage, Layer, Rect, Text } = rk

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

export const Chart = ({ width, height }: Props) => (
  <Stage width={width} height={height}>
    <Layer>
      <Text text="Try click on rect, please!" />
      <ColoredRect />
    </Layer>
  </Stage>
)
