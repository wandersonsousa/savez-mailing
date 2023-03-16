import { MoneyToCreditConverter } from '@/domain/usecases'

export class BrlToWaCredit implements MoneyToCreditConverter {
  convert(params: MoneyToCreditConverter.Params): MoneyToCreditConverter.Model {
    const brlAmount = params.amount
    const waCreditAmount = brlAmount / 0.07
    const waCreditBalance = Math.round(waCreditAmount)

    return {
      creditBalance: waCreditBalance
    }
  }
}

export namespace BrlToWaCredit {
  export type Model = MoneyToCreditConverter.Model
}
