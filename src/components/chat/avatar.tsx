'use client'

import Image from 'next/image'
import {FC} from 'react'
import {cn} from '@/utils/cn'

export const Avatar: FC<{loading?: boolean; user: User}> = ({loading = false, user}) => {
  if (loading) return <div className="w-9 h-9 rounded-full bg-slate-200 animate-pulse" />
  return (
    <div className={cn('relative h-9 w-9 rounded-full p-px bg-white border-2', user.presence === 'active' ? 'border-emerald-500' : 'border-slate-400')}>
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <Image src={user.image} alt={user.name} fill className="object-cover object-center" />
      </div>
    </div>
  )
}
