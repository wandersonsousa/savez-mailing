// ** React
import { useEffect } from 'react'

import { useUser } from '@/context/UserContext'
import HistoryTable from '@/presentation/views/history/HistoryTable'
import { useProspections } from '@/hooks/data'
import { Card } from '@mui/material'

const HistoryPage = () => {
  const { user } = useUser()
  const { fetchData, data } = useProspections({
    filters: [
      {
        field: 'user_owner.uid',
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
      <HistoryTable prospectionDataFromFirebase={data} />
    </Card>
  )
}

export default HistoryPage
