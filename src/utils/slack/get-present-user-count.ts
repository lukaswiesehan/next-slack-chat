export const getPresentUserCount = async (userIds: string[]) => {
  try {
    let count = 0
    for (const userId of userIds) {
      const response = await fetch(`https://slack.com/api/users.getPresence?user=${userId}`, {
        cache: 'no-store',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`
        }
      })
      const {presence, error} = await response.json()
      if (error) throw error
      if (presence === 'active') count++
    }
    return {count}
  } catch (error) {
    return {error}
  }
}
