import React, { Component, useRef, FC, useEffect, useContext } from 'react'
import { useTopic } from './useTopic'
import color from 'color'
import { ParentSizeContext } from './ParentSize'
import { createTopicObservable } from './ros'

type Props = {
  topicName: string
}

type SensorMsgs_Image = {
  data: Uint8Array
  width: number
  height: number
}


export function rgb2rgba(
  rgb: Uint8Array,
  width: number,
  height: number,
  output: Uint8ClampedArray,
) {
  let inIdx = 0
  let outIdx = 0

  for (let i = 0; i < width * height; i++) {
    const r = rgb[inIdx++]
    const g = rgb[inIdx++]
    const b = rgb[inIdx++]
    output[outIdx++] = r
    output[outIdx++] = g
    output[outIdx++] = b
    output[outIdx++] = 255
  }

  return output
}

const isSensorMsgs_Image = (msg: any): msg is SensorMsgs_Image => {
  return (
    typeof msg === 'object' &&
    msg.data instanceof Uint8Array &&
    typeof msg.width === 'number' &&
    typeof msg.height === 'number'
  )
}

const Camera: FC<Props> = ({ topicName }) => {
  const { width, height } = useContext(ParentSizeContext)
  const canvas = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    createTopicObservable(topicName).subscribe(message => {
      if (!canvas.current || !isSensorMsgs_Image(message)) {
        return
      }
      const ctx = canvas.current.getContext('2d')!
      const imageData = new ImageData(message.width, message.height)
      rgb2rgba(message.data, message.width, message.height, imageData.data)
      ctx.putImageData(imageData, 0, 0)
    })
  }, [])
  return <canvas ref={canvas} width={width} height={height} />
}

export const create = (props: Props) => () => <Camera {...props} />
