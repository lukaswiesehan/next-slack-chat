import useSWR from 'swr'
import {fetcher} from '@/utils/fetcher'

export const useUser = (userId: string) => {
  const {data, error, isLoading} = useSWR(`/api/chat/user?id=${userId}`, fetcher)

  return {
    user: data?.user,
    loading: isLoading,
    error
  }
}
