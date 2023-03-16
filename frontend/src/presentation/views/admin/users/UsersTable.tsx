// ** React Imports
import { useState, ChangeEvent, useMemo } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import { Button } from '@mui/material'
import { timestampToBrazilianDate } from '@/helpers/time'
import { UserStatus } from '@/utils/constants'
import { formatPhoneNumber, formatUserStatusFromEnum } from '@/utils'
import _ from 'lodash'

interface Column {
  id:
    | 'name'
    | 'photoUrl'
    | 'status'
    | 'createdAt'
    | 'email'
    | 'updatedAt'
    | 'whatsapp_phone'
    | 'lastLoginAt'
    | 'actions'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Nome', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 100 },
  { id: 'whatsapp_phone', label: 'Phone', minWidth: 100 },
  { id: 'lastLoginAt', label: 'Último login em', minWidth: 100 },

  { id: 'photoUrl', label: 'Foto', minWidth: 100 },
  {
    id: 'status',
    label: 'Status',
    minWidth: 85,
    align: 'right'
  },
  {
    id: 'createdAt',
    label: 'criado em',
    minWidth: 160,
    align: 'right'
  },
  {
    id: 'actions',
    label: 'Ações',
    minWidth: 170,
    align: 'right'
  }
]

interface Data {
  id: string
  name: string
  photoUrl: React.ReactNode
  status: string
  email: string
  whatsapp_phone: string
  lastLoginAt: string
  updatedAt: string
  createdAt: string
  actions: React.ReactNode
}

interface FirebaseSchema {
  id: string
  name: string
  email: string
  status: UserStatus
  credit_balance: {
    whatsapp: number
  }
  lastLoginAt: number
  createdAt: number
  updatedAt: number
  whatsapp_phone: string
}

function createData(firebaseDoc: FirebaseSchema): Data {
  return {
    id: firebaseDoc.id,
    name: firebaseDoc.name,
    email: firebaseDoc.email,
    lastLoginAt: timestampToBrazilianDate(firebaseDoc.lastLoginAt),
    status: formatUserStatusFromEnum(firebaseDoc.status),
    createdAt: timestampToBrazilianDate(firebaseDoc.createdAt),
    updatedAt: timestampToBrazilianDate(firebaseDoc.updatedAt),
    photoUrl: <h1>oi</h1>,
    whatsapp_phone: formatPhoneNumber(firebaseDoc.whatsapp_phone),
    actions: (
      <>
        <Button
          variant='contained'
          onClick={() => {
            console.log('oi')
          }}
        >
          deletar
        </Button>
      </>
    )
  }
}

const UsersTable = ({ remote_users }: { remote_users: FirebaseSchema[] }) => {
  const rows = useMemo(() => {
    const orderedDocs = _.orderBy(remote_users, prospection => prospection.updatedAt || 0, ['desc'])
    const formattedDocs = orderedDocs.map(prospectionData => createData(prospectionData))

    return formattedDocs
  }, [remote_users])

  // ** States
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer
        sx={{
          maxHeight: 440,
          overflowY: 'scroll',
          '&::-webkit-scrollbar': {
            width: 0
          }
        }}
      >
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default UsersTable
