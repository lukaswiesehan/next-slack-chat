import {ChatWindow} from './chat-window'

export const ChatWidget = () => {
  return (
    <div className="fixed bottom-0 right-0 flex flex-col items-end">
      <ChatWindow />
    </div>
  )
}
