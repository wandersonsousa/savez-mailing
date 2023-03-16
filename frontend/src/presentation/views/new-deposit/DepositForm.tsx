// ** React imports
import { Dispatch, SetStateAction, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import LoadingButton from '@mui/lab/LoadingButton'

// ** Form libs
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Validation Schemas
import validationSchema from 'src/form-validations/deposit-validation'
import { BrlToWaCredit } from '@/data/usecases/brl-to-wacredit-converter'
import { getPixPaymentData } from '@/services/deposit'
import { useUser } from '@/context/UserContext'
import { AccountModel } from '@/domain/models'

interface IDepositForm {
  transactionAmount: number
}
type PixData = {
  detail: string
  id: number | string
  qrCode: string
  qrCodeBase64: string
  status: string
  credits: number
}

function Form({
  user,
  setPixData
}: {
  user: AccountModel | null
  setPixData: Dispatch<SetStateAction<PixData | null>>
}) {
  const [loading, setLoading] = useState(false)

  // ** Form config
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IDepositForm>({
    defaultValues: {
      transactionAmount: 1
    },
    resolver: yupResolver(validationSchema)
  })
  const brlToWaCreditConverter = new BrlToWaCredit()

  const onSubmit: SubmitHandler<IDepositForm> = async data => {
    setLoading(true)

    if (user && user.email && user.name && user.uid) {
      const pixData = await getPixPaymentData(data.transactionAmount, user.email, user.name, user.uid)
      setPixData({
        ...pixData,
        credits: brlToWaCreditConverter.convert({ amount: data.transactionAmount }).creditBalance
      })
    } else {
      console.error('User not logged in')
    }

    setLoading(false)
  }
  const onReset: () => void = () => reset()

  return (
    <form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
      <Grid container spacing={7}>
        <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/*   <ImgStyled src={imgSrc} alt='Profile Pic' /> */}
            <Box>
              <Typography variant='h6' sx={{ marginTop: 1 }}>
                Preencha os dados abaixo para realizar o depósito
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name='transactionAmount'
            control={control}
            render={({ field, fieldState: { isTouched } }) => (
              <TextField
                fullWidth
                type='number'
                label='Valor do depósito R$'
                placeholder='Mínimo R$100'
                error={isTouched && !!errors.transactionAmount}
                helperText={isTouched && errors.transactionAmount?.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name='transactionAmount'
            control={control}
            render={({ field }) => (
              <Typography sx={{ textAlign: 'center' }}>
                Equivalente a {brlToWaCreditConverter.convert({ amount: field.value }).creditBalance} créditos para
                whatsapp
              </Typography>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <LoadingButton loading={loading} variant='contained' sx={{ marginRight: 3.5 }} type='submit'>
            Realizar depósito
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  )
}

function PixDisplay({ pixData }: { pixData: PixData }) {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleCopyPixToClipboard = () => {
    const qrCode = pixData.qrCode

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(qrCode)

    /* Alert the copied text */
    setOpen(true)
    setTimeout(() => {
      setOpen(false)
    }, 1500)
  }

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant='h6'>
        Escaneie ou copie o código pix para continuar seu pedido de {pixData.credits} créditos
      </Typography>
      <Box sx={{ m: 5, mb: 3 }}>
        <img src={`data:image/jpeg;base64, ${pixData.qrCodeBase64}`} width='300' height='300' alt='pix qrcode' />
      </Box>
      <Tooltip
        disableFocusListener
        disableHoverListener
        disableTouchListener
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        title='copiado para clipboard !'
      >
        <Button variant='outlined' onClick={handleCopyPixToClipboard}>
          copiar código
        </Button>
      </Tooltip>

      <Typography variant='subtitle2' sx={{ mt: 6 }}>
        Após o pagamento, aguarde a confirmação do seu pedido
      </Typography>
    </Box>
  )
}

const DepositForm = () => {
  const { user } = useUser()

  const [pixData, setPixData] = useState<PixData | null>(null)

  return (
    <CardContent>
      {!pixData && <Form user={user} setPixData={setPixData} />}
      {pixData && <PixDisplay pixData={pixData} />}
    </CardContent>
  )
}

export default DepositForm
