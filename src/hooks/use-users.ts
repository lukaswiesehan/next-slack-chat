import useSWR from 'swr'
import {fetcher} from '@/utils/fetcher'

export const useUsers = () => {
  const {data, error, isLoading} = useSWR(`/api/chat/users`, fetcher)

  return {
    users: data?.users as User[],
    loading: isLoading,
    error
  }
}
