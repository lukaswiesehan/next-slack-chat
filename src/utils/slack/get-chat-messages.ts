export const getChatMessages = async (channelId: string) => {
  const response = await fetch(`https://slack.com/api/conversations.history?channel=${channelId}`, {
    cache: 'no-store',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`
    }
  })
  const {messages, error} = await response.json()
  return {messages, error}
}
