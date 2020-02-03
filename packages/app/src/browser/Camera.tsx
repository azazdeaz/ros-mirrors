import React, { Component, useRef, FC, useEffect, useContext } from 'react'
import { useTopic } from './useTopic'
import color from 'color'
import { ParentSizeContext } from './ParentSize'
import { createTopicObservable } from './ros'

type Props = {
  topicName: string
}

type SensorMsgs_Image = {
  data: string
  width: number
  height: number
}

const isSensorMsgs_Image = (msg: any): msg is SensorMsgs_Image => {
  return (
    typeof msg === 'object' &&
    typeof msg.data === 'string' &&
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
      const te = new TextEncoder()
      const encoded = te.encode(message.data)
      const imageData = new ImageData(
        new Uint8ClampedArray(encoded.buffer),
        message.width,
        message.height,
      )
      ctx.putImageData(imageData, 0,0)
    })
  }, [])
  return <canvas ref={canvas} width={width} height={height} />
}

export const create = (props: Props) => () => <Camera {...props} />
