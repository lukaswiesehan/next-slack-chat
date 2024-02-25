'use client'

import {useUsers} from '@/hooks/use-users'
import {Avatar} from './avatar'
import {CreateChatForm} from './create-chat-form'
import {Loader} from '../ui/loader'

export const IntroPage = () => {
  const {users, loading} = useUsers()

  if (loading)
    return (
      <div className="h-full flex flex-col justify-center items-center">
        <Loader />
      </div>
    )
  const online = users.filter(({presence}) => presence === 'active').length

  return (
    <div className="h-full p-8 flex flex-col justify-between">
      <div>
        <h2 className="text-black font-bold text-lg">Hello there! 👋</h2>
        {online < 1 ? (
          <p className="mt-4">None of our team members are currently online.</p>
        ) : (
          <>
            <p className="mt-4">Let&apos;s see how we can help you.</p>
            <p className="mt-4">
              <span className="font-bold text-black">{online}</span> of our team members {online === 1 ? 'is' : 'are'} currently online, so you should get
              a response within a few minutes.
            </p>
          </>
        )}
        <ul className="flex pl-2.5 mt-6 mb-8">
          {users.map((user) => (
            <li key={user.id} className="-ml-2.5">
              <Avatar user={user} />
            </li>
          ))}
        </ul>
      </div>
      {online > 0 && <CreateChatForm userId={users[0].id} />}
    </div>
  )
}
