export interface TChatData {
  id: string
  side: 'left' | 'right'
  message: string | string[]
}

export interface TMessage {
  message: string | string[]
}
