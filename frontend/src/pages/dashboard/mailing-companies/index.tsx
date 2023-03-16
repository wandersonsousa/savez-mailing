// ** React
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import LoadingButton from '@mui/lab/LoadingButton'

// ** Views
import MailingForm from 'src/presentation/views/mailing-companies/MailingForm'

// ** utils
import get from 'lodash/get'
import { useUser } from '@/context/UserContext'
import { Alert, TextField } from '@mui/material'
import Link from 'next/link'
import { prospectCompanies } from '@/services/Datastone'

const steps = ['Configure os filtros', 'Confirme o pedido', 'Resultado']

const NewMailingPage = () => {
  const { user } = useUser()
  const currentUserWaCredit = Number(get(user, 'credit_balance.whatsapp', 0))

  const [activeStep, setActiveStep] = useState(0)
  const [completed] = useState<{
    [k: number]: boolean
  }>({})

  const [stepData, setStepData] = useState<any>({})

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = (dataForNextStep: any) => {
    setStepData(dataForNextStep)
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStep = (step: number) => () => {
    setActiveStep(step)
  }

  const [quantity, setQuantity] = useState(0)

  const api_response = get(stepData, 'api_response', {})
  const filters = get(stepData, 'filters', {})

  const prospect_count = get(api_response, 'count', 0)

  const errorBiggerThanCurrentCredit = quantity > currentUserWaCredit
  const errorBiggerThanResult = quantity > prospect_count
  const error = errorBiggerThanCurrentCredit || errorBiggerThanResult
  const errorText = errorBiggerThanCurrentCredit
    ? 'Você não possui essa quantidade de créditos disponível'
    : 'Quantidade não pode ser maior que resultado'

  const [loading, setLoading] = useState(false)

  const callProspectService = async () => {
    setLoading(true)
    if (!user) return false
    const response = await prospectCompanies(filters, quantity, user)
    if (response.done) {
      setLoading(false)
      handleNext(response)
    } else {
      alert(response.error.description)
    }
    setLoading(false)
  }

  return (
    <Card sx={{ p: 5 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color='inherit' onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>

      <div>
        <>
          {activeStep === 0 && <MailingForm handleNext={handleNext} />}
          {activeStep === 1 && (
            <Box sx={{ p: 3, pt: 8 }}>
              <Typography variant='h6'>Confirme o pedido</Typography>
              <Typography>Foram encontrados {prospect_count} leads, deseja prosseguir com a extração ?</Typography>

              <Box sx={{ my: 8 }}>
                <TextField
                  label='Quantidade de registros que deseja extrair'
                  value={quantity}
                  onChange={e => setQuantity(Number(e.target.value))}
                  error={error}
                  helperText={errorText}
                  fullWidth
                  type='number'
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                <LoadingButton
                  loading={loading}
                  disabled={error || quantity === 0}
                  variant='contained'
                  color='primary'
                  onClick={callProspectService}
                  sx={{ marginRight: 3.5 }}
                >
                  Confirmar
                </LoadingButton>
                <Button variant='contained' color='secondary' onClick={handleBack} sx={{ marginRight: 3.5 }}>
                  Voltar para filtros
                </Button>
              </Box>
              {error && (
                <Box sx={{ mt: 4 }}>
                  <Alert severity='warning'>
                    Você não possui créditos suficientes:{' '}
                    <Link href='/dashboard/deposit'>Solicite mais créditos para continuar</Link>
                  </Alert>
                </Box>
              )}
            </Box>
          )}

          {activeStep === 2 && (
            <Box sx={{ p: 3, pt: 8 }}>
              <Typography variant='h6'>Prospecção iniciada</Typography>
              <Typography>
                Acesse a página de <Link href='/dashboard/history'>prospecção</Link> para visualizar o resultado e
                baixar seus leads
              </Typography>
            </Box>
          )}

          {/*   <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color='inherit' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext} sx={{ mr: 1 }}>
              Next
            </Button>
            {activeStep !== steps.length &&
              (completed[activeStep] ? (
                <Typography variant='caption' sx={{ display: 'inline-block' }}>
                  Step {activeStep + 1} already completed
                </Typography>
              ) : (
                <Button onClick={handleComplete}>
                  {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                </Button>
              ))}
          </Box> */}
        </>
      </div>
    </Card>
  )
}

export default NewMailingPage

/** Example Body Request
{
  "name": "string",
  "cities": [
    "BELO HORIZONTE - MG"
  ],
  "states": [
    "MG"
  ],
  "neighborhoodies": [
    "CENTRO - BELO HORIZONTE - MG"
  ],
  "cbo_codes": [
    "212405"
  ],
  "estimated_employees": [
    {
      "lower": 3,
      "upper": 12
    }
  ],
  "cnae_codes": [
    "8550301"
  ],
  "estimated_created": [
    {
      "lower": "1990-01-20",
      "upper": "2000-12-31"
    }
  ],
  "revenues": [
    {
      "lower": "50000.00",
      "upper": "125000.00"
    }
  ],
  "headquarter_type": "H",
  "export": false,
  "quantity": 10,
  "callback_email": "no-reply@datastone.com.br",
  "plan": 1,
  "contact_channels": [
    "phone"
  ],
  "file_formatting": "csv",
  "capitals": [
    {
      "lower": "50000.00",
      "upper": "150000.00"
    }
  ],
  "sector_codes": [
    "EDUCAÇÃO"
  ],
  "nature_codes": [
    "2291"
  ],
  "vehicles": [
    {
      "lower": "1",
      "upper": "2000"
    }
  ],
  "company_type": "ME",
  "mei_type": "SIM",
  "simple_type": "NAO",
  "import_export": "IMPORTA"
}
 * 
 */
