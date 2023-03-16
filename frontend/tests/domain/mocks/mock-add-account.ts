import { AddAccount } from '@/domain/usecases'
import { mockAccountModel } from 'tests/domain/mocks'

import { randEmail, randFullName, randPassword, randPhoneNumber } from '@ngneat/falso'

export const mockAddAccountParams = (): AddAccount.Params => {
  const password = randPassword()

  return {
    name: randFullName(),
    email: randEmail(),
    password,
    whatsapp_phone: randPhoneNumber()
  }
}

export const mockAddAccountModel = (): AddAccount.Model => mockAccountModel()

export class AddAccountSpy implements AddAccount {
  account = mockAddAccountModel()
  params: AddAccount.Params
  callsCount = 0

  async add(params: AddAccount.Params): Promise<AddAccount.Model> {
    this.params = params
    this.callsCount++

    return this.account
  }
}
