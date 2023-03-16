import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import { FieldOptions } from 'src/types/form'

export const generateRadioOptions = (options: FieldOptions): JSX.Element[] => {
  const radios = options.map(option => (
    <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
  ))

  return radios
}
