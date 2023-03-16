import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { Typography } from '@mui/material'
import { IMailingFormFields } from 'src/presentation/types/mailing-form'

type Props = {
  control: Control<IMailingFormFields, any>
  errors: FieldErrors<IMailingFormFields>
}

/*
    Social/Econômico
    A (A partir de R$17.434,00)
    B+ (entre R$9.897,00 e R$17.434,00)
    B- (entre R$4.681,00 e R$9.897,00)
    C+ (entre R$2.674,00 e R$4.681,00)
    C (entre R$1.484,00 e R$2.674,00)
    C- (entre R$1.113,00 e R$1.484,00)
    D/E (até R$1.113,00
*/
const HelperText = () => {
  return (
    <>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant='caption'>Social/Econômico</Typography>
      </Grid>
      <Grid item xs={6}>
        <ul>
          <li>
            <Typography variant='caption'>A (A partir de R$17.434,00)</Typography>
          </li>
          <li>
            <Typography variant='caption'>B+ (entre R$9.897,00 e R$17.434,00)</Typography>
          </li>
          <li>
            <Typography variant='caption'>B- (entre R$4.681,00 e R$9.897,00)</Typography>
          </li>
          <li>
            <Typography variant='caption'>C+ (entre R$2.674,00 e R$4.681,00)</Typography>
          </li>
        </ul>
      </Grid>
      <Grid item xs={6}>
        <ul>
          <li>
            <Typography variant='caption'>C (entre R$1.484,00 e R$2.674,00)</Typography>
          </li>
          <li>
            <Typography variant='caption'>C- (entre R$1.113,00 e R$1.484,00)</Typography>
          </li>
          <li>
            <Typography variant='caption'>D/E (até R$1.113,00)</Typography>
          </li>
        </ul>
      </Grid>
    </>
  )
}
export default function ({ control, errors }: Props) {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          px: 1
        }}
      >
        <Controller
          name='minimum_income'
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              type='number'
              label='Renda mínima'
              placeholder='ex: 1200'
              error={!!errors.minimum_income}
              helperText={errors.minimum_income?.message}
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
          name='maximum_income'
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              type='number'
              label='Renda máxima'
              placeholder='ex: 2000'
              error={!!errors.maximum_income}
              helperText={errors.maximum_income?.message}
              {...field}
            />
          )}
        />
      </Grid>
      <HelperText />
    </Grid>
  )
}
