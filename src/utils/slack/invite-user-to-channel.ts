export const inviteUserToChannel = async (channelId: string, userId: string) => {
  const response = await fetch(`https://slack.com/api/conversations.invite`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      channel: channelId,
      users: userId
    })
  })
  const {ok, error} = await response.json()
  return {ok, error}
}
