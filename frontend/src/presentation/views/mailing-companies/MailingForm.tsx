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

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

// ** Form Options
import { COMPANY_TYPE_OPTIONS, COMPANY_SIZE_OPTIONS } from 'src/utils/constants'

// ** Form libs
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Validation Schemas
import validationSchema from 'src/form-validations/companies-mailing-validation'

// ** Types
import { ICompaniesMailingFormFields } from 'src/presentation/types/mailing-form'

// ** helpers
import States from './fields/States'
import { formDataToGetCountCompaniesPayload } from 'src/helpers/prospec'
import Cities from './fields/Cities'
import Cnaes from './fields/Cnaes'
import { RadioGroup } from '@mui/material'
import { generateRadioOptions } from './helpers'
import Neighborhoods from './fields/Neighborhoods'

const MailingForm = ({ handleNext }: { handleNext: (dataForNextStep: any) => void }) => {
  // ** State
  const [openAlert, setOpenAlert] = useState<boolean>(false)
  const [text, setText] = useState('Não foram encontrados leads para a busca')

  // ** Form config
  const {
    control,
    watch,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ICompaniesMailingFormFields>({
    defaultValues: {
      prospect_name: '',
      cnaes_codes: [],
      cities: [],
      states: [],
      neighborhoods: [],
      simples_type: '',
      mei_type: '',
      import_export: '',
      company_type: ''
    },
    resolver: yupResolver(validationSchema)
  })
  const onSubmit: SubmitHandler<ICompaniesMailingFormFields> = async data => {
    try {
      const payload = formDataToGetCountCompaniesPayload(data)
      const resp = await fetch('https://api.datastone.com.br/v1/company/prospect/', {
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
  const disabledSubmit = Object.keys(errors).length > 0 ? true : false

  const watchCities = watch('cities')
  const watchStates = watch('states')

  return (
    <CardContent>
      <form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box>
                <Typography variant='h6' sx={{ marginTop: 1 }}>
                  Configure os filtros para prospecção de empresas
                </Typography>
              </Box>
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
            <Controller
              name='neighborhoods'
              control={control}
              render={({ field }) => <Neighborhoods {...field} cities={watchCities} states={watchStates} />}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormControl>
              <FormLabel id='gender-radiogroup-label'>Tipo de empresa</FormLabel>
              <Controller
                name='company_type'
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RadioGroup row value={value} onChange={onChange}>
                    {generateRadioOptions(COMPANY_TYPE_OPTIONS)}
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Grid>

          {/*   <Grid container item xs={12} sm={12} justifyContent='space-around'>
            <Grid item xs={12} sx={{ mb: 3 }}>
              Tempo de existência
            </Grid>
            <Grid item xs={12} md={6} sx={{ px: 1 }}>
              <FormControl fullWidth>
                <FormLabel>Mínimo</FormLabel>
                <MinimumExistencePeriod control={control} errors={errors} />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} sx={{ px: 1 }}>
              <FormControl fullWidth>
                <FormLabel>Máximo</FormLabel>
                <MaximumExistencePeriod control={control} errors={errors} />
              </FormControl>
            </Grid>
          </Grid> */}
          {/* 
          <NumberOfEmployess control={control} errors={errors} /> */}

          {/*           <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <FormLabel>Contatos Profissinais</FormLabel>
              <Controller
                name='business_contacts'
                control={control}
                render={({ field }) => <BusinessContacts {...field} />}
              />
            </FormControl>
          </Grid>
 */}
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <FormLabel>Atividade (CNAE)</FormLabel>
              <Controller name='cnaes_codes' control={control} render={({ field }) => <Cnaes {...field} />} />
            </FormControl>
          </Grid>

          <Grid container item xs={12} sm={12} justifyContent='space-around'>
            <Grid item xs={12} sx={{ mb: 3 }}>
              Faturamento Anual Estimado
            </Grid>
            <Grid item xs={12} md={6} sx={{ px: 1 }}>
              <FormControl fullWidth>
                <Controller
                  name='minimum_annual_billinng'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      type='number'
                      label='Mínimo'
                      placeholder='ex: 0'
                      error={!!errors.minimum_annual_billinng}
                      helperText={errors.minimum_annual_billinng?.message}
                      {...field}
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} sx={{ px: 1 }}>
              <FormControl fullWidth>
                <Controller
                  name='maximum_annual_billinng'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      type='number'
                      label='Máximo'
                      placeholder='ex: 0'
                      error={!!errors.maximum_annual_billinng}
                      helperText={errors.maximum_annual_billinng?.message}
                      {...field}
                    />
                  )}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl>
              <FormLabel id='gender-radiogroup-label'>Porte empresa</FormLabel>
              <Controller
                name='company_size'
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RadioGroup row value={value} onChange={onChange}>
                    {generateRadioOptions(COMPANY_SIZE_OPTIONS)}
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Grid>
          {/* 
          <Grid item xs={12} sm={12}>
            <FormControl>
              <FormLabel id='gender-radiogroup-label'>Optante MEI</FormLabel>
              <Controller
                name='mei_type'
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RadioGroup row value={value} onChange={onChange}>
                    {generateRadioOptions(MEI_OPTIONS)}
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl>
              <FormLabel id='gender-radiogroup-label'>Optante Simples Nacional</FormLabel>
              <Controller
                name='simples_type'
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RadioGroup row value={value} onChange={onChange}>
                    {generateRadioOptions(SIMPLES_OPTIONS)}
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Grid> */}

          {/*  <Grid container item xs={12} sm={12} justifyContent='space-around'>
            <Grid item xs={12} sx={{ mb: 3 }}>
              Capital Social
            </Grid>
            <Grid item xs={12} md={6} sx={{ px: 1 }}>
              <FormControl fullWidth>
                <Controller
                  name='minimum_capital_stock'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      type='number'
                      label='Mínimo'
                      placeholder='ex: 0'
                      error={!!errors.minimum_capital_stock}
                      helperText={errors.minimum_capital_stock?.message}
                      {...field}
                    />
                  )}
                />
              </FormControl>
            </Grid> 
            <Grid item xs={12} md={6} sx={{ px: 1 }}>
              <FormControl fullWidth>
                <Controller
                  name='maximum_capital_stock'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      type='number'
                      label='Máximo'
                      placeholder='ex: 0'
                      error={!!errors.maximum_capital_stock}
                      helperText={errors.maximum_capital_stock?.message}
                      {...field}
                    />
                  )}
                />
              </FormControl>
            </Grid>
          </Grid>*/}

          {/*  <Grid item xs={12} sm={12}>
            <FormControl>
              <FormLabel id='gender-radiogroup-label'>Importador ou Exportador</FormLabel>
              <Controller
                name='import_export'
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RadioGroup row value={value} onChange={onChange}>
                    {generateRadioOptions(IMPORT_EXPORT_OPTIONS)}
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Grid>

          <Grid container item xs={12} sm={12} justifyContent='space-around'>
            <Grid item xs={12} sx={{ mb: 3 }}>
              Quantidade de Veículos
            </Grid>
            <Grid item xs={12} md={6} sx={{ px: 1 }}>
              <FormControl fullWidth>
                <Controller
                  name='minimum_vehicles'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      type='number'
                      label='Mínimo'
                      placeholder='ex: 0'
                      error={!!errors.minimum_vehicles}
                      helperText={errors.minimum_vehicles?.message}
                      {...field}
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} sx={{ px: 1 }}>
              <FormControl fullWidth>
                <Controller
                  name='maximum_vehicles'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      type='number'
                      label='Máximo'
                      placeholder='ex: 0'
                      error={!!errors.maximum_vehicles}
                      helperText={errors.maximum_vehicles?.message}
                      {...field}
                    />
                  )}
                />
              </FormControl>
            </Grid>
           
          </Grid>
  */}
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
