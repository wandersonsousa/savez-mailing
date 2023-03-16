import { AddWhatsappCreditToUser } from '@/domain/usecases'
import { get, update } from '../protocols/firebase'

export class FirebaseAddWaCredit implements AddWhatsappCreditToUser {
  async add(params: AddWhatsappCreditToUser.Params): Promise<AddWhatsappCreditToUser.Model> {
    const profile = await get('profiles', params.uid)
    const newCreditBalance = profile.credit_balance.whatsapp + params.amount
    await update('profiles', params.uid, {
      credit_balance: {
        whatsapp: newCreditBalance
      }
    })
    const updatedProfile = await get('profiles', params.uid)

    return updatedProfile
  }
}

export namespace FirebaseAddWaCreditModels {
  export type Model = AddWhatsappCreditToUser.Model
}
