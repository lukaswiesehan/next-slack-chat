import useSWR from 'swr'
import {fetcher} from '../fetcher'

export const useChatMessages = (channelId: string) => {
  const {data, error, isLoading} = useSWR(`/api/chat-messages/${channelId}`, fetcher)

  return {
    messages: data?.messages,
    loading: isLoading,
    error
  }
}
