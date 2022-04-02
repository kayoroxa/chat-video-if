import { useEffect, useState } from 'react'
import ChatTemplate from '../templates/ChatTemplate'
import { TChatData } from '../utils/@types/_TChat'

export default function Chat() {
  const [indexMessage, setIndexMessage] = useState(1)

  //on key press
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key == 'Enter') {
        //send message
        setIndexMessage((prev) => prev + 1)
      }
    })
  }, [])

  const chat: TChatData[] = [
    { id: 'caio', message: ['Hello'], side: 'left' },
    {
      id: 'asd',
      message: ['asdasdasd', 'aasdasdola', 'hello man'],
      side: 'right',
    },
    { id: 'caio', message: ['Hello', 'ola'], side: 'left' },
  ]

  return <ChatTemplate chatData={sliceChat(indexMessage, chat)} />
}

function sliceChat(lastIndex: number, chat: TChatData[]) {
  let myIndex = 0
  const newChatSpitted: TChatData[] = []
  chat.forEach((messageData, index: number) => {
    if (myIndex >= lastIndex) return

    if (myIndex + messageData.message.length <= lastIndex) {
      myIndex += messageData.message.length
      newChatSpitted.push(messageData)
    } else {
      newChatSpitted.push({
        ...messageData,
        message: messageData.message.slice(0, lastIndex - myIndex),
      })
      myIndex += lastIndex - myIndex
    }
  })
  console.log({ newChatSpitted })
  return newChatSpitted
}
