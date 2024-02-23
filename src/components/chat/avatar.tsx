import {getUser} from '@/utils/slack/get-user'
import Image from 'next/image'
import {FC} from 'react'
import {PresenceIndicator} from './presence-indicator'

export const Avatar: FC<{userId: string}> = async ({userId}) => {
  const {profile} = await getUser(userId)

  return (
    <div className="relative h-9 w-9 rounded-full p-[3px] bg-white">
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <Image src={profile.image_72} alt={profile.real_name} fill className="object-cover object-center" />
      </div>
      <PresenceIndicator userId={userId} />
    </div>
  )
}
