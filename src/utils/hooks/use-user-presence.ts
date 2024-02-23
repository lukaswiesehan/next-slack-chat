import useSWR from 'swr'
import {fetcher} from '../fetcher'

export const useUserPresence = (userId: string) => {
  const {data, error, isLoading} = useSWR(`/api/user-presence/${userId}`, fetcher)

  return {
    presence: data?.presence,
    loading: isLoading,
    error
  }
}
