import {fetcher} from '@/utils/fetcher'
import useSWR from 'swr'

export const useMessages = (channelId: string) => {
  const {data, error, isLoading} = useSWR(`/api/chat/messages?channel-id=${channelId}`, fetcher)

  return {
    messages: data?.messages,
    loading: isLoading,
    error
  }
}
