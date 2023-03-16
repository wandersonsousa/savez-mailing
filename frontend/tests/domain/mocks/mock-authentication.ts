import { Authentication } from '@/domain/usecases'
import { mockAccountModel } from 'tests/domain/mocks'

import { randEmail, randPassword } from '@ngneat/falso'

export const mockAuthenticationParams = (): Authentication.Params => ({
  email: randEmail(),
  password: randPassword()
})

export const mockAuthenticationModel = (): Authentication.Model => mockAccountModel()

export class AuthenticationSpy implements Authentication {
  account = mockAuthenticationModel()
  params: Authentication.Params
  callsCount = 0

  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    this.params = params
    this.callsCount++

    return this.account
  }
}
