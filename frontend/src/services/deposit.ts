import axios from 'axios'

export async function getPixPaymentData(transaction_amount: number, email: string, name: string, uid: string) {
  const pixPaymentDataResponse = await axios.post('/api/deposit', {
    transaction_amount,
    email,
    name,
    uid
  })

  const { data } = pixPaymentDataResponse.data

  return data
}
