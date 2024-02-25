import {WebClient} from '@slack/web-api'

export async function GET(request: Request) {
  try {
    const {searchParams} = new URL(request.url)
    const id = searchParams.get('id')
    if (!id) throw 'Please provide a user ID.'

    const slack = new WebClient(process.env.SLACK_BOT_TOKEN)

    const userResponse = await slack.users.info({user: id})
    if (userResponse.error) throw userResponse.error

    const presenceResponse = await slack.users.getPresence({user: id})
    if (presenceResponse.error) throw presenceResponse.error

    return Response.json({
      user: {
        id: userResponse.user?.id,
        presence: presenceResponse.presence,
        image: userResponse.user?.profile?.image_72,
        name: userResponse.user?.profile?.real_name,
        role: userResponse.user?.profile?.title,
        status: userResponse.user?.profile?.status_text
      }
    })
  } catch (error) {
    console.log(error)
    return Response.json({error}, {status: 500})
  }
}
