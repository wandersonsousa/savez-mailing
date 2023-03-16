import dayjs from 'dayjs'

export const getCurrentTimestamp = (): number => {
  return dayjs().unix()
}
export const timestampToBrazilianDate = (unixTimestamp: number | string): string => {
  const date = dayjs(Number(unixTimestamp) * 1000).format('DD/MM/YYYY HH:mm:ss')

  if (date === 'Invalid Date') return '...'

  return date
}
