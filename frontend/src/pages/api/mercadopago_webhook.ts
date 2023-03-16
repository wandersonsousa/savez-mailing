// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mercadopago from 'mercadopago'
import { add, get, getBy, save, update } from '@/pages/api/helpers/firebase'
import { BrlToWaCredit } from '@/data/usecases/brl-to-wacredit-converter'

export default async function handler(req: any, res: any) {
  mercadopago.configurations.setAccessToken(process.env.MERCADO_PAGO_TOKEN || '')
  const { type, action, data } = req.body

  if (type === 'payment') {
    if (action === 'payment.created') {
      await handlePaymentCreated(data)
    }
    if (action === 'payment.updated') {
      await handlePaymentUpdated(data)
    }
  }

  res.status(200).json({ done: true })
}

async function handlePaymentUpdated(data: any) {
  const handlePaymentApproved = async (payment: any) => {
    const { metadata, transaction_amount } = payment
    const brlToWaCredit = new BrlToWaCredit()

    const { user_uid } = metadata
    const profile = await get('profiles', user_uid)

    // ** Update profile credit balance
    const transactionAmountInCredits = brlToWaCredit.convert({
      amount: transaction_amount
    }).creditBalance
    const newCreditBalance = profile.credit_balance.whatsapp + transactionAmountInCredits
    await update('profiles', user_uid, {
      credit_balance: {
        whatsapp: newCreditBalance
      }
    })
    const extract = await getBy('extracts', 'payment_id', payment.id)

    await update('extracts', extract.id, {
      user_uid: payment.metadata.user_uid,
      amount: payment.transaction_amount,
      type: 'deposit',
      createdAt: payment.date_created,
      payment_id: payment.id,
      status: payment.status,
      profile: {
        name: profile.name,
        email: profile.email,
        whatsapp_phone: profile.whatsapp_phone,
        photoUrl: profile.photoUrl
      }
    })
  }

  const payment = await mercadopago.payment.get(data.id)
  if (payment.status === 200) {
    if (payment.response.status === 'approved') {
      await handlePaymentApproved(payment.response)
    }
  }
}

async function handlePaymentCreated(data: any) {
  mercadopago.configurations.setAccessToken(process.env.MERCADO_PAGO_TOKEN || '')
  const payment = await mercadopago.payment.get(data.id)

  const { metadata } = payment.response

  const { user_uid } = metadata
  const profile = await get('profiles', user_uid)

  if (payment.status === 200) {
    await save(payment.response.metadata.user_uid, 'payments', payment)
    await add('extracts', {
      user_uid: payment.response.metadata.user_uid,
      amount: payment.response.transaction_amount,
      type: 'deposit',
      createdAt: payment.response.date_created,
      payment_id: payment.response.id,
      status: payment.response.status,
      profile: {
        name: profile.name,
        email: profile.email,
        whatsapp_phone: profile.whatsapp_phone,
        photoUrl: profile.photoUrl
      }
    })
  }
}

/*
payment created
{
  "action": "payment.created",
  "api_version": "v1",
  "data": {
    "id": "23332863410"
  },
  "date_created": "2022-06-20T18:00:01Z",
  "id": 101979266029,
  "live_mode": true,
  "type": "payment",
  "user_id": "549527270"
}

payment updated
{
  "action": "payment.updated",
  "api_version": "v1",
  "data": {
    "id": "23332863410"
  },
  "date_created": "2022-06-20T18:00:01Z",
  "id": 101979273291,
  "live_mode": true,
  "type": "payment",
  "user_id": "549527270"
}

*/
