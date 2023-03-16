import { UserStatus } from '@/utils/constants'

export type AccountModel = {
  uid: string
  status: UserStatus
  photoUrl: string
  name: string
  email: string
  whatsapp_phone: string
  createdAt: number // Should be unix seconds timestamp
  updatedAt: number // Should be unix seconds timestamp
  lastLoginAt: number // Should be unix seconds timestamp
  credit_balance: {
    whatsapp: number
  }
}
