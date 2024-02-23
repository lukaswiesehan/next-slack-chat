import {sendMessage} from '@/utils/slack/send-message'

export async function POST(request: Request) {
  const {channelId, message} = await request.json()

  const {ok, error} = await sendMessage(channelId, message)
  if (error) return Response.json({error}, {status: 500})

  return Response.json({ok})
}
