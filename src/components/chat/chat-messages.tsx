'use client'

import {cn} from '@/utils/cn'
import {useChatId} from '@/hooks/use-chat-id'
import {useMessages} from '@/hooks/use-messages'

export const ChatMessages = () => {
  const {chatId} = useChatId()
  const {messages, loading, error} = useMessages(chatId)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading chat.</div>

  return (
    <ul className="h-full overflow-y-auto flex flex-col-reverse gap-4 text-sm w-full">
      {messages.map(({bot, text}: any, index: number) => (
        <li
          key={index}
          className={cn(
            'block max-w-64 py-1 px-2 rounded-lg',
            bot ? 'ml-auto rounded-br-none bg-indigo-500 text-white' : 'mr-auto rounded-bl-none bg-slate-200'
          )}
        >
          {text}
        </li>
      ))}
    </ul>
  )
}
