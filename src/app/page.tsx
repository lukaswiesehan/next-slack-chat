import {ChatWidget} from '@/components/chat/chat-widget'
import {User} from '@/components/chat/user'
import {slackConfig} from '../../slack.config'

export default function Home() {
  return (
    <main className="flex min-h-screen h-auto justify-center gap-12 p-24">
      <ChatWidget />
      {/* <User userId={slackConfig.users[0].id} /> */}
    </main>
  )
}
