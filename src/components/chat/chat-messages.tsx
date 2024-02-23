'use client'

import {cn} from '@/utils/cn'
import {useChatMessages} from '@/utils/hooks/use-chat-messages'

export const ChatMessages = () => {
  const channelId = typeof window == 'undefined' ? undefined : localStorage['chat-id']
  const {messages, loading, error} = useChatMessages(channelId)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading chat.</div>

  return (
    <ul className="flex flex-col-reverse gap-4 text-sm w-64">
      {messages.map(({bot, text}: any, index: number) => (
        <li key={index} className={cn('block bg-slate-200 max-w-52 py-1 px-2 rounded-lg', bot ? 'ml-auto rounded-br-none' : 'mr-auto rounded-bl-none')}>
          {text}
        </li>
      ))}
    </ul>
  )
}
