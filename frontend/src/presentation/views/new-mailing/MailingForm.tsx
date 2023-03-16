// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

// ** Form Options
import { GENDER_OPTIONS, BRAZILIAN_MONTHS_OPTIONS } from 'src/utils/constants'

// ** Form libs
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Validation Schemas
import validationSchema from 'src/form-validations/new-mailing-validation'

// ** Types
import { IMailingFormFields } from 'src/presentation/types/mailing-form'

// ** helpers
import { generateRadioOptions } from './helpers'
import Occupation from './fields/Occupation'
import Income from './fields/Income'
import States from './fields/States'
import { formDataToGetCountPayload } from 'src/helpers/prospec'
import Cities from './fields/Cities'

const MailingForm = ({ handleNext }: { handleNext: (dataForNextStep: any) => void }) => {
  // ** State
  const [openAlert, setOpenAlert] = useState<boolean>(false)
  const [text, setText] = useState('Não foram encontrados leads para a busca')

  // ** Form config
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IMailingFormFields>({
    defaultValues: {
      prospect_name: '',
      cities: [],
      gender: 'F',
      minimum_age: '0',
      maximum_age: '0',
      minimum_income: '0',
      maximum_income: '0',
      by_birth_month: null,
      occupations: []
    },
    resolver: yupResolver(validationSchema)
  })

  const onSubmit: SubmitHandler<IMailingFormFields> = async data => {
    try {
      const payload = formDataToGetCountPayload(data)
      const resp = await fetch('https://api.datastone.com.br/v1/persons/prospect/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${process.env.NEXT_PUBLIC_DATASTONE_KEY}`
        },
        body: JSON.stringify(payload)
      })
      if (resp.status === 200) {
        const json = await resp.json()

        handleNext({ api_response: json, filters: data })
      } else {
        setText(`Ocorreu um erro ao buscar leads, cheque seus filtros e tente novamente`)
        setOpenAlert(true)
      }
    } catch (error) {
      console.log('error', error)
      setText(`Ocorreu um erro ao buscar leads, por favor, tente novamente`)
      setOpenAlert(true)
    }
  }
  const onReset: () => void = () => reset()

  console.log('errors', errors)

  const disabledSubmit = Object.keys(errors).length > 0 ? true : false

  return (
    <CardContent>
      <form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/*   <ImgStyled src={imgSrc} alt='Profile Pic' /> */}
              <Box>
                <Typography variant='h6' sx={{ marginTop: 1 }}>
                  Configure os filtros para sua prospecção
                </Typography>
              </Box>
              {/*   <Box>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Upload New Photo
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                  Reset
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Allowed PNG or JPEG. Max size of 800K.
                </Typography>
              </Box> */}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Controller
              name='prospect_name'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label='Nome da prospecção'
                  placeholder='Leads para lançamento 1'
                  required
                  error={!!errors.prospect_name}
                  helperText={errors.prospect_name?.message}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            {/* Cidades deve receber uma lista de string, -- tip = usar autocomplete compnent */}
            <Controller name='cities' control={control} render={({ field }) => <Cities {...field} />} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Controller name='states' control={control} render={({ field }) => <States {...field} />} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl>
              <FormLabel id='gender-radiogroup-label'>Gênero</FormLabel>
              <Controller
                name='gender'
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RadioGroup row value={value} onChange={onChange}>
                    {generateRadioOptions(GENDER_OPTIONS)}
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Grid>

          <Grid container item xs={12} sm={12} justifyContent='space-around'>
            <Grid item xs={12} sm={12} sx={{ mb: 3 }}>
              <FormLabel id='age-label'>Faixa etária</FormLabel>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                px: 1
              }}
            >
              <Controller
                name='minimum_age'
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    type='number'
                    label='Idade mínima'
                    placeholder='ex: 0'
                    error={!!errors.minimum_age}
                    helperText={errors.minimum_age?.message}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                px: 1
              }}
            >
              <Controller
                name='maximum_age'
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    type='number'
                    label='Idade máxima'
                    placeholder='ex: 60'
                    error={!!errors.maximum_age}
                    helperText={errors.maximum_age?.message}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={12} sx={{ mb: 1, mt: 7 }}>
              <FormLabel id='age-label'>Mês de nascimento</FormLabel>
            </Grid>

            <Grid
              container
              item
              xs={12}
              sm={12}
              sx={{
                px: 1
              }}
            >
              <FormControl>
                <Controller
                  name='by_birth_month'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <RadioGroup row value={value} onChange={onChange}>
                      {generateRadioOptions(BRAZILIAN_MONTHS_OPTIONS)}
                    </RadioGroup>
                  )}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Controller name='occupations' control={control} render={({ field }) => <Occupation {...field} />} />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Income control={control} errors={errors} />
          </Grid>

          {openAlert ? (
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Alert
                severity='warning'
                sx={{ '& a': { fontWeight: 400 } }}
                action={
                  <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpenAlert(false)}>
                    <Close fontSize='inherit' />
                  </IconButton>
                }
              >
                <AlertTitle>{text}</AlertTitle>
                {/*     <Link href='/' onClick={(e: SyntheticEvent) => e.preventDefault()}>
                  Resend Confirmation
                </Link> */}
              </Alert>
            </Grid>
          ) : null}

          <Grid item xs={12}>
            <Button variant='contained' disabled={disabledSubmit} sx={{ marginRight: 3.5 }} type='submit'>
              Buscar leads
            </Button>
            <Button type='reset' variant='outlined' color='secondary'>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default MailingForm
