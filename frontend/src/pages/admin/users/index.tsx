// ** React
import { useEffect } from 'react'

import { useUser } from '@/context/UserContext'
import { useProfiles } from '@/hooks/data'
import { Card } from '@mui/material'
import UsersTable from '@/presentation/views/admin/users/UsersTable'

const UsersPage = () => {
  const { user } = useUser()
  const { fetchData, data } = useProfiles({
    filters: [
      /*  {
        field: 'user_owner.uid',
        op: '==',
        value: user ? user.uid : ''
      } */
    ]
  })

  useEffect(() => {
    fetchData()
  }, [user?.uid])

  return (
    <Card>
      <UsersTable remote_users={data} />
    </Card>
  )
}

export default UsersPage
