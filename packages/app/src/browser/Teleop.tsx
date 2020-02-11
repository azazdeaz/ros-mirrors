import React, { Component, useRef, FC, useEffect, useContext, useCallback, useState } from 'react'
import { ParentSizeContext } from './ParentSize'
import { createTopic } from './ros'
import nipplejs, { JoystickManager } from 'nipplejs'

type Props = {
  topicName: string
}

const styleZone = {
  backgroundColor: 'rgba(33,33,33,0.3)',
  position: 'relative' as 'relative',
  fontWeight: 'bold' as 'bold',
}

type SensorMsgs_Twist = {
  linear: [number, number, number]
  angular: [number, number, number]
}

const stopProp = (e: React.MouseEvent) => {
  e.preventDefault()
  e.stopPropagation()
}

const cut = (value: number) => Math.max(-1, Math.min(1, value))

const Teleop: FC<Props> = ({ topicName }) => {
  const { width, height } = useContext(ParentSizeContext)
  const [xzTwist, setXZTwist] = useState([0, 0])
  const { current: topic } = useRef(createTopic('/cmd_vel'))

  useEffect(() => {
    const id = setInterval(() => {
      topic.publish(
        {
          linear: { x: xzTwist[0], y: 0, z: 0 },
          angular: { x: 0, y: 0, z: xzTwist[1] },
        },
        312,
      )
    })
    return () => clearInterval(id)
  }, [xzTwist])

  const ref = useCallback(node => {
    if (node) {
      const manager = nipplejs.create({
        color: 'blue',
        zone: node,
      })

      const update = (linearX: number, angularZ: number) => {
        setXZTwist([linearX, angularZ])
      }

      manager.on('move', (_, data) => {
        const radian = data.angle.radian
        const force = Math.min(1, data.force)
        const sideTeshold = Math.PI / 12
        let linear = 0
        let angular = 0

        // turn left
        if (radian < sideTeshold || radian > Math.PI * 2 - sideTeshold) {
          linear = 0
          angular = -force
        }
        // turn right
        else if (
          radian > Math.PI - sideTeshold &&
          radian < Math.PI + sideTeshold
        ) {
          linear = 0
          angular = force
        } else {
          const flip = radian > Math.PI
          linear = Math.sin(radian)
          angular = - Math.cos(radian)
          if (flip) {
            // linear *= -1
            // const buff = linear
            // linear = -angular
            // angular = -buff
          }
        }
        linear = cut(linear) * force
        angular = cut(angular) * force
        update(linear, angular)
      })

      manager.on('end', () => update(0, 0))
    }
  }, [])

  return (
    <div ref={ref} style={{ ...styleZone, width, height }}>
      <div>X {xzTwist[0]}</div>
      <div>Z {xzTwist[1]}</div>
    </div>
  )
}

export const create = (props: Props) => () => <Teleop {...props} />
