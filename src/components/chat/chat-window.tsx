'use client'

import {Dispatch, SetStateAction, createContext, useContext, useEffect, useState} from 'react'
import {ChatPage} from './chat-page'
import {IntroPage} from './intro-page'

//@ts-ignore
const ChatContext = createContext<{chatId: string; setChatId: Dispatch<SetStateAction<string>>}>(null)
export const useChatId = () => useContext(ChatContext)

export const ChatWindow = () => {
  const [chatId, setChatId] = useState<string>('')

  useEffect(() => {
    const checkId = () => {
      const chatId = localStorage.getItem('chat-id')
      console.log(chatId)
      if (chatId) setChatId(chatId)
    }
    window.addEventListener('storage', checkId)
    checkId()
    return window.removeEventListener('storage', checkId)
  }, [])

  return (
    <div className="h-screen max-h-[40rem] w-screen max-w-96 p-4 text-slate-500 text-sm">
      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-white/25 to-white/20 border border-white/10 p-1">
        <ChatContext.Provider value={{chatId, setChatId}}>
          <div className="w-full h-full shadow rounded-[1.25rem] overflow-hidden bg-white">
            {chatId ? <ChatPage key="chat-page" /> : <IntroPage key="intro-page" />}
          </div>
        </ChatContext.Provider>
      </div>
    </div>
  )
}
