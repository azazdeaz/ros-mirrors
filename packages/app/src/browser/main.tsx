// @ts-ignore
import React from 'react'
import ReactDOM from 'react-dom'
import { Comp } from './testcomp'
import { create as createGraphMirror } from './GraphMirror'
import { MirrorRoom, addMirror } from './MirrorRoom'
import ROS from 'roslib'

// import('./GraphMirror').then(({ create }) =>
//   addMirror({
//     renderContent: create({
//       values: ['transform.translation.x', 'transform.rotation.z'],
//     }),
//     x: 0,
//     y: 0,
//     width: 300,
//     height: 300,
//   }),
// )

import('./Camera').then(({ create }) =>
  addMirror({
    renderContent: create({
      topicName: '/camera/rgb/image_raw',
    }),
    x: 0,
    y: 300,
    width: 640,
    height: 480,
  }),
)

import('./Teleop').then(({ create }) =>
  addMirror({
    renderContent: create({
      topicName: '/camera/rgb/image_raw',
    }),
    x: 300,
    y: 0,
    width: 200,
    height: 200,
  }),
)

console.log({ ROS })
// @ts-ignore
window['ROS'] = ROS

// @ts-ignore
const elRoot = document.querySelector('#react-root')

const App = () => (
  <div>
    ccccc
    <Comp />
    <MirrorRoom />
  </div>
)

ReactDOM.render(App(), elRoot)

import('./test2').then(({ test }) => {
  test()

  console.log('test111!231')
  test()
})
