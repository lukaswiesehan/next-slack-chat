import {WebClient} from '@slack/web-api'

export async function GET(request: Request) {
  try {
    const {searchParams} = new URL(request.url)
    const id = searchParams.get('channel-id')
    if (!id) throw 'Please provide a user ID.'
    const slack = new WebClient(process.env.SLACK_BOT_TOKEN)
    const {messages, error} = await slack.conversations.history({channel: id})
    if (error) throw error
    return Response.json({
      messages: messages?.filter(({subtype}) => subtype !== 'channel_join').map(({bot_id, text}) => ({bot: bot_id !== undefined, text}))
    })
  } catch (error) {
    console.log(error)
    return Response.json({error}, {status: 500})
  }
}
