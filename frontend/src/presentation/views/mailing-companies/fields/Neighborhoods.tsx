import Chip from '@mui/material/Chip'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { searchNeighborhoods } from '@/services/Datastone'
import { Typography } from '@mui/material'

const getNeighborhoods = async (query: string, city: string, state: string): Promise<string[]> => {
  const data = await searchNeighborhoods(query, city, state)

  return data
}

export default function Neighborhoods({
  options,
  onChange,
  cities = []
}: {
  options?: string[]
  onChange: (value: string[]) => void
  cities: string[]
}) {
  const formatedOptions = Array.isArray(options) && options
  const [internalOptions, setInternalOptions] = useState(formatedOptions || [])

  const canAddNeighborhoods = cities.length === 1
  const city = cities[0]

  const cityFromCityField = city && city.split('-')[0]
  const stateFromCityField = city && city.split('-')[1]

  return (
    <>
      <Typography sx={{ mb: 3 }}>Para adicionar um bairro você deve primeiro selecionar uma cidade</Typography>
      <Autocomplete
        disabled={!canAddNeighborhoods}
        multiple
        id='neighborhoods'
        freeSolo
        options={internalOptions}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant='outlined' label={option} {...getTagProps({ index })} key={index} />
          ))
        }
        onChange={(event, value) => {
          onChange(value)
        }}
        onInputChange={async (event, value) => {
          const neighborhoods = await getNeighborhoods(value, cityFromCityField, stateFromCityField)
          setInternalOptions(neighborhoods)
        }}
        renderInput={params => <TextField {...params} variant='outlined' label='Bairros' placeholder='...' />}
      />
    </>
  )
}
