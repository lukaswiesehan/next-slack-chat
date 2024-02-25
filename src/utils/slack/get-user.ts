import {WebClient} from '@slack/web-api'

export const getUser = async (userId: string) => {
  const slack = new WebClient(process.env.SLACK_BOT_TOKEN)
  const {user, error} = await slack.users.info({user: userId})
  // const response = await fetch(`https://slack.com/api/users.profile.get?user=${userId}`, {
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`
  //   }
  // })
  // const {profile, error} = await response.json()
  return {profile: user?.profile, error}
}
