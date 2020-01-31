import { useEffect, useState } from 'react'

export const useTopic = (topicName: string) => {
  const [messages, setMessages] = useState<any>()
  useEffect(() => {
    const ws = new WebSocket(`ws://${location.hostname}:${location.port}`)
    const requestID = Math.random().toString()

    ws.onmessage = event => {
      try {
        const message = JSON.parse(event.data)
        if (message.replyID === requestID) {
          setMessages(
            message.messages
              .map((msg: any) => ({
                time: msg.timestamp.sec + msg.timestamp.nsec / 10 ** 8,
                transform: msg.message.transforms[0].transform,
              }))
              .sort((a: any, b: any) => a.time - b.time)
          )
          close()
        }
      } catch (error) {
        console.error(error)
      }
    }

    const close = () => ws.close()

    ws.onopen = () => ws.send(
      JSON.stringify({ address: 'ros-bag', topic: topicName, requestID }),
    )

    return close
  }, [])

  return messages
}
