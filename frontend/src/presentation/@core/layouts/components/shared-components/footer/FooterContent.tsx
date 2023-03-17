// ** MUI Imports
import { SITE_NAME, WHATSAPP_LINK } from '@/utils/constants'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        <Link target='_blank' href={WHATSAPP_LINK} sx={{ mr: 1 }}>
          {SITE_NAME} ®
        </Link>
        {`${new Date().getFullYear()} `}
      </Typography>

      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          <Link target='_blank' href={WHATSAPP_LINK}>
            Support
          </Link>
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
