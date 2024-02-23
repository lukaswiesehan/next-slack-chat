import {createChannel} from '@/utils/slack/create-channel'
import {inviteUserToChannel} from '@/utils/slack/invite-user-to-channel'

export async function POST(request: Request) {
  const {channelName, userId} = await request.json()

  const channelResponse = await createChannel(channelName)
  if (channelResponse.error) return Response.json({error: channelResponse.error}, {status: 500})

  const inviteResponse = await inviteUserToChannel(channelResponse.channel.id, userId)
  if (inviteResponse.error) return Response.json({error: inviteResponse.error}, {status: 500})

  return Response.json({channel: channelResponse.channel})
}
