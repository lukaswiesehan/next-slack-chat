export const getUserPresence = async (userId: string) => {
  const response = await fetch(`https://slack.com/api/users.getPresence?user=${userId}`, {
    cache: 'no-store',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`
    }
  })
  const {presence, error} = await response.json()
  return {presence, error}
}
