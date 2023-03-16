import { FormLabel, Grid, TextField } from '@mui/material'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { ICompaniesMailingFormFields } from '@/presentation/types/mailing-form'

type Props = {
  control: Control<ICompaniesMailingFormFields, any>
  errors: FieldErrors<ICompaniesMailingFormFields>
}

export default function NumberOfEmployess({ control, errors }: Props) {
  return (
    <Grid container item xs={12} sm={12} justifyContent='space-around'>
      <Grid item xs={12} sm={12} sx={{ mb: 3 }}>
        <FormLabel id='age-label'>Número de funcionários</FormLabel>
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
          name='minimum_employess'
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              type='number'
              label='Mínimo'
              placeholder='ex: 0'
              error={!!errors.minimum_employess}
              helperText={errors.minimum_employess?.message}
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
          name='maximum_employess'
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              type='number'
              label='Máximo'
              placeholder='ex: 60'
              error={!!errors.maximum_employess}
              helperText={errors.maximum_employess?.message}
              {...field}
            />
          )}
        />
      </Grid>
    </Grid>
  )
}
