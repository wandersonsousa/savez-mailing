import * as yup from 'yup'
import { pt } from 'yup-locale-pt'

yup.setLocale(pt)

export default yup
  .object({
    transactionAmount: yup.number().min(1, 'Valor precisa ser maior que R$100').required('Digite o valor da transação')
  })
  .required()
