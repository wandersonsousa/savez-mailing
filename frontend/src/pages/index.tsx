import WhiteLayout from '@/presentation/@core/layouts/WhiteLayout'
import Header from '@/presentation/views/site/Header'
import { Box, Button, Grid, SpeedDial, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useEffect } from 'react'
import { Whatsapp } from 'mdi-material-ui'
import Footer from '@/presentation/views/site/Footer'
import { useUser } from '@/context/UserContext'
import { SITE_NAME } from '@/utils/constants'

const HomePage = () => {
  const { authenticated } = useUser()
  /* useEffect(() => {
    window.tolstoyAppKey = 'b715dae7-c1b6-4118-bc93-112b0c567563'
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = 'https://widget.gotolstoy.com/widget/widget.js'
    document.head.appendChild(s)

    return () => {
      document.head.removeChild(s)
    }
  }, []) */

  return (
    <Box style={{
      height: '100vh',
    }}>
      <Header authenticated={Boolean(authenticated)} />
      <Box
        sx={{
          width: '100vw',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white'
        }}
      >
        <Grid
          container
          sx={{
            width: '100vw',

            backgroundImage: 'url(/images/app/site_banner.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            minHeight: `100%`,
            mx: 'auto',
            pt: 12,
          }}
          alignItems={'center'}
        >
          <Grid container item xs={12} md={6}></Grid>

          <Grid item xs={12} md={6} sx={{ px: 2 }}>
            <Typography variant='h3' sx={{ mb: 10, lineHeight: 1, color: 'white' }}>
              <span style={{
                textTransform: 'uppercase',
              }}>{SITE_NAME}</span>: A MAIOR EM EXTRAÇÃO DE CONTATOS
            </Typography>
            <Typography variant='body1' sx={{ lineHeight: 1.2, mt: 5, color: '#ecf0f1' }}>
              Olá! Seja bem vido a {SITE_NAME} a maior plataforma de extração de ‘leads’ no Brasil aqui você vai
              extrair por Idade, Sexo M/F, Renda Salarial, Cidade  e Estado os contatos vem com nomes de usuários dos
              números.
            </Typography>

            <Box sx={{ mt: 5, }}>
              <Typography component='p' variant='caption' style={{ color: '#ecf0f1', opacity: 0.9 }}>
                11982969676
              </Typography>
              <Typography component='p' variant='caption' style={{ color: '#ecf0f1', opacity: 0.9 }}>
                financeiro@safez.com.br
              </Typography>
              <Typography component='p' variant='caption' style={{ color: '#ecf0f1', opacity: 0.9 }}>
                Rua Placeholder - ST
              </Typography>
            </Box>

            <Link passHref href='/register'>
              <Button variant='contained' sx={{ mt: 6 }}>
                Quero extrair meus leads agora
              </Button>
            </Link>
          </Grid>
        </Grid>
        {/*  <SpeedDial
          ariaLabel='SpeedDial basic example'
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<Whatsapp />}
        ></SpeedDial> */}
      </Box>
      <Footer />
    </Box>
  )
}

HomePage.getLayout = (page: ReactNode) => <WhiteLayout>{page}</WhiteLayout>

export default HomePage
