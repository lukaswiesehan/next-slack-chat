export const getUser = async (userId: string) => {
  const response = await fetch(`https://slack.com/api/users.profile.get?user=${userId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`
    }
  })
  const {profile, error} = await response.json()
  return {profile, error}
}
