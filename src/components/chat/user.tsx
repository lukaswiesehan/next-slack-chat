import {getUser} from '@/utils/slack/get-user'
import {Avatar} from './avatar'

export const User = async ({userId}: {userId: string}) => {
  const {profile} = await getUser(userId)

  return (
    <div>
      <div className="flex gap-2 items-center">
        <Avatar userId={userId} />
        <div>
          <div className="text-sm font-semibold text-black leading-none">{profile.real_name}</div>
          <div className="text-xs text-slate-500 leading-none mt-1">{profile.title}</div>
        </div>
      </div>
    </div>
  )
}
