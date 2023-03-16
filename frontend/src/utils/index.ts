import { UserStatus } from './constants'

export function formatPhoneNumber(phone: string | number): string {
  const cleaned = ('' + phone).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{2})(\d{9})$/)
  if (match) {
    return '(' + match[1] + ')' + match[2]
  }

  return String(phone)
}

export function formatUserStatusFromEnum(userStatus: UserStatus) {
  const status = {
    [UserStatus.ANALYSING]: 'Em análise',
    [UserStatus.APPROVED]: 'Aprovado',
    [UserStatus.REJECTED]: 'Acesso negado'
  }

  return status[userStatus]
}
