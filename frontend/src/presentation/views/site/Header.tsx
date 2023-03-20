import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Image from 'next/image'
import { AccountCircle } from 'mdi-material-ui'

export default function Header({ authenticated }: { authenticated: boolean }) {
  return (
    <AppBar position='static'>
      <Toolbar sx={{ background: 'white' }}>
        <Image src='/images/app/logo_boneco_p.png' width={70} height={70} alt='Listaig logo' />
        <Typography variant='h6' color='GrayText' component='div' sx={{ flexGrow: 1 }}>
          Lista-IG
        </Typography>
        {authenticated && (
          <AccountCircle
            onClick={() => {
              window.location = '/dashboard'
            }}
            style={{ width: 25, height: 25, margin: 5, color: '#242526', cursor: 'pointer' }}
          />
        )}
        {!authenticated && (
          <>
            {' '}
            <Link href='/login' passHref>
              <Button>
                <Typography color='GrayText'>Login</Typography>
              </Button>
            </Link>
            <Link href='/register' passHref>
              <Button>
                <Typography color='GrayText'>Cadastre-se</Typography>
              </Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}
