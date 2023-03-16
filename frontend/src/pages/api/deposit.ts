import mercadopago from 'mercadopago'

async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    // Process a POST request

    mercadopago.configurations.setAccessToken(process.env.MERCADO_PAGO_TOKEN || '')
    const { transaction_amount, email, name, uid } = req.body

    if (!transaction_amount || !email || !name) {
      return res.status(400).json({ done: false, error: 'Missing required fields' })
    }

    const first_name = name.split(' ')[0]
    const last_name = name.split(' ')[1]

    const payment_data = {
      transaction_amount,
      description: 'ListaIg - Deposito',
      payment_method_id: 'pix',
      payer: {
        email,
        first_name,
        last_name
      },
      metadata: {
        user_uid: uid
      },
      installments: 1
    }

    const payment_request = await mercadopago.payment.create(payment_data)

    return res.status(200).json({
      done: true,
      data: {
        id: payment_request.response.id,
        status: payment_request.response.status,
        detail: payment_request.response.status_detail,
        qrCode: payment_request.response.point_of_interaction.transaction_data.qr_code,
        qrCodeBase64: payment_request.response.point_of_interaction.transaction_data.qr_code_base64
      }
    })
  }

  res.status(501).json({ done: false, error: 'Invalid method' })
}

export default handler
