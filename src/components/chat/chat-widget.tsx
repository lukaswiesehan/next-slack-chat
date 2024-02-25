'use client'

import {useState} from 'react'
import {ChatWindow} from './chat-window'
import {CloseIcon} from '../icons/close'
import {ChatIcon} from '../icons/chat'

export const ChatWidget = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="fixed bottom-0 right-0 flex flex-col items-end">
      {open && <ChatWindow />}
      <div className="p-3 pt-0">
        <button
          onClick={() => setOpen((open) => !open)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-500 border-indigo-300 shadow-lg flex items-center justify-center"
        >
          {open ? <CloseIcon className="h-8" /> : <ChatIcon className="h-8" />}
        </button>
      </div>
    </div>
  )
}
