import {getChatMessages} from '@/utils/slack/get-chat-messages'

export async function GET(request: Request, {params}: {params: {channelId: string}}) {
  const {messages, error} = await getChatMessages(params.channelId)
  if (error) return Response.json({error}, {status: 500})
  return Response.json({
    messages: messages
      .filter((message: any) => message?.subtype !== 'channel_join')
      .map((message: any) => ({bot: message?.bot_id ? true : false, text: message.text}))
  })
}
