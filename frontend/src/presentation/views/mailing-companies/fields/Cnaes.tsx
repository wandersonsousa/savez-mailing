import Chip from '@mui/material/Chip'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { Cnae, searchCnaes } from '@/services/Datastone'
import CircularProgress from '@mui/material/CircularProgress'

const getOptions = async (query: string): Promise<Cnae[]> => {
  const data = await searchCnaes(query)

  return data
}

export default function Cnaes({ onChange }: { onChange: (value: (Cnae | string)[]) => void }) {
  const [internalOptions, setInternalOptions] = useState<Cnae[]>([])
  console.log('internal', internalOptions)

  const [loading, setLoading] = useState(false)

  return (
    <Autocomplete
      multiple
      id='cnaes'
      options={internalOptions}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip variant='outlined' label={option.description} {...getTagProps({ index })} key={index} />
        ))
      }
      getOptionLabel={option => option.description || ''}
      isOptionEqualToValue={(option, value) => option.code === value.code}
      onChange={(event, value) => {
        onChange(value)
      }}
      onInputChange={async (event, value) => {
        setLoading(true)
        const cnaes = await getOptions(value)
        setInternalOptions(cnaes)
        setLoading(false)
      }}
      loading={loading}
      renderInput={params => (
        <TextField
          {...params}
          variant='outlined'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color='inherit' size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            )
          }}
        />
      )}
    />
  )
}
