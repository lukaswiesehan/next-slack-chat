'use client'

import {cn} from '@/utils/cn'
import {useUserPresence} from '@/utils/hooks/use-user-presence'
import {FC} from 'react'

export const PresenceIndicator: FC<{userId: string}> = ({userId}) => {
  const {presence} = useUserPresence(userId)

  return <div className={cn('absolute inset-0 rounded-full border-2', presence === 'active' ? 'border-emerald-500' : 'border-slate-400')} />
}
