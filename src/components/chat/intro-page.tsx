import {Avatar} from './avatar'
import {slackConfig} from '../../../slack.config'
import {CreateChatForm} from './create-chat-form'

const userId = slackConfig.users[0].id

export const IntroPage = () => {
  return (
    <div className="grow p-8 flex flex-col justify-between">
      <div>
        <h2 className="text-black font-bold text-lg">Hello there! 👋</h2>
        <p className="mt-4">
          Let&apos;s see how we can help you.
          <br />
          Please tell us your name and start a chat!
        </p>
        <p className="mt-4">If one of our team members is online, you should get a response in a few minutes.</p>
        <ul className="flex pl-2.5 mt-5 mb-8">
          {slackConfig.users.map(({id}) => (
            <li key={id} className="-ml-2.5">
              <Avatar userId={id} />
            </li>
          ))}
        </ul>
      </div>
      <CreateChatForm userId={userId} />
    </div>
  )
}
