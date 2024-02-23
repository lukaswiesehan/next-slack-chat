export const getDateString = (date: Date): string => {
  return `${date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()}`
}
