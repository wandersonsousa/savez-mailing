import { Autocomplete, TextField } from '@mui/material'
import { FieldOption } from 'src/types/form'
import { BRAZILIAN_STATES_OPTIONS } from 'src/utils/constants'

export default function ({ onChange, onBlur }: any) {
  return (
    <Autocomplete
      multiple
      id='states'
      options={BRAZILIAN_STATES_OPTIONS}
      getOptionLabel={(option: FieldOption) => option.label}
      renderInput={params => <TextField {...params} variant='standard' label='Selecione os estados' placeholder='PI' />}
      sx={{ zIndex: 10 }}
      limitTags={3}
      onChange={(event, value) => {
        onChange(value.map(val => val.value))
      }}
      onBlur={onBlur}
    />
  )
}
