import {slackConfig} from '../../../slack.config'
import {ChatMessages} from './chat-messages'
import {MessageForm} from './message-form'
import {User} from './user'
import {motion} from 'framer-motion'

export const ChatPage = () => {
  const userId = slackConfig.users[0].id
  return (
    <motion.div initial={{x: '100%'}} animate={{x: 0}} exit={{x: '100%'}} className="h-full">
      <div className="h-full flex flex-col">
        <div className="p-3 shadow-lg">
          <User userId={userId} />
        </div>
        <div className="grow p-3">
          <ChatMessages />
        </div>
        <div className="p-3">
          <MessageForm />
        </div>
      </div>
    </motion.div>
  )
}
