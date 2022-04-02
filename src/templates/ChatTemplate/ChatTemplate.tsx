import React from 'react'
import BlockMessage from '../../organisms/BlockMessage'
import { TChatData } from '../../utils/@types/_TChat'

interface IProps {
  chatData: TChatData[]
}

const ChatTemplate = ({ chatData }: IProps) => {
  return (
    <div className="flex min-h-screen flex-col gap-2 bg-green-500 px-16 py-4">
      {chatData.map((chat, index) => {
        return (
          <BlockMessage key={index} messages={chat.message} side={chat.side} />
        )
      })}
    </div>
  )
}

export default ChatTemplate
