import { Autocomplete, TextField } from '@mui/material'
import { FieldOption } from 'src/types/form'
import { CBO_OPTIONS } from 'src/utils/constants'

export default function BusinessContacts({ onChange, onBlur }: any) {
  return (
    <Autocomplete
      multiple
      id='business_contacts'
      options={CBO_OPTIONS}
      getOptionLabel={(option: FieldOption) => option.label}
      renderInput={params => (
        <TextField {...params} variant='standard' label='Selecione as profissões' placeholder='Vendedor' />
      )}
      sx={{ zIndex: 10 }}
      limitTags={3}
      onChange={(event, value) => {
        onChange(value.map(val => val.value))
      }}
      onBlur={onBlur}
    />
  )
}
