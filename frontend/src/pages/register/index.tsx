// ** React Imports
import { useState, Fragment, ChangeEvent, MouseEvent, ReactNode, SyntheticEvent } from 'react'

// ** Next Imports
import Link from 'next/link'
import Router from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/presentation/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/presentation/@core/layouts/BlankLayout'
import { FirebaseAddAccount } from '@/data/usecases'
import { Alert } from '@mui/material'
import { EmailInUseError, UnexpectedError } from '@/domain/errors'
import { useUser } from '@/context/UserContext'

// ** Demo Imports

interface State {
  name: string
  email: string
  whatsapp_phone: string
  password: string
  showPassword: boolean
  terms: boolean
}

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const RegisterPage = () => {
  const { authenticated, user, setUser } = useUser()

  // ** States
  const [values, setValues] = useState<State>({
    name: '',
    email: '',
    whatsapp_phone: '',
    password: '',
    showPassword: false,
    terms: false
  })
  const [error, setError] = useState<string | null>(null)
  const showError = (errorMessage: string) => {
    setError(null)
    setTimeout(() => {
      setError(errorMessage)
    }, 100)
  }

  // ** Hook
  const theme = useTheme()

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleRegisterFormSubit = async (event: SyntheticEvent) => {
    event.preventDefault()

    if (!values.terms) {
      showError('Você deve aceitar os termos e condições')

      return
    }

    if (!values.name || !values.email || !values.whatsapp_phone || !values.password) {
      showError('Preencha todos os campos')

      return
    }

    const firebaseAddAccount = new FirebaseAddAccount()
    try {
      const user = await firebaseAddAccount.add({
        name: values.name,
        email: values.email,
        password: values.password,
        whatsapp_phone: values.whatsapp_phone
      })
      setUser(user)
      Router.push('/')
    } catch (error) {
      if (error instanceof EmailInUseError) {
        showError('E-mail já cadastrado')
      }

      if (error instanceof UnexpectedError) {
        showError('Ocorreu um erro inesperado')
      }
    }
  }

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box
            sx={{
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#2c3e50',
              borderRadius: '10px'
            }}
          >
            <img src={'/images/app/login_banner.png'} width={300} height={150} alt='company banner' />
          </Box>
          <form noValidate autoComplete='off' onSubmit={handleRegisterFormSubit}>
            <TextField
              fullWidth
              value={values.name}
              onChange={handleChange('name')}
              id='name'
              label='Nome'
              sx={{ marginBottom: 4 }}
            />

            <TextField
              fullWidth
              value={values.whatsapp_phone}
              onChange={handleChange('whatsapp_phone')}
              id='whatsapp_phone'
              label='Whatsapp'
              sx={{ marginBottom: 4 }}
            />
            <TextField
              fullWidth
              value={values.email}
              onChange={handleChange('email')}
              type='email'
              label='Email'
              sx={{ marginBottom: 4 }}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-register-password'>Senha</InputLabel>
              <OutlinedInput
                label='Senha'
                value={values.password}
                id='auth-register-password'
                onChange={handleChange('password')}
                type={values.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      {values.showPassword ? <EyeOutline fontSize='small' /> : <EyeOffOutline fontSize='small' />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControlLabel
              value={values.terms}
              onChange={(event: SyntheticEvent) => {
                event.preventDefault()
                setValues({ ...values, terms: !values.terms })
              }}
              control={<Checkbox />}
              label={
                <Fragment>
                  <span>Eu concordo com as </span>
                  <Link href='/' passHref>
                    <LinkStyled onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}>
                      políticas de privacidade & termos
                    </LinkStyled>
                  </Link>
                </Fragment>
              }
            />
            <Button fullWidth size='large' type='submit' variant='contained' sx={{ marginBottom: 7 }}>
              Cadastrar
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ marginRight: 2 }}>
                Já possui uma conta?
              </Typography>
              <Typography variant='body2'>
                <Link passHref href='/login'>
                  <LinkStyled>Realize login aqui</LinkStyled>
                </Link>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {error && <Alert severity='error'>{error}</Alert>}
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}

RegisterPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default RegisterPage
