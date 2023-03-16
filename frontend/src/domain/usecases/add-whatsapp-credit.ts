import { AccountModel } from '@/domain/models'

export interface AddWhatsappCreditToUser {
  add: (params: AddWhatsappCreditToUser.Params) => Promise<AddWhatsappCreditToUser.Model>
}

export namespace AddWhatsappCreditToUser {
  export type Params = {
    uid: string
    amount: number
  }

  export type Model = AccountModel
}
