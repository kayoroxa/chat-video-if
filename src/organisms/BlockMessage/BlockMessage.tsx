import Message from '../../molecules/Message'

interface BlockMessageProps {
  messages: string | string[]
  side: 'left' | 'right'
}

export default function BlockMessage({ messages, side }: BlockMessageProps) {
  if (typeof messages === 'string') {
    return <Message text={messages} />
  }
  return (
    <div
      className={`flex  gap-2  p-3 ${
        side === 'right' && 'flex-row-reverse items-end'
      }`}
    >
      <img
        src="https://picsum.photos/200/300"
        alt="avatar"
        className={`h-28 w-28 self-end rounded-full border-2 border-white`}
      />
      <div
        className={`flex flex-col justify-center gap-2 ${
          side === 'right' && 'items-end'
        }`}
      >
        {messages.map((message, index) => (
          <Message
            key={index}
            text={message}
            isLast={index === messages.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
