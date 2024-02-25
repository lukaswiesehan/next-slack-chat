'use client'

import {cn} from '@/utils/cn'
import {useChatId} from '@/hooks/use-chat-id'
import {useMessages} from '@/hooks/use-messages'
import {useEffect, useRef} from 'react'

export const ChatMessages = () => {
  const {chatId} = useChatId()
  const {messages, loading, error} = useMessages(chatId)
  const ref = useRef<HTMLUListElement>(null)

  useEffect(() => {
    ref.current?.scrollTo({top: ref.current.scrollHeight})
  }, [messages])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading chat.</div>

  return (
    <ul className="flex flex-col-reverse gap-2 text-sm w-full" ref={ref}>
      {messages.map(({bot, text}: any, index: number) => (
        <li
          key={index}
          className={cn(
            'block max-w-64 py-1.5 px-2.5 rounded-xl leading-snug',
            bot ? 'ml-auto rounded-br-none bg-indigo-500 text-white' : 'mr-auto rounded-bl-none bg-slate-200'
          )}
        >
          {text}
        </li>
      ))}
    </ul>
  )
}
