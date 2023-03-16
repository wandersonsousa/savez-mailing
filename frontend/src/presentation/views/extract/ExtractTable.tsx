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

import _ from 'lodash'
import { timestampToBrazilianDate } from '@/helpers/time'

interface Column {
  id: 'type' | 'id' | 'amount' | 'username' | 'status' | 'createdAt'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'type', label: 'Tipo', minWidth: 170 },
  { id: 'id', label: 'id', minWidth: 100 },
  {
    id: 'amount',
    label: 'Valor',
    minWidth: 85,
    align: 'right'
  },
  {
    id: 'username',
    label: 'Usuário',
    minWidth: 85,
    align: 'right'
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'createdAt',
    label: 'Criado em',
    minWidth: 170,
    align: 'right'
  }
]

interface Data {
  type: string
  id: number
  amount: number
  username: string
  status: string
  createdAt: string
}

interface FirebaseExtractSchema {
  amount: number
  payment_id: number
  status: string
  type: string
  user_uid: string
  profile: {
    name: string
  }
  createdAt: number
  updatedAt: number
}

function createData(extractData: FirebaseExtractSchema): Data {
  return {
    amount: extractData.amount,
    createdAt: timestampToBrazilianDate(extractData.createdAt),
    id: extractData.payment_id,
    status: extractData.status,
    type: extractData.type,
    username: extractData.profile?.name
  }
}

const ExtractTable = ({ firebaseData }: { firebaseData: FirebaseExtractSchema[] }) => {
  const rows = useMemo(() => {
    const orderedDocs = _.orderBy(firebaseData, doc => doc.updatedAt || 0, ['desc'])
    const formattedDocs = orderedDocs.map(doc => createData(doc))

    return formattedDocs
  }, [firebaseData])

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

export default ExtractTable
