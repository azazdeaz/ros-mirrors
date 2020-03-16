import React, { Component, useRef, FC, useEffect, useContext } from 'react'
import { useTopic } from './useTopic'
import color from 'color'
import { ParentSizeContext } from './ParentSize'

import _web from '../nodejs/servers/image/stubs/rostopic.image_grpc_web_pb'
const { ImageTopicClient } = _web
import _types from '../nodejs/servers/image/stubs/rostopic.image_pb'
const { Image, Empty } = _types
var client = new ImageTopicClient(
    'http://' + window.location.hostname + ':8080',
    null,
    null,
  )
  // @ts-ignore
;(window.__GRPCWEB_DEVTOOLS__ || (() => {}))([client])

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
let __r = 0
const Camera: FC<Props> = ({ topicName }) => {
  const { width, height } = useContext(ParentSizeContext)
  const canvas = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    client.subscribe(new Empty()).on('data', (message => {
      if (!canvas.current) {
        return
      }
      if (++__r % 1 === 0) {
        console.time('render pb')
        const ctx = canvas.current.getContext('2d')!
        const imageData = new ImageData(message.getWidth(), message.getHeight())
        rgb2rgba(message.getData() as Uint8Array, message.getWidth(), message.getHeight(), imageData.data)
        ctx.putImageData(imageData, 0, 0)
        console.timeEnd('render pb')
      }
    }))

  }, [])
  return <canvas ref={canvas} width={width} height={height} />
}

export const create = (props: Props) => () => <Camera {...props} />
