import {WebClient} from '@slack/web-api'
import {slackConfig} from '../../../../../slack.config'

export async function GET(request: Request) {
  try {
    const slack = new WebClient(process.env.SLACK_BOT_TOKEN)
    let users = []
    for (const user of slackConfig.users) {
      const userResponse = await slack.users.info({user: user.id})
      if (userResponse.error) throw userResponse.error
      const presenceResponse = await slack.users.getPresence({user: user.id})
      if (presenceResponse.error) throw presenceResponse.error
      users.push({
        id: user.id,
        presence: presenceResponse.presence,
        image: userResponse.user?.profile?.image_72,
        name: userResponse.user?.profile?.real_name,
        role: userResponse.user?.profile?.title,
        status: userResponse.user?.profile?.status_text
      })
    }
    return Response.json({users})
  } catch (error) {
    console.log(error)
    return Response.json({error}, {status: 500})
  }
}
