export const createChannel = async (channelName: string) => {
  const response = await fetch(`https://slack.com/api/conversations.create`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: channelName,
      is_private: true
    })
  })
  const {channel, error} = await response.json()
  return {channel, error}
}
