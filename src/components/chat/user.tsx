'use client'

import {Avatar} from './avatar'
import {useUser} from '@/hooks/use-user'

export const User = ({userId}: {userId: string}) => {
  const {user, loading} = useUser(userId)

  return (
    <div className="flex gap-2 items-center">
      <Avatar loading={loading} user={user} />
      {loading ? (
        <div>
          <div className="h-3 w-24 bg-slate-200 rounded animate-pulse" />
          <div className="h-3 mt-1 w-28 bg-slate-200 rounded animate-pulse" />
        </div>
      ) : (
        <div>
          <div className="text-sm font-semibold text-black leading-none">{user.name}</div>
          <div className="text-xs text-slate-500 leading-none mt-1">{user.role}</div>
        </div>
      )}
    </div>
  )
}
