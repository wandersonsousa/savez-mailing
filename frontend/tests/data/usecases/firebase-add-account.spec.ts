import { FirebaseAddAccount } from '@/data/usecases'
import { mockAddAccountParams } from 'tests/domain/mocks'

import { UserStatus } from '@/utils/constants'

describe('FirebaseAddAccount', () => {
  test('Should return an AddAccount.Model if HttpClient returns 200', async () => {
    const params = mockAddAccountParams()
    const firebaseAddAccount = new FirebaseAddAccount()

    const account = await firebaseAddAccount.add(params)

    expect(account).toMatchObject({
      name: params.name,
      status: UserStatus.ANALYSING,
      email: params.email,
      whatsapp_phone: params.whatsapp_phone
    })
  })
})
