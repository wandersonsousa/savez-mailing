// ** React Imports
import { ChangeEvent, MouseEvent, ReactNode, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import Alert from '@mui/material/Alert'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/presentation/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/presentation/@core/layouts/BlankLayout'

// ** Demo Imports
import { useUser } from '@/context/UserContext'
import { FirebaseAuthentication } from '@/data/usecases'
import { SyntheticEvent } from 'react'
import { AccessDeniedError, InvalidCredentialsError, UnexpectedError } from '@/domain/errors'

interface State {
  email: string
  password: string
  showPassword: boolean
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

const LoginPage = () => {
  // ** Context
  const { setUser } = useUser()
  const [error, setError] = useState<string | null>(null)
  const showError = (errorMessage: string) => {
    setError(null)
    setTimeout(() => {
      setError(errorMessage)
    }, 100)
  }

  // ** State
  const [values, setValues] = useState<State>({
    email: '',
    password: '',
    showPassword: false
  })

  // ** Hook
  const router = useRouter()

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleLoginFormSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    const { email, password } = values

    const firebaseAuthentication = new FirebaseAuthentication()
    try {
      const user = await firebaseAuthentication.auth({ email, password })
      setUser(user)
      router.push('/dashboard')
    } catch (error) {
      if (error instanceof AccessDeniedError) {
        showError('Usuário não encontrado !')
      }

      if (error instanceof InvalidCredentialsError) {
        showError('Usuário ou senha incorretos !')
      }

      if (error instanceof UnexpectedError) {
        showError('Ocorreu um erro inesperado !')
      }
    }
  }

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent
          sx={{
            padding: theme => `${theme.spacing(12, 9, 7)} !important`
          }}
        >
          <Box
            sx={{
              backgroundColor: '#2c3e50',
              borderRadius: '10px',
              mb: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img src={'/images/app/login_banner.png'} width={300} height={150} alt='Company banner' />
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
              Bem vindo à {themeConfig.templateName}! 👋🏻
            </Typography>
            <Typography variant='body2'>Faça login para capturar seus leads</Typography>
          </Box>

          <form noValidate autoComplete='off' onSubmit={handleLoginFormSubmit}>
            <TextField
              value={values.email}
              onChange={handleChange('email')}
              fullWidth
              id='email'
              label='Email'
              sx={{ marginBottom: 4 }}
              variant='outlined'
            />
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-password'>Senha</InputLabel>
              <OutlinedInput
                label='Senha'
                value={values.password}
                id='auth-login-password'
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
                      {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {/* Not using this for now */}
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
              {/* 
              <FormControlLabel control={<Checkbox />} label='Remember Me' />
              <Link passHref href='/'>
                <LinkStyled onClick={e => e.preventDefault()}>Forgot Password?</LinkStyled>
              </Link>
              */}
            </Box>
            <Button fullWidth size='large' variant='contained' sx={{ marginBottom: 7 }} type='submit'>
              Login
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ marginRight: 2 }}>
                Novo na plataforma?
              </Typography>
              <Typography variant='body2'>
                <Link passHref href='/register'>
                  <LinkStyled>Crie uma conta</LinkStyled>
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

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default LoginPage
