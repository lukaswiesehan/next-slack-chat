import {slackConfig} from '../../../slack.config'
import {ChatMessages} from './chat-messages'
import {MessageForm} from './message-form'
import {User} from './user'

export const ChatPage = () => {
  const userId = slackConfig.users[0].id

  return (
    <div className="h-full">
      <div className="h-full flex flex-col">
        <div className="p-3 shadow-lg z-10 flex justify-between items-start">
          <User userId={userId} />
        </div>
        <div className="grow p-3 overflow-y-auto">
          <ChatMessages />
        </div>
        <div className="relative p-3 pt-1 z-10">
          <div className="absolute h-3 left-0 right-3 -top-3 bg-gradient-to-t from-white" />
          <MessageForm />
        </div>
      </div>
    </div>
  )
}
