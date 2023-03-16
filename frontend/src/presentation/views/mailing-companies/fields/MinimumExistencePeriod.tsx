import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ptBr from 'date-fns/locale/pt-BR'
import { TextField } from '@mui/material'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { ICompaniesMailingFormFields } from '@/presentation/types/mailing-form'

registerLocale('ptbr', ptBr)

type Props = {
  control: Control<ICompaniesMailingFormFields, any>
  errors: FieldErrors<ICompaniesMailingFormFields>
}

export default function MinimumExistencePeriod({ control, errors }: Props) {
  return (
    <Controller
      name='minimum_existence_time'
      control={control}
      render={({ field }) => (
        <DatePicker
          locale='ptbr'
          selected={field.value}
          onChange={field.onChange}
          dateFormat='dd-MM-yyyy'
          isClearable={true}
          customInput={
            <TextField
              fullWidth
              InputProps={{
                readOnly: true
              }}
              error={!!errors.minimum_existence_time}
              helperText={errors.minimum_existence_time?.message}
            />
          }
        />
      )}
    />
  )
}
