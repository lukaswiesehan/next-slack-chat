export const sendMessage = async (channelId: string, message: string) => {
  const response = await fetch(`https://slack.com/api/chat.postMessage`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      channel: channelId,
      text: message
    })
  })
  const {ok, error} = await response.json()
  return {ok, error}
}
