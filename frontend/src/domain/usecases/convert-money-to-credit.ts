export interface MoneyToCreditConverter {
  convert: (params: MoneyToCreditConverter.Params) => MoneyToCreditConverter.Model
}

export namespace MoneyToCreditConverter {
  export type Params = {
    amount: number
  }

  export type Model = {
    creditBalance: number
  }
}
