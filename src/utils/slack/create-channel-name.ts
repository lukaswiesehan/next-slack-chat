import {getDateString} from '../get-date-string'

export const createChannelName = (userName: string) => {
  return `${getDateString(new Date())}-${userName.replace(' ', '-').toLowerCase()}`
}
