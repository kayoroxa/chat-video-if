import React from 'react'

interface IProps {
  text: string
  isLast?: boolean
}
const Message = ({ text, isLast }: IProps) => {
  return (
    <div className="w-fit rounded-2xl bg-white px-4 py-2 text-3xl font-semibold text-gray-700">
      {text}
    </div>
  )
}

export default Message
