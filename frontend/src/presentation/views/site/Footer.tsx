import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import { Box } from '@mui/material'
import { Instagram, Facebook, Twitter } from 'mdi-material-ui'
import Youtube from 'mdi-material-ui/Youtube'

const socialMedias = [
  {
    name: 'instagram',
    link: 'https://www.instagram.com/facilitysoftware/',
    icon: <Instagram fontSize={'large'} color={'secondary'} />
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=100078392101288',
    icon: <Facebook fontSize={'large'} color={'secondary'} />
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/channel/UCmVf3npjoabW3P7U0fNGD7w',
    icon: <Youtube fontSize={'large'} color={'secondary'} />
  }
]

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={theme => ({
        backgroundColor: 'white',
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(4),
        marginTop: 'auto'
      })}
    >
      <Grid container spacing={1} justifyContent='center'>
        <Grid item md={4} sm={12} xs={12} style={{ paddingLeft: 15 }}>
          <Grid container spacing={4} alignContent='center' justifyContent='center'>
            {socialMedias.map((media, index) => (
              <Grid item sm={2} key={index}>
                <Grid container alignContent='center' justifyContent='center'>
                  <a href={media.link} target={'_blank'} rel='noreferrer'>
                    {media.icon}
                  </a>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Divider />
        <Grid item md={4} sm={12} xs={12}>
          <Typography variant='subtitle1' align='center' color='GrayText'>
            Lista-IG
          </Typography>
          <a href={'#'} sx={theme => ({ textDecoration: 'none', color: theme.palette.primary.contrastText })}>
            <Typography variant='body2' align='center' color='GrayText' gutterBottom>
              Encontre os melhores leads
            </Typography>
          </a>
          <Typography variant='body2' align='center'>
            {'Copyright © '}

            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Grid container spacing={0} alignContent='center' justifyContent='center'>
            <Grid item md={4} sm={12} xs={12}>
              <Link href='/page/politica-de-privacidade' passHref>
                <Typography
                  variant='body2'
                  align='center'
                  color='GrayText'
                  gutterBottom
                  sx={{
                    display: 'block',
                    textDecoration: 'none'
                  }}
                >
                  Políticas de Privacidade
                </Typography>
              </Link>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Link
                href='/page/termos-de-uso'
                passHref
                sx={{
                  display: 'block',
                  textDecoration: 'none'
                }}
              >
                <Typography variant='body2' color='GrayText' align='center' gutterBottom>
                  Termos de uso
                </Typography>
              </Link>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Link
                href='/page/quem-somos'
                passHref
                sx={{
                  display: 'block',
                  textDecoration: 'none'
                }}
              >
                <Typography variant='body2' color='GrayText' align='center' gutterBottom>
                  Quem somos
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
