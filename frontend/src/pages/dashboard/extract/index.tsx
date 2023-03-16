// ** React
import { useEffect } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'

import { useUser } from '@/context/UserContext'
import { useExtracts } from '@/hooks/data'
import ExtractTable from '@/presentation/views/extract/ExtractTable'

const ExtractPage = () => {
  const { user } = useUser()
  const { fetchData, data } = useExtracts({
    filters: [
      {
        field: 'user_uid',
        op: '==',
        value: user ? user.uid : ''
      }
    ]
  })

  useEffect(() => {
    fetchData()
  }, [user?.uid])

  return (
    <Card>
      <ExtractTable firebaseData={data} />
    </Card>
  )
}

export default ExtractPage
