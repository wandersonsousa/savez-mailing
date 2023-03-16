import Chip from '@mui/material/Chip'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { searchCities } from '@/services/Datastone'

const getCities = async (query: string): Promise<string[]> => {
  const data = await searchCities(query)

  return data
}

export default function Cities({ options, onChange }: { options?: string[]; onChange: (value: string[]) => void }) {
  const formatedOptions = Array.isArray(options) && options
  const [internalOptions, setInternalOptions] = useState(formatedOptions || [])

  return (
    <Autocomplete
      multiple
      id='cities'
      freeSolo
      options={internalOptions}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => <Chip variant='outlined' label={option} {...getTagProps({ index })} key={index} />)
      }
      onChange={(event, value) => {
        onChange(value)
      }}
      onInputChange={async (event, value) => {
        const cities = await getCities(value)
        setInternalOptions(cities)
      }}
      renderInput={params => (
        <TextField
          {...params}
          variant='outlined'
          label='Cidades'
          placeholder='Bela Vista do Piauí - PI, Teresina - PI'
        />
      )}
    />
  )
}
