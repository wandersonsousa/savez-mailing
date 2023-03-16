import { AccountModel } from '@/domain/models'
import { getCurrentTimestamp } from '@/helpers/time'
import { UserStatus } from '@/utils/constants'

import { randEmail, randFullName, randImg, randPhoneNumber, randUuid } from '@ngneat/falso'

export const mockAccountModel = (): AccountModel => {
  const timestamp = getCurrentTimestamp()

  return {
    uid: randUuid(),
    name: randFullName(),
    status: UserStatus.ANALYSING,
    photoUrl: randImg(),
    email: randEmail(),
    whatsapp_phone: randPhoneNumber(),
    createdAt: timestamp, // Should be unix seconds timestamp
    updatedAt: timestamp, // Should be unix seconds timestamp
    lastLoginAt: timestamp // Should be unix seconds timestamp
  }
}
